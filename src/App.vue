<template>
  <div id="app">
    <HeaderNav>
      <ServerSelector
        slot="middle"
        v-model="server"
        :api-list="apiList"
        :remain="remain"
        :status="status"
      >
        <template slot="buttons">
          <button
            type="button"
            class="json-button"
            :disabled="!server"
            @click="openLink">
            JSON
          </button>
          <button
            type="button"
            class="csv-button"
            :disabled="!Object.keys(stats).length"
            @click="makeCSVFile">
            CSV
          </button>
        </template>
      </ServerSelector>
    </HeaderNav>
    <MobileBar>
      <ServerSelector
        v-model="server"
        :api-list="apiList"
        :remain="remain"
        :status="status"
      />
    </MobileBar>
    <GridStats
      :stats="stats.data"
      :metadata="stats.metadata"/>
  </div>
</template>

<script>

import GridStats from '@/components/GridStats.vue'
import HeaderNav from '@/components/HeaderNav'
import ServerSelector from '@/components/ServerSelector.vue'
import axios from 'axios'
import apiList from '@/config.json'
import MobileBar from '@/components/MobileBar'
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

if (process.env.NODE_ENV === 'development' && !apiList.find(({ apiUrl }) => apiUrl === localServer.apiUrl)) { apiList.push(localServer) }

export default {
  name: 'App',
  components: {
    GridStats,
    HeaderNav,
    ServerSelector,
    MobileBar
  },
  data () {
    return {
      apiList: apiList,
      countdownProcess: undefined,
      refreshInSeconds: 10,
      remain: 0,
      server: {},
      stats: {},
      status: {
        state: 'black',
        message: 'Idle'
      },
      requestCount: 0,
      maxRequest: 50
    }
  },
  watch: {
    server: {
      handler ({ apiParams, apiUrl }) {
        const host = new URL(apiUrl).host

        axiosInstance.defaults.baseURL = apiUrl
        axiosInstance.defaults.params = apiParams
        document.title = `TaxonWorks Stats - ${host}`
        clearTimeout(this.countdownProcess)
        setParam('server', host)
        this.stats = {}
        this.loadStats()
      }
    }
  },
  created () {
    const urlParams = new URLSearchParams(window.location.search)
    const paramUrl = urlParams.get('server')

    this.server = apiList.find(({ apiUrl }) => apiUrl.includes(paramUrl)) || apiList[0]
  },
  methods: {
    loadStats () {
      this.requestCount++

      if (this.requestCount > this.maxRequest) {
        alert('Are you still here?')
        this.requestCount = 0
      }

      axiosInstance.get('/stats').then(({ data }) => {
        this.stats = data
        this.status = {
          state: 'green',
          message: 'Successful'
        }
      }, ({ response }) => {
        this.status = {
          state: 'red',
          message: response.data.message
        }
      }).finally(() => {
        this.countdown(this.refreshInSeconds)
      })
    },

    countdown (seconds) {
      this.remain = seconds
      if (seconds === 0) {
        this.loadStats()
      } else {
        this.countdownProcess = setTimeout(() => {
          this.countdown(seconds - 1)
        }, 1000)
      }
    },

    openLink () {
      window.open(`${this.server.apiUrl}/stats`)
    },

    makeCSVFile () {
      const { data, metadata } = this.stats
      const headers = ['Metadata', 'Total']
      const sortObject = Object.assign({}, ...Object.keys(data).sort().map(key => ({ [key]: data[key] })), metadata)
      const blob = new Blob([createCSV(headers, sortObject)])
      const date = (new Date()).toISOString().replace(/z|t/gi, ' ').trim()
      const filename = `${new URL(this.server.apiUrl).host} ${date}.csv`
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
    background-color: #00845D;
    color: white;
    border: none;
    padding: 6px 8px;
    border-radius: 4px;
  }

  button:disabled,
  button[disabled]{
    background-color: #cccccc;
    color: #666666;
  }

  a {
    text-decoration: none;
    color: #00845D;
  }

  input,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .json-button {
    margin-left: 4px;
  }

  .csv-button {
    margin: 0px 4px;
  }

</style>
