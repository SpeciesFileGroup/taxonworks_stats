<template>
  <div>{{ displayNumber }}</div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 100
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      displayNumber: 0,
      interval: false,
      incrementing: false,
      start: 0
    }
  },
  watch: {
    number: {
      handler (newVal, oldVal) {
        if (newVal === oldVal) return
        this.animateNumber()
      },
      immediate: true
    }
  },
  methods: {
    animateNumber () {
      let startTimestamp = null
      this.$emit('animation-start')
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / this.duration, 1)

        this.displayNumber = Math.floor(progress * (this.number - this.start) + this.start)
        if (progress < 1) {
          window.requestAnimationFrame(step)
        } else {
          this.start = this.displayNumber
          this.$emit('animation-end')
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>
