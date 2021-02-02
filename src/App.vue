<template>
  <div id="app">
    <GridStats :stats="stats"/>
  </div>
</template>

<script>

import GridStats from '@/components/GridStats.vue'
import axios from 'axios'
import API_CONFIG from '@/config.json'

const axiosInstance = axios.create({
  baseURL: API_CONFIG.apiUrl,
  params: API_CONFIG.apiParams
})

export default {
  name: 'App',
  components: {
    GridStats
  },
  data () {
    return {
      stats: {},
      delay: 10000
    }
  },
  created () {
    this.loadStats()
    setInterval(() => {
      this.loadStats()
    }, this.delay)
  },
  methods: {
    loadStats () {
      axiosInstance.get('/stats').then(response => {
        this.stats = response.data
      }, response => {
        alert(response.data)
      })
    }
  }
}
</script>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #f7f8fc;
  }
</style>
