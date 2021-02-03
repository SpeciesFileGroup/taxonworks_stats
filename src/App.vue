<template>
  <div id="app">
    <header-nav
      :api-list="apiList"
      :remain="remain"
      :status="status"
      v-model="server"/>
    <GridStats
      class="grid-stats"
      :stats="stats"/>
  </div>
</template>

<script>

import GridStats from '@/components/GridStats.vue'
import HeaderNav from '@/components/HeaderNav'
import axios from 'axios'
import apiList from '@/config.json'

const axiosInstance = axios.create()

export default {
  name: 'App',
  components: {
    GridStats,
    HeaderNav
  },
  data () {
    return {
      apiList,
      countdownProcess: undefined,
      delaySeconds: 10,
      remain: 0,
      server: apiList[0],
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
        this.loadStats()
      },
      immediate: true
    }
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
        console.log(response.data)
      }).finally(() => {
        this.countdown(this.delaySeconds)
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
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f7f8fc;
    margin: 0px;
  }

  .grid-stats {
    margin: 1rem;
    columns: 10 150px;
    column-gap: 1rem;
  }

</style>
