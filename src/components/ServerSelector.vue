<template>
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
    }
  },
  methods: {
    openLink () {
      window.open(`${this.server.apiUrl}/stats`)
    }
  }
}
</script>
