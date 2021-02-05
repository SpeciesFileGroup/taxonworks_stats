<template>
  <div>
    <CardStat
      v-for="(number, key) in stats"
      :key="key"
      :number="number"
      :label="key"
      link/>
    <CardStat
      v-for="(number, key) in metadata"
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
    metadata: {
      type: Object,
      default: () => { return {} }
    },
    stats: {
      type: Object,
      default: () => { return {} }
    },
    randomColor: {
      type: Boolean,
      default: false
    }
  }
}
</script>
