<template lang="pug">

    .statement
        .statement__top-active
            .statement__top-active-left
                .statement__top-active-title
                    .span Statement: {{item.StatementId}}
        .statement__top-active
            .statement__top-active-left
                .statement__top-active-title
                    .title Payment Due Date: {{item.Date}}

        table.statement__table
            tr
                th Date
                th Description of Service
                th Amount
                th Insurance
                th Current Balance
                th Line Item Balance
            tr(v-for="(review, index) in item.reviews")
                td {{ review.date}}
                td {{review.description}}
                td {{review.amount}}
                td {{review.insurance}}
                td {{review.currentBalance}}
                td {{review.lineItem}}
            tr
                td  
                td ENCOUNTER TOTAL
                td {{item.total.amount}}
                td {{item.total.insurance}}
                td {{item.total.currentBalance}}
                td {{item.total.lineItem}}
        .statement__top-active
            .statement__top-active-left
                .statement__top-active-title
                    .span   Notes
        textarea.ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default 
        modal(ref="modalimage")
            .modal__content
                img(src="http://uhealthsystem.com/images/content/UMH-statement.jpg")
                .modal-appointment__row
                    a(href="#3", @click="$refs.modalimage.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Cancel
</template>
<script>
    import modal from "../modal-component/modal.vue";
    export default {
        props: 
			 ['item', 'showimagemodal'],
        components: {
             modal
        }, 
        watch:{
            showimagemodal: function() {
                this.$refs.modalimage.open()
            }
        } 
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

    .statement {
        margin-bottom: em(70);
    }
	.ui-input {
		font-size: em(15);
		width: em(100);
	}
	.patient-billing__top-filter{ 
	.ui-multiselect {
		font-size: em(10);
		margin-right: em(10);
		margin-left: em(10);
	}
	}
	.statement__table-edit {
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
    .statement__table {
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

    .statement__top-active {
        display: flex;
        margin-bottom: em(15);
		.filterString {
			color: rgb(197,197,197);
		}
		
    }
    .statement__middle-active {
        display: flex;
        margin-bottom: em(13);
		.filterString {
			color: rgb(0,0,0);
		}
		
    }
    .statement__top-active-left {
        display: flex;
        align-items: center;
        .statement__top-active-title{  
        .span{
            font-size: em(20);
        }
        }

    }
    .statement__top-active-search {
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

    .statement__top-active-icons {
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

    .statement__top-active-item {
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
