<template>
  <div class="menu-bar">
      <router-link to="/" exact>Todos</router-link>
      <router-link to="tabs">Tabs</router-link>
      <router-link to="component-communication">Component Communication</router-link>
      <router-link to="siblings-communication">Siblings Communication</router-link>
      <router-link to="named-slots">Named Slots</router-link>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      title: 'Menu'
    }
  }
}
</script>

<style scoped lang="scss">
.menu-bar {
 margin: 10px 0 40px;

  a {
    display: inline-block;
    margin: 0 5px;
  } 
}
</style>
