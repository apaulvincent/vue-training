<template>
  <div v-show="isActive" >
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    selected: { default: false }
  },
  data () {
    return {
        isActive: false
    }
  },
  computed: {
    href () {
      return window.location.origin + '/#/tabs/#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  mounted () {
      this.isActive = this.selected
  }
}
</script>

<style scoped lang="scss">
</style>
