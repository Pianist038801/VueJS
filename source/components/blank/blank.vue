<template lang="pug">
    div(v-show="visible")
        slot
</template>
<script>
    export default {
        props: {
            video: {
                type: String,
                required: false,
                default: ''
            },
        },
        components: {},
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            open() {
            }
        },
        mounted() {
        },
        beforeDestroy() {
        },
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

</style>
