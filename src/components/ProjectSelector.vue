<template>
  <select v-model="project">
    <option :value="undefined">All projects</option>
    <option
      v-for="(item, key) in projects"
      :key="key"
      :value="key"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: undefined
    },

    projects: {
      type: Object,
      required: true
    }
  },

  emits: ['update:modelValue'],

  computed: {
    project: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
