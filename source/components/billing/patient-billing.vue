<template lang="pug"> 
        .patient-billing
            .patient-billing__top 
                .patient-billing__top-full
                    .patient-billing__top-filter
                        svg.ico-svg.ico-svg
                            use(xlink:href="#heart")
                        .patient-billing__top-item-box-note Primary Insurance
                .patient-billing__top-full
                    .patient-billing__top-filter
                        svg.ico-svg.ico-svg
                            use(xlink:href="#hospital")
                        .patient-billing__top-item-box-note Billing Address

                .patient-billing__top-item
                    .patient-billing__top-item-label  Provider:
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note  {{patient.Billing.Provider}}

                .patient-billing__top-item
                    .patient-billing__top-item-label  Plan Name:
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note   {{patient.Billing.Plan}}

                .patient-billing__top-subscriber
                    .patient-billing__top-item-label Subscriber Relationship:
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note  {{patient.Billing.Subscriber}} 
                
                .patient-billing__top-item3
                    .patient-billing__top-item-label  Street:
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note  {{patient.Billing.Street}}

                .patient-billing__top-item
                    .patient-billing__top-item-label  Police Number:
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note  {{patient.Billing.PolicyNum}}

                .patient-billing__top-item2
                    .patient-billing__top-item-label  Group Number:
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note STL  {{patient.Billing.GroupNum}}
                .patient-billing__top-item
                    .patient-billing__top-item-label  City
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note STL  {{patient.Billing.City}}
                .patient-billing__top-item
                    .patient-billing__top-item-label  State
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note STL  {{patient.Billing.State}}
                .patient-billing__top-item
                    .patient-billing__top-item-label  Zip Code
                    .patient-billing__top-item-box
                        .patient-billing__top-item-box-note STL  {{patient.Billing.GroupNum}}


  
</template>
<script>
    import Multiselect from 'vue-multiselect';
    export default {
        props:['patient']
        ,
        components: {
            
        },
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
    .patient-billing__top-filter {
        display: flex;
        justify-content: center;
        align-items: center; 
        .ico-svg {
            margin-right: em(10);
            margin-top: em(10);
            width: em(30px);
            height: em(30px);
            use {
                fill: rgb(194,194,194);
            }
        }
    }
    .patient-billing__top {
        lost-flex-container: row;
        margin-bottom: em(50);
    }
    .patient-billing__top-item {
        lost-column: 1/6 6 ;
        margin-bottom: em(30);
    }
    .patient-billing__top-subscriber {
        lost-column: 1/6 6 ; 
        margin-bottom: em(30);
    }
    .patient-billing__top-item3 {
        lost-column: 3/6 6  ;
        margin-bottom: em(30);
    }
    .patient-billing__top-item2 {
        lost-column: 2/6 6  ;
        margin-bottom: em(30);
    }
    .patient-billing__top-full {
        lost-column: 1/2 2   ; 
        margin-bottom: em(30);
        lost-align: left;
    }
    .patient-billing__top-item-box {
        display: inline-block;
        vertical-align: top;

        min-width: em(130);
    }

    .patient-billing__top-item-label {
        color: rgba(#202020, .5);
        font-size: em(13px);
    }
    .patient-billing__top-item-box-note {
        padding-top: em(10);
        font-size: em(16px);
    }
 

    .incident__title {
        display: flex;

        align-items: flex-end;
        margin-bottom: em(60);
    }

    .incident__title-num {
        color: #b2b2b2;
        font-size: em(20px);
        margin-left: em(40,20);
        text-transform: uppercase;
    }
</style>
