<template>
  <div>
        <modal>
            <template slot="header">Girbaud</template>
            main modal content    
            <template slot="footer">
                <a class="button is-success">Save changes</a>
                <a class="button">Cancel</a>
            </template>
        </modal>

  </div>
</template>

<script>
import Modal from './Modal'
export default {
  components: {
    Modal
    },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
</style>
