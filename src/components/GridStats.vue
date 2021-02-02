<template>
  <div>
    <CardStat
      v-for="(number, key) in stats"
      :key="key"
      :number="number"
      :label="key"/>
  </div>
</template>

<script>

import CardStat from './CardStat'

export default {
  name: 'GridStats',
  components: {
    CardStat
  },
  props: {
    stats: {
      type: Object,
      required: true
    },
    randomColor: {
      type: Boolean,
      default: false
    }
  }
}
</script>
