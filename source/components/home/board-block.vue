<template lang="pug">
    div(v-bind:style="{borderColor: col}").board-block
        span(v-bind:style="{color: col}").board-block__count {{count}}
        br()
        span().board-block__title {{text}}
</template>
<script>

    export default {
        props: ['count', 'text', 'col'],
        components: {
        },
        data() {
            return {
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

    .board-block {
        margin-bottom: em(40);
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        min-width: em(150px);
        min-height: em(100px);
        padding-top: em(10px);

    }

    .board-block__title {
        font-size: em(15);
    }
    .board-block__count {
        font-size: em(40);
        margin-bottom: em(20);
    }
</style>
