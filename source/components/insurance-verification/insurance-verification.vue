<template lang="pug">
    transition(name="fade")
        div.insurance-verification
            h2.title.mod--journey Insurance Verification
            form(action="#3", @submit.prevent="").insurance-verification__form
                fieldset.form__fieldset
                    legend.hide Insurance Verification
                    .insurance-verification__line
                        .insurance-verification__item
                            .insurance-verification__note Insurance Name
                            .insurance-verification__input
                                input(type="text", value="John Jacobs", placeholder="Enter  Name").ui-input.ui-input--skin-default

                        .insurance-verification__item
                            .insurance-verification__note Group Number
                            .insurance-verification__input
                                input(type="text", value="#45ABC", placeholder="Enter  Group Number").ui-input.ui-input--skin-default
                        .insurance-verification__item
                            .insurance-verification__note Network Number
                            .insurance-verification__input
                                input(type="text", value="#45ABC", placeholder="Enter  Network Number").ui-input.ui-input--skin-default

                        .insurance-verification__item
                            .insurance-verification__note Identification Number
                            .insurance-verification__input
                                input(type="text", value="#022914089", placeholder="Enter  Identification Number").ui-input.ui-input--skin-default

                        .insurance-verification__item
                            .insurance-verification__note Issue Date
                            .insurance-verification__input
                                input(type="text", value="August 20, 2017", placeholder="Enter  Issue Date").ui-input.ui-input--skin-default
                    .insurance-verification__submit
                        button(type="submit", @click="$root.userIsVerify = true" ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary
                            svg.ico-svg.ico-svg__check(v-show="$root.userIsVerify")
                                use(xlink:href="#check")
                            | Verify



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

    .insurance-verification {
        margin-bottom: em(40);
    }

    .insurance-verification__form {
        @include res(xxl) {
            padding: 0 em(30);
        }
    }

    .insurance-verification__submit {
        display: flex;
        justify-content: flex-end;

        .ui-btn {
            min-width: em(164);
        }
        .ico-svg__check {
            line-height:1px;
            width: em(20);
            height: em(18);
            margin-right: em(20);
            position: relative;
            top: em(1);
            use {
                fill: #fff;
            }
        }

    }

    .insurance-verification__line {
        lost-flex-container: row;
    }

    .insurance-verification__item {
        lost-column: 1/3 3 25px;
        padding: 0 em(10);
        @include res(xxl) {
            lost-column: 1/5 5 25px;
        }
    }

    .insurance-verification__item {
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: em(20);
    }

    .insurance-verification__note {
        color: rgba(#202020, .5);
    }

</style>
