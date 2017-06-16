<template>
  <div>
    <div class="tabs">
      <ul>
        <tab v-for="(tab, i) in tabs" :name="tab.title" :selected="true" :key="i"></tab>
      </ul>
    </div>

    <div class="tabs-details">
      {{ getContents }}
    </div>

  </div>
</template>

<script>

import Tab from './Tab'

export default {
  components: {Tab},
  data () {
    return {
      tabs: [
        {title: 'Batman and Robin', content: 'The good and the bad'},
        {title: 'Walter and James', content: 'The bad and the not so bad'}
      ]
    }
  },
  computed: {
    getContents () {
      return this.tabs.forEach(t => {
        return t.content
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
