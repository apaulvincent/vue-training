<template>
    <div :class="isOpen ? 'modal is-active' : 'modal'">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title"><slot name="header" /></p>
        <button class="delete" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
            <slot></slot>
        </section>
        <footer class="modal-card-foot">
        <slot name="footer"></slot>
        </footer>
    </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            isOpen: true
        }
    },
    methods: {
        closeModal(){
            this.isOpen = false
        }
    }
}
</script>

<style scoped lang="scss">
</style>
