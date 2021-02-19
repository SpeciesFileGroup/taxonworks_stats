<template>
  <div id="app">
    <HeaderNav>
      <ServerSelector
        slot="middle"
        v-model="server"
        :api-list="apiList"
        :remain="remain"
        :status="status"
      />
    </HeaderNav>
    <GridStats
      :stats="stats.data"
      :metadata="stats.metadata"/>
    <FooterComponent>
      <ServerSelector
        v-model="server"
        :api-list="apiList"
        :remain="remain"
        :status="status"
      />
    </FooterComponent>
  </div>
</template>

<script>

import GridStats from '@/components/GridStats.vue'
import HeaderNav from '@/components/HeaderNav'
import ServerSelector from '@/components/ServerSelector.vue'
import axios from 'axios'
import apiList from '@/config.json'
import FooterComponent from '@/components/Footer'
import setParam from './utils/setParam'

const axiosInstance = axios.create()
const localServer = {
  apiUrl: 'http://localhost:3000/api/v1',
  apiParams: {
    token: null,
    project_id: null
  }
}

if (process.env.NODE_ENV === 'development') { apiList.push(localServer) }

export default {
  name: 'App',
  components: {
    GridStats,
    HeaderNav,
    ServerSelector,
    FooterComponent
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
      }
    }
  },
  watch: {
    server: {
      handler ({ apiParams, apiUrl }) {
        axiosInstance.defaults.baseURL = apiUrl
        axiosInstance.defaults.params = apiParams
        clearTimeout(this.countdownProcess)
        setParam('server', apiList.findIndex(server => server.apiUrl === apiUrl))
        this.loadStats()
      }
    }
  },
  created () {
    const urlParams = new URLSearchParams(window.location.search)
    const serverIndex = Number(urlParams.get('server'))

    this.server = apiList[serverIndex] || apiList[0]
  },
  methods: {
    loadStats () {
      axiosInstance.get('/stats').then(response => {
        this.stats = response.data
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

</style>
