<template>
  <li>
    <a href="#">{{ name }}</a>
  </li>
</template>

<script>
export default {
  props: {
    name: { required: true }
  },
  data () {
    return {
        isActive: false
    }
  }
}
</script>

<style scoped lang="scss">
</style>
