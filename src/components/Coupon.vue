<template>
  <div>
    <input type="text" @blur="onCouponApplied"/>
  </div>
</template>

<script>

import Event from '../utils/customEvent'

export default {
    methods: {
        onCouponApplied () {
            
            this.$emit('applied')

            // Custom event handler
            Event.fire('applied')
        }
    }
}
</script>

<style scoped lang="scss">
</style>
