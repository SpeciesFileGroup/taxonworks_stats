<template>
  <header class="app-header">
    <img
      src="@/assets/taxonworks_logo-full.svg"
      height="28px"
      alt="TaxonWorks">
    <div class="server-selector">
      <a
        :href="`${server.apiUrl}/stats`"
        target="_blank">
        Raw link
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
export default {
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
        Code: 'https://github.com/SpeciesFileGroup'
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
    height: 40px;
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
    font-size: 12px;
    margin-right: 8px
  }

  .menu {
    margin: 0px;
    padding: 0px;
    list-style: none;

    li {
      display: inline;

      a {
        text-decoration: none;
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
