<template>
  <header class="app-header">
    <img
      src="@/assets/taxonworks_logo-full.svg"
      height="48px"
      alt="TaxonWorks">
    <div class="server-selector">
      <a
        :href="`${server.apiUrl}/stats`"
        target="_blank">
        JSON link
      </a>
      <select v-model="server">
        <option
          v-for="item in apiList"
          :key="item.apiUrl"
          :value="item">
          {{ item.apiUrl }}
        </option>
      </select>
      <div
        class="status"
        :style="{ color: stateStatus }">
        Status: ({{ status.message }}). {{ refreshMessage }}
      </div>
    </div>
    <what-this/>
    <ul class="menu">
      <li
        v-for="(link, key) in links"
        :key="key">
        <a :href="link">{{ key }}</a>
      </li>
    </ul>
  </header>
</template>

<script>

import WhatThis from '@/components/WhatThis.vue'

export default {
  components: {
    WhatThis
  },
  props: {
    apiList: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: false
    },
    remain: {
      type: Number,
      required: true
    },
    status: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      links: {
        Home: 'https://taxonworks.org',
        Code: 'https://github.com/SpeciesFileGroup/taxonworks',
        API: 'https://api.taxonworks.org'
      }
    }
  },
  computed: {
    server: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    refreshMessage () {
      return this.remain ? `Refreshing in ${this.remain}` : 'Refreshing...'
    },
    stateStatus () {
      return this.status.state
    }
  }
}
</script>

<style lang="scss">
  .app-header {
    background-color: white;
    box-shadow: rgba(36, 37, 38, 0.08) 4px 4px 15px 0px;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    .server-selector {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .status {
      font-size: 12px;
      margin-left: 4px;
      width: 300px;
    }
  }

  .server-selector a {
    text-decoration: none;
    margin-right: 8px;
    color: #00845D
  }

  .menu {
    margin: 0px;
    padding: 0px;
    list-style: none;

    li {
      display: inline;

      a {
        text-decoration: none;
        color: #00845D;
      }
    }

    li::before {
      content: '|';
      padding: 0px 8px;
    }

    li:first-child::before {
      content: '';
    }
  }

</style>
