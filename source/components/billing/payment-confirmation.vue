<template lang="pug">

    .payment-confirmation
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Payment Information
  
        .payment-confirmation__top-active 
            form.payment-card 
                .bank-card__side.bank-card__side_front
                    .bank-card__inner
                    label.bank-card__label.bank-card__label_holder
                        span.bank-card__hint Holder of card
                        input.bank-card__field(type="text" placeholder="Holder of card" pattern="[A-Za-z, ]{2,}"  v-model="username" name="holder-card" required="")
                    .bank-card__inner
                    label.bank-card__label.bank-card__label_number
                        span.bank-card__hint Number of card
                        input.bank-card__field(type="text" placeholder="Number of card" pattern="[0-9]{16}" v-model="cardNumber" name="number-card" required="")
                    .bank-card__inner
                    span.bank-card__caption valid thru
                    .bank-card__inner.bank-card__footer
                    label.bank-card__label.bank-card__month
                        span.bank-card__hint Month
                        multiselect(
                        v-model="month",
                        :options="['1', '2','3', '4','5', '6','7', '8','9', '10','11', '12',]",
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder="MM"
                        ).ui-multiselect.ui-multiselect--border 
                    span.bank-card__separator /
                    label.bank-card__label.bank-card__year
                        span.bank-card__hint Year
                        multiselect(
                        v-model="year",
                        :options="['2016', '2017','2018', '2019']",
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder="YY"
                        ).ui-multiselect.ui-multiselect--border
                    label.bank-card__label.bank-card__cvc
                        span.bank-card__hint CVC
                        input.bank-card__field(type="text" v-model="cvv" placeholder="CVC" maxlength="3" pattern="[0-9]{3}" name="cvc-card" required="")
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Total Amount Due: {{item.total.amount}}
        .payment-confirmation__top-active
            .payment-confirmation__top-active-left
                .payment-confirmation__top-active-title
                    .span Payment Amount:
        a(href="#3", @click="confirmPayment").ui-btn.ui-btn--skin-default.ui-btn--theme-primary {{"CONFIRM PAYMENT"}}
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
                this.$emit('show-payment-result',{statementId: '209920923', payDate:'01/05/2018', username: this.username, cardType: this.cardType, cardNumber: this.cardNumber, month: this.month, year: this.year,cvv: this.cvv});
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
			color: rgb(139,155,171);
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
            color: rgb(139,155,171);
            font-size: em(20);
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
 
body {
	 
	font-size: 1.6rem;
	margin: 0;
}
.demo {
	min-height: 470px;
	box-sizing: border-box;
	position: relative;
	padding-left: 1rem;
	padding-right: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.footer {
	padding: 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
a {
	color: #000;
	&:focus {
		outline: 2px solid #fdde60;
	}
	&:hover {
		text-decoration: none;
	}
}
.melnik909 {
	margin-left: 2rem;
}
.payment-card {
	width: 60rem;
}
.payment-card__footer {
	text-align: center;
	margin-top: 2rem;
}
.bank-card {
	position: relative;
}
.bank-card__inner {
	margin-bottom: 4%;
	&:last-child {
		margin-bottom: 0;
	}
}
.bank-card__label {
	display: inline-block;
	vertical-align: middle;
}
.bank-card__label_holder {
	width: 100%;
}
.bank-card__label_number {
	width: 100%;
}
.bank-card__hint {
	position: absolute;
	left: -9999px;
}
.bank-card__caption {
	text-transform: uppercase;
	font-size: 1.1rem;
	margin-left: 1%;
}
.bank-card__field {
	box-sizing: border-box;
	border: 3px solid #d0d0ce;
	width: 100%;
	padding: 1rem;
	font-family: inherit;
	font-size: 100%;
	&:focus {
		outline: none;
		border-color: #fdde60;
	}
}
.bank-card__separator {
	font-size: 3.2rem;
	color: #c4c4c3;
	margin-left: 3%;
	margin-right: 3%;
	display: inline-block;
	vertical-align: middle;
}
.payment-card__button {
	background-color: #ada093;
	transition: background-color .4s ease-out;
	border-radius: 5px;
	border: 3px solid transparent;
	cursor: pointer;
	padding: 1rem 6.5rem;
	font-size: 100%;
	font-family: inherit;
	color: #fff;
	&:focus {
		outline: none;
		border-color: #fdde60;
		background-color: #8e8b85;
	}
	&:hover {
		background-color: #8e8b85;
	}
}
@media screen and (min-width: 201px) {
	.bank-card {
		height: 30rem;
	}
	.bank-card__side {
		border-radius: 10px;
		border: 1px solid transparent;
		position: relative;
		width: 65%;
	}
	.bank-card__side_front {
		background-color: #f0f0ee;
		padding: 5%;
		box-shadow: 0 0 10px #f4f4f2;
		border-color: #a29e97;
		top: 0;
		left: 0;
		z-index: 3;
	}
	.bank-card__side_back {
		background-color: #e0ddd7;
		padding: 24.5% 5% 11%;
		box-shadow: 0 0 2rem #f3f3f3;
		text-align: right;
		border-color: #dad9d6;
		top: 12%;
		right: 0;
		&:before {
			content: "";
			width: 100%;
			height: 25%;
			background-color: #8e8b85;
			position: absolute;
			top: 14%;
			right: 0;
		}
	}
	.bank-card__month {
		width: 25%;
	}
	.bank-card__year {
		width: 25%;
	}
	.bank-card__cvc {
        margin-left: 40px;
		width: 25%;
	}
}
@media screen and (max-width: 480px) {
	.bank-card__side {
		border: 1px solid #a29e97;
		background-color: #f0f0ee;
		padding-left: 5%;
		padding-right: 5%;
	}
	.bank-card__side_front {
		border-radius: 10px 10px 0 0;
		border-bottom: none;
		padding-top: 5%;
	}
	.bank-card__side_back {
		border-radius: 0 0 10px 10px;
		border-top: none;
		padding-bottom: 5%;
	}
	.bank-card__month {
		width: 48%;
	}
	.bank-card__year {
		width: 48%;
	}
	.bank-card__cvc {
		width: 100%;
		margin-top: 4%;
	}
	.bank-card__separator {
		display: none;
	}
	.bank-card__footer {
		display: flex;
		justify-content: space-between;
	}
}




</style>
