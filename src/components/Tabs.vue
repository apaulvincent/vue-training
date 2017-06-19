<template>
  <div>
      <tabular>

        <tab-item name="About Us" :selected="true">
          <h2>Lorem ip sum doler site amate konsex tituer</h2>
        </tab-item>

        <tab-item name="About Me">
          <h2>Lorem ip sum doler site amate konsex me</h2>
        </tab-item>
        
        <tab-item name="About You">
          <h2>Lorem ip sum doler site amate konsex you</h2>
        </tab-item>

      </tabular>
  </div>
</template>

<script>

import Tabular from './Tabular'
import TabItem from './TabItem'

export default {
  components: {Tabular, TabItem},
}
</script>

<style scoped lang="scss">
</style>
