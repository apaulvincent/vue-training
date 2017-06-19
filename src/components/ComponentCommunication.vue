<template>
  <div>
    <coupon v-on:applied="onCouponApplied"></coupon>
    <h3 v-if="applied">Coupon Applied</h3>

  </div>
</template>

<script>

import Coupon from './Coupon'
export default {
  components: {
    Coupon
  },
  data() {
    return {
      applied: false
    }
  },
  methods: {
    onCouponApplied () {
      this.applied = true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
