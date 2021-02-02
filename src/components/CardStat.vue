<template>
  <div
    class="card-stat"
    ref="card"
    :style="cssVars"
    :class="{ 'card-stat-pulse': activePulse }">
    <animate-number
      ref="number"
      class="card-stat-animated-count"
      :style="animateNumberStyle"
      :number="number"
      @animation-start="setActivePulse(true)"
      @animation-end="setActivePulse(false)"/>
    <div
      ref="label"
      class="card-stat-label">{{ label }}</div>
  </div>
</template>

<script>

import AnimateNumber from './AnimateNumber'
import randomColor from '@/utils/randomColor'
import getFontSize from '@/utils/getFontSize'

export default {
  name: 'CardStat',
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
      bgColor: randomColor(),
      animateNumberStyle: {}
    }
  },
  watch: {
    number: {
      handler () {
        this.resizeFont()
      }
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
  mounted () {
    this.resizeFont()
  },
  methods: {
    setActivePulse (value) {
      this.activePulse = value
    },
    resizeFont () {
      const elementCard = this.$refs.card
      const cardWidth = parseFloat(getComputedStyle(elementCard, null).width.replace('px', ''))
      const fontSize = getFontSize(this.number, cardWidth)

      this.animateNumberStyle = {
        fontSize: `${fontSize}px`
      }
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
    white-space: pre-line;
  }

  .card-stat-label {
    display: block;
    margin-top: 8px;
  }

  .card-stat-animated-count {
    font-size: 1.5rem;
    width: 100%;
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
