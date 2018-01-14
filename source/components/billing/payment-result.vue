<template lang="pug"> 
        .payment-result
            .payment-result__top  
                .payment-result__top-item
                    .payment-result__top-item-label  Amount:
                .payment-result__top-item2
                    .payment-result__top-item-label2  $325
            .payment-result__top 
                .payment-result__top-item
                    .payment-result__top-item-label  Statement Number:
                .payment-result__top-item2
                    .payment-result__top-item-label2  {{item.cardType}}
            .payment-result__top 
                .payment-result__top-item
                    .payment-result__top-item-label  Payment Date:
                .payment-result__top-item2
                    .payment-result__top-item-label2  {{item.cardType}}
            .payment-result__top 
                .payment-result__top-item
                    .payment-result__top-item-label  Billed to:
                .payment-result__top-item2
                    .payment-result__top-item-label2  {{item.username}}
            .payment-result__top 
                .payment-result__top-item
                    .payment-result__top-item-label  Payed via:
                .payment-result__top-item2
                    .payment-result__top-item-label2  {{item.cardType}} 
</template>
<script>
    import Multiselect from 'vue-multiselect';
    export default {
        props:['item']
        ,
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
    .payment-result__top {
        lost-flex-container: row;
        margin-bottom: em(30);
    }
    .payment-result__top-item {
        lost-column: 1/4 ;
        font-size: em(30); 
    }
    .payment-result__top-item2 {
        lost-column: 3/4   ;
        font-size: em(30);  
    }
    .payment-result__top-item-box {
        display: inline-block;
        vertical-align: top;

        min-width: em(130);
    }

    .payment-result__top-item-label {
        color: rgba(#202020, .5);
        font-size: em(13px);
    }
    .payment-result__top-item-label2 {
        color: black;
        font-size: em(13px);
    }
    .payment-result__top-item-box-note {
        padding-top: em(10);
        font-size: em(16px);
    }
</style>
