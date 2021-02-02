<template>
  <div
    class="card-stat"
    :style="cssVars"
    :class="{ 'card-stat-pulse': activePulse }">
    <span class="card-stat-label">{{ label }}</span>
    <animate-number
      class="card-stat-animated-count"
      :number="number"
      @animation-start="setActivePulse(true)"
      @animation-end="setActivePulse(false)"/>
  </div>
</template>

<script>

import AnimateNumber from './AnimateNumber'
import randomColor from '@/utils/randomColor'

export default {
  components: {
    AnimateNumber
  },
  props: {
    number: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      activePulse: false,
      bgColor: randomColor()
    }
  },
  computed: {
    cssVars () {
      return {
        '--scaleStart': 1,
        '--scaleEnd': 1.2,
        '--backgroundColor': this.bgColor
      }
    }
  },
  methods: {
    setActivePulse (value) {
      this.activePulse = value
    }
  }
}
</script>
<style scoped>
  .card-stat {
    color: white;
    background-color: var(--backgroundColor);
    border-radius: .9rem;
    box-shadow: rgba(36, 37, 38, 0.08) 4px 4px 15px 0px;
    display: inline-block;
    padding: 1rem;
    margin: 0.5rem;
    width: auto;
    text-align: center;
  }

  .card-stat-label {
    display: block;
    margin-bottom: 8px;
  }

  .card-stat-animated-count {
    font-size: 1.5rem;
  }

  .card-stat-pulse {
    animation-name: pulse;
    animation-duration: .5s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    from {
      transform: scale(var(--scaleStart));
    }
    to {
      transform: scale(var(--scaleEnd));
    }
  }
</style>
