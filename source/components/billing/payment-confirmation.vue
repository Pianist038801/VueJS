<template lang="pug">

    .payment-confirmation
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Payment Information
        .payment-confirmation__top-item
            .payment-confirmation__top-item-label  Card Holder Name
            .payment-confirmation__top-item-box
                input(placeholder="", v-model="username").ui-input
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Card Type
                        multiselect(
                        v-model="cardType",
                        :options="['Visa', 'Mastercard','Discover', 'American Exp']",
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder="Select"
                        ).ui-multiselect.ui-multiselect--border
        .payment-confirmation__top-item
            .payment-confirmation__top-item-label  Card Number
            .payment-confirmation__top-item-box
                input(placeholder="", v-model="cardNumber").ui-input
        .payment-confirmation__top-item
            .payment-confirmation__top-item-label  Expiration Date
            .payment-confirmation__top-item-box
                multiselect(
                        v-model="month",
                        :options="['1', '2','3', '4','5', '6','7', '8','9', '10','11', '12',]",
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder="Month"
                        ).ui-multiselect.ui-multiselect--border
                multiselect(
                        v-model="year",
                        :options="['2016', '2017','2018', '2019']",
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder="Year"
                        ).ui-multiselect.ui-multiselect--border
        .payment-confirmation__top-item
            .payment-confirmation__top-item-label  CVV
            .payment-confirmation__top-item-box
                input(placeholder="", v-model="cvv").ui-input
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Total Amount Due: {{item.total.amount}}
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Payment Amount: 
 
        a(href="#3", @click="confirmPayment").ui-btn.ui-btn--skin-default.ui-btn--theme-primary CONFIRM PAYMENT 
</template>
<script>
    import Multiselect from 'vue-multiselect';
    export default {
        props: 
			 ['item'],
        components: {
            Multiselect
        },
        data() {
            return {
                username:  '',
                cardType: '',
                cardNumber: '',
                month: '',
                year: '',
                cvv:'',
            }
        },
        methods: {
            confirmPayment(){
                this.$emit('show-payment-result',{username: this.username, cardType: this.cardType, cardNumber: this.cardNumber, month: this.month, year: this.year,cvv: this.cvv});
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
    .ds{
        lost-column: 1/6 6 ;
    }
    .payment-confirmation {
        margin-bottom: em(70);
    }
	.ui-input {
		 border-width: 'em(1),em(0),em(0),em(0)';
         margin-left: 0;
         border-width: 0,0,0,1;
         
	}
    .payment-confirmation__top-item {
        lost-column: 1/2 0 ;
        margin-bottom: em(20);
    }
    .payment-confirmation__top-item-row {
        lost-column: 1/2 2 ;
        margin-bottom: em(20);
    }
    .payment-confirmation__top-item-box {
        display: inline-block;
        vertical-align: top;
        .ui-input{ 
            font-size: em(25);
            width: em(200);
        }
        min-width: em(130);
    }

    .payment-confirmation__top-item-label {
        color: rgba(#202020, .5);
        font-size: em(23px);
    }
	.payment-confirmation__top-active-title{ 
        .ui-multiselect {
            font-size: em(15);
            margin-right: em(10); 
            margin-left: em(10);
        }
	}
	.payment-confirmation__table-edit {
    	use {
            fill: #b2b2b2;
        }
        &:hover {
            use {
                fill: darken(#b2b2b2, 20%);
            }
        }
        .ico-svg__pen {
            width: em(19px);
            height: em(19px);
        }

    }
    .payment-confirmation__table {
        border-spacing: 0;
        width: 100%;
        margin-bottom: em(30);
        font-size: em(12);

        @include res(xxl) {
            font-size: em(14);
        }
        @include res(hd) {
            font-size: em(16);
        }

        th {
            text-align: left;
            color: #484848;
            font-size: em(14px);
            font-weight: 400;
            background-color: #f9f9f9;
            padding: em(16 0);
        }
        td {
            padding: em(16 5); 
        }
        @extend %breakwords;

        .ui-checkbox {
            padding-left: em(18);
        }
    }

    .payment-confirmation__top-active {
        display: flex;
        margin-bottom: em(15);
		.filterString {
			color: rgb(197,197,197);
		}
		
    }
    .payment-confirmation__middle-active {
        display: flex;
        margin-bottom: em(13);
		.filterString {
			color: rgb(0,0,0);
		}
		
    }
    .payment-confirmation__top-active-left {
        display: flex;
        align-items: center;
        .payment-confirmation__top-active-title{  
        .span{
            color: #c3c3c3;
            font-size: em(25);
        }
        }

    }
    .payment-confirmation__top-active-search {
        display: flex;
        color: #c3c3c3;
        font-size: em(18px);
        font-weight: 700;
        align-items: center;
        margin-left: em(54,18);

        .ico-svg__search {
            margin-right: em(20, 18);
            width: em(18px, 18);
            height: em(18px, 18);
            use {
                fill: #b2b2b2;
            }
        }
    }
	.patient-billing__top-filter{ 
	.ico-search {
			margin-left: em(1);
			margin-top: em(0);
			width: em(15);
			height: em(15);
		}
	}

    .payment-confirmation__top-active-icons {
        padding-right: em(20);
        display: flex;
        use {
            @extend %tr-all;
            fill: #b2b2b2
        }
        
        .ico-svg__tune {
            width: em(18px);
            height: em(18px);
        }
        .ico-svg__update {
            width: em(18px);
            height: em(18px);
        }
        .ico-svg__cached {
            width: em(22px);
            height: em(16px);
        }
        .ico-svg__delete {
            width: em(14px);
            height: em(18px);
        }
        .ico-svg__arrow-b {
            width: em(10px);
            height: em(13px);
        }
        .ico-svg__arrow-t {
            width: em(10px);
            height: em(13px);
        }

    }

    .payment-confirmation__top-active-item {
        position: relative;
        margin-left: em(40);
        @include link-out(.5);
        &:hover {
            use {
                fill: darken(#b2b2b2, 20%);
            }
        }

    }




</style>
