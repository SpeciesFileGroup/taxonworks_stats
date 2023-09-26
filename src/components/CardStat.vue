<template>
  <component
    :is="htmlTag"
    class="card-stat"
    ref="card"
    target="_blank"
    :href="linkString"
    :style="cssVars"
    :class="{ 'card-stat-pulse': activePulse }"
  >
    <div
      ref="cardData"
      class="card-stat-data"
    >
      <animate-number
        ref="number"
        class="card-stat-animated-count"
        :number="number"
        :style="animateNumberStyle"
        @animation-start="setActivePulse(true)"
        @animation-end="setActivePulse(false)"
      />
      <div
        ref="label"
        class="card-stat-label"
      >
        {{ label }}
      </div>
    </div>
  </component>
</template>

<script>
import AnimateNumber from './AnimateNumber.vue'
import randomColor from '@/utils/randomColor'
import getFontSize from '@/utils/getFontSize'
import { toPascalCase } from '@/utils/strings'

const digitSizes = [1, 0.35, 0.5]

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
    },
    link: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activePulse: false,
      bgColor: randomColor(),
      animateNumberStyle: {}
    }
  },
  watch: {
    number: {
      handler() {
        this.resizeFont()
      }
    }
  },
  computed: {
    cssVars() {
      return {
        '--scaleStart': 1,
        '--scaleEnd': 1.2,
        '--backgroundColor': this.bgColor
      }
    },
    linkString() {
      return `https://rdoc.taxonworks.org/${toPascalCase(this.label).slice(
        0,
        -1
      )}.html`
    },
    htmlTag() {
      return this.link ? 'a' : 'div'
    }
  },
  mounted() {
    this.resizeFont()
    window.addEventListener('resize', this.resizeFont)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFont)
  },
  methods: {
    setActivePulse(value) {
      this.activePulse = value
    },
    resizeFont() {
      const elementCard = this.$refs.cardData
      const cardWidth = parseFloat(
        getComputedStyle(elementCard, null).width.replace('px', '')
      )
      const numberLength = this.number.toString().length
      const fontSize = getFontSize(
        this.number,
        cardWidth,
        digitSizes[numberLength]
      )

      this.animateNumberStyle = {
        fontSize: `${fontSize}px`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card-stat {
  background-color: var(--backgroundColor);
  border-radius: 0.9rem;
  box-shadow: 4px 4px 15px 0px rgba(36, 37, 38, 0.08);

  color: white;
  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease;
}

a.card-stat:hover {
  transition: all 0.5s ease;
  box-shadow: 0px 0px 15px 0px rgba(61, 142, 223, 1);
}

.card-stat-data {
  padding: 1rem;
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
  animation-duration: 0.5s;
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
