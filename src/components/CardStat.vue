<template>
  <div
    class="card-stat"
    ref="card"
    :style="cssVars"
    :class="{ 'card-stat-pulse': activePulse }">
    <div
      ref="cardData"
      class="card-stat-data">
      <animate-number
        ref="number"
        class="card-stat-animated-count"
        :number="number"
        :style="animateNumberStyle"
        @animation-start="setActivePulse(true)"
        @animation-end="setActivePulse(false)"/>
      <div
        ref="label"
        class="card-stat-label">{{ label }}</div>
    </div>
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
      const elementCard = this.$refs.cardData
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
    background-color: var(--backgroundColor);
    border-radius: .9rem;
    box-shadow: rgba(36, 37, 38, 0.08) 4px 4px 15px 0px;

    color: white;
    margin: 0 1rem 1rem 0;
    display: inline-block;
    width: 100%;
    text-align: center;
  }

  .card-stat-data {
    padding: 1rem
  }

  .card-stat-label {
    display: block;
    margin-top: 8px;
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
