<template>
  <div id="app">
    <HeaderNav>
      <template #selectors>
        <ServerSelector
          v-model="server"
          :api-list="apiList"
        />
        <ProjectSelector
          v-model="projectToken"
          :projects="projects"
        />
      </template>
      <template #buttons>
        <button
          type="button"
          class="json-button"
          :disabled="!server"
          @click="openLink"
        >
          JSON
        </button>
        <button
          type="button"
          class="csv-button"
          :disabled="!Object.keys(stats).length"
          @click="makeCSVFile"
        >
          CSV
        </button>
        <StatusMessage
          :server="server"
          :status="status"
          :remain="remain"
        />
      </template>
    </HeaderNav>
    <MobileBar>
      <div class="navbar-selectors">
        <ServerSelector
          v-model="server"
          :api-list="apiList"
        />
        <ProjectSelector
          v-model="projectToken"
          :projects="projects"
        />
        <StatusMessage
          :server="server"
          :status="status"
          :remain="remain"
        />
      </div>
    </MobileBar>
    <GridStats
      :stats="stats.data"
      :metadata="stats.metadata"
    />
  </div>
</template>

<script>
import GridStats from '@/components/GridStats.vue'
import HeaderNav from '@/components/HeaderNav.vue'
import ServerSelector from '@/components/ServerSelector.vue'
import StatusMessage from '@/components/StatusMessage.vue'
import ProjectSelector from '@/components/ProjectSelector.vue'
import axios from 'axios'
import apiList from '@/config.json'
import MobileBar from '@/components/MobileBar.vue'
import setParam from './utils/setParam'
import createCSV from './utils/createCVS'

const axiosInstance = axios.create()
const localServer = {
  apiUrl: 'http://localhost:3000/api/v1',
  apiParams: {
    token: null,
    project_id: null
  }
}

if (
  process.env.NODE_ENV === 'development' &&
  !apiList.find(({ apiUrl }) => apiUrl === localServer.apiUrl)
) {
  apiList.push(localServer)
}

export default {
  name: 'App',
  components: {
    GridStats,
    HeaderNav,
    ProjectSelector,
    ServerSelector,
    StatusMessage,
    MobileBar
  },
  data() {
    return {
      apiList: apiList,
      countdownProcess: undefined,
      refreshInSeconds: 10,
      remain: 0,
      server: {},
      projects: {},
      projectToken: undefined,
      stats: {},
      status: {
        state: 'black',
        message: 'Idle'
      },
      requestCount: 0,
      maxRequest: 50
    }
  },

  computed: {
    refreshMessage() {
      return this.remain ? `Refreshing in ${this.remain}` : 'Refreshing...'
    },

    selectedProject() {
      return this.projects[this.projectToken] || 'All projects'
    }
  },

  watch: {
    server: {
      handler({ apiParams, apiUrl }) {
        const host = new URL(apiUrl).host

        axiosInstance.defaults.baseURL = apiUrl
        axiosInstance.defaults.params = apiParams
        document.title = `TaxonWorks Stats - ${host}`
        setParam('server', host)
        this.stats = {}
        this.loadProjects()
      }
    },

    projectToken: {
      handler(token) {
        setParam('project_token', token)
        axiosInstance.defaults.params = Object.assign(
          {},
          this.server.apiParams,
          { project_token: token }
        )
        this.loadStats()
      }
    },

    projects: {
      handler(newVal) {
        if (newVal) {
          this.projectToken = Object.keys(newVal).find(
            (token) => this.projectToken === token
          )
        }
      }
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search)
    const paramUrl = urlParams.get('server')
    const paramToken = urlParams.get('project_token')

    this.server =
      apiList.find(({ apiUrl }) => apiUrl.includes(paramUrl)) || apiList[0]
    this.projectToken = paramToken
  },
  methods: {
    loadStats() {
      clearTimeout(this.countdownProcess)
      this.requestCount++
      this.remain = 0

      if (this.requestCount > this.maxRequest) {
        alert('Are you still here?')
        this.requestCount = 0
      }

      axiosInstance
        .get('/stats')
        .then(
          ({ data }) => {
            this.stats = data
            this.status = {
              state: 'green',
              message: 'Successful'
            }
          },
          ({ response }) => {
            this.status = {
              state: 'red',
              message: response.data.message
            }
          }
        )
        .finally(() => {
          this.countdown(this.refreshInSeconds)
        })
    },

    countdown(seconds) {
      this.remain = seconds
      if (seconds === 0) {
        this.loadStats()
      } else {
        clearTimeout(this.countdownProcess)
        this.countdownProcess = setTimeout(() => {
          this.countdown(this.remain - 1)
        }, 1000)
      }
    },

    loadProjects() {
      axiosInstance.get().then(({ data }) => {
        this.projects = Object.fromEntries(
          data.open_projects.map((project) => [
            project.project_token,
            project.name
          ])
        )
      })
    },

    openLink() {
      window.open(`${this.server.apiUrl}/stats`)
    },

    makeCSVFile() {
      const data = Object.assign({}, ...Object.values(this.stats))
      const headers = ['Metadata', 'Total']
      const sortObject = Object.assign(
        {},
        ...Object.keys(data)
          .sort()
          .map((key) => ({ [key]: data[key] }))
      )
      const blob = new Blob([createCSV(headers, sortObject)])
      const date = new Date().toISOString().replace(/z|t/gi, ' ').trim()
      const filename = `${new URL(this.server.apiUrl).host} - ${
        this.selectedProject
      } - ${date}.csv`
      const a = document.createElement('a')

      a.href = URL.createObjectURL(blob, { type: 'text/csv;charset=utf-8;' })
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
}
</script>
<style lang="scss">
body {
  font-family: 'Hind', sans-serif;
  background-color: #f7f8fc;
  margin: 0px;
}

select {
  border-radius: 4px;
  padding: 4px;
  font-size: 16px;
}

button {
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  background-color: #00845d;
  color: white;
  border: none;
  padding: 6px 8px;
  border-radius: 4px;
}

button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}

a {
  text-decoration: none;
  color: #00845d;
}

input,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.csv-button {
  margin: 0px 4px;
}
</style>
