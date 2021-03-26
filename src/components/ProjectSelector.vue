<template>
  <select v-model="project">
    <option :value="undefined">
      All projects
    </option>
    <option
      v-for="(item, key) in projects"
      :key="key"
      :value="key">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: undefined
    },

    projects: {
      type: Object,
      required: true
    }
  },

  computed: {
    project: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
