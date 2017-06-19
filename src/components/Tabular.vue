<template>
  <div>
    
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
          <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot/>
    </div>

  </div>
</template>

<script>

import TabItem from './TabItem'

export default {
  data () {
    return {
      tabs: []
    }
  },
  components: {TabItem},
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name)
      })
    }
  },
  mounted () {
    this.tabs = this.$children
  }
}
</script>

<style scoped lang="scss">
</style>
