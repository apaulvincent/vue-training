<template>
  <div>
    <h1>Dispatch Events using event wrapper.</h1>
    <coupon @applied="onCouponApplied"></coupon>
    <h3 v-show="isApplied">Coupon Applied</h3>
  </div>
</template>

<script>

import Event from '../utils/customEvent'
import Coupon from './Coupon'

export default {
  components: {
    Coupon
  },
  data() {
    return {
      isApplied: false
    }
  },
  methods: {
    onCouponApplied () {
      this.isApplied = true
    }
  },
  created() {
      Event.listen('applied', () => {
          alert('Applied')
      })
  }
}
</script>

<style scoped lang="scss">
</style>
