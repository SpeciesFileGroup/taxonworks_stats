<template>
  <div class="server-selector">
    <select v-model="server">
      <option
        :value="undefined"
        disabled>
        Choose a server
      </option>
      <option
        v-for="item in apiList"
        :key="item.apiUrl"
        :value="item">
        {{ item.apiUrl }}
      </option>
    </select>
    <button
      type="button"
      class="json-button"
      :disabled="!server"
      @click="openLink">
      JSON link
    </button>
    <div
      class="status"
      :style="{ color: stateStatus }">
      Status: ({{ status.message }}). <span v-if="server">{{ refreshMessage }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: undefined
    },
    apiList: {
      type: Array,
      required: true
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
  computed: {
    server: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    isServerSelected () {
      return this.server ? 'a' : 'span'
    },
    refreshMessage () {
      return this.remain ? `Refreshing in ${this.remain}` : 'Refreshing...'
    },
    stateStatus () {
      return this.status.state
    }
  },
  methods: {
    openLink () {
      window.open(`${this.server.apiUrl}/stats`)
    }
  }
}
</script>
<style lang="scss">
  .server-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .json-button {
    margin:0px 8px;
    white-space: nowrap;
  }

  .status {
    font-size: 16px;
  }

</style>
