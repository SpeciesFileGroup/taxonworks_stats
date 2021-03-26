<template>
  <div :style="{ color: status.state }">
    Status: {{ status.message }}. <span v-if="server">{{ refreshMessage }}</span>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Object,
      require: true
    },

    server: {
      type: Object,
      default: undefined
    },

    remain: {
      type: Number,
      required: true
    }
  },

  computed: {
    refreshMessage () {
      return this.remain ? `Refreshing in ${this.remain}` : 'Refreshing...'
    }
  }
}
</script>
