<template>
  <div id="app">
    <MenuBar/>
    <router-view v-bind:todos="todos"></router-view>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar'

export default {
  name: 'app',
  components: {
    MenuBar
  },
  data () {
    return {
      todos: [
        { text: 'Kill Bill', done: false },
        { text: 'Watch to Heisenberg', done: true },
        { text: 'Sell Meth', done: false }
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
