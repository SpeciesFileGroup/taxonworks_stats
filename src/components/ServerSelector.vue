<template>
  <select v-model="server">
    <option
      :value="undefined"
      disabled
    >
      Choose a server
    </option>
    <option
      v-for="item in apiList"
      :key="item.apiUrl"
      :value="item"
    >
      {{ item.apiUrl }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Object,
      default: undefined
    },
    apiList: {
      type: Array,
      required: true
    }
  },

  emits: ['update:modelValue'],

  computed: {
    server: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },

  methods: {
    openLink() {
      window.open(`${this.server.apiUrl}/stats`)
    }
  }
}
</script>
