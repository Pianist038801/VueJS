<template lang="pug">

    .history
        .history__top-active
            .history__top-active-left
                .history__top-active-title
                    .title Billing History
        .history__top-active
            .patient-billing__top-filter
                svg.ico-svg.ico-svg
                    use(xlink:href="#filter")
                .filterString Filter Results
        .history__top-active
            .patient-billing__top-filter
                multiselect(
                v-model="cre_bill_status",
                :options="['Unpaid', 'Paid']",
                :searchable="false",
                :allowEmpty="false",
                :showLabels="false",
                placeholder="Billing Status"
                ).ui-multiselect.ui-multiselect--border
            .patient-billing__top-filter
                input(placeholder="Batch ID", v-model="cre_batch_id").ui-input
                svg.ico-svg.ico-search
                    use(xlink:href="#search")
            .patient-billing__top-filter
                multiselect(
                v-model="cre_patient_name",
                :options="['John Jacobs', 'Johns Sarah']",
                :searchable="false",
                :allowEmpty="false",
                :showLabels="false",
                placeholder="Patient Name"
                ).ui-multiselect.ui-multiselect--border
            .patient-billing__top-filter
                multiselect(
                v-model="cre_patient_id",
                :options="['28724351', '25316235']",
                :searchable="false",
                :allowEmpty="false",
                :showLabels="false",
                placeholder="Patient ID"
                ).ui-multiselect.ui-multiselect--border
            .patient-billing__top-filter
                multiselect(
                v-model="cre_payer",
                :options="['United', 'Scattered']",
                :searchable="false",
                :allowEmpty="false",
                :showLabels="false",
                placeholder="Payer"
                ).ui-multiselect.ui-multiselect--border
            .patient-billing__top-filter
                multiselect(
                v-model="cre_claim_type",
                :options="['eClaims', 'Paper']",
                :searchable="false",
                :allowEmpty="false",
                :showLabels="false",
                placeholder="Claim Type"
                ).ui-multiselect.ui-multiselect--border
            .patient-billing__top-filter
                input(placeholder="Date", v-model="cre_date").ui-input
                svg.ico-svg.ico-search
                    use(xlink:href="#calendar")
        table.history__table
            tr
                th Billing Status
                th Statement ID
                th Patient Name
                th Patient ID
                th Payer
                th Claim Type
                th Total Amount
                th Total Paid Amount
                th Created Date
                th Action
            tr(v-for="(item, index) in history" v-if="(cre_bill_status=='' || cre_bill_status==item.status) && (cre_batch_id=='' || item.StatementId.toLowerCase().indexOf(cre_batch_id.toLowerCase())>=0) && (cre_patient_name=='' || cre_patient_name==item.PatientName) && (cre_patient_id=='' || item.PatientId.toLowerCase().indexOf(cre_patient_id.toLowerCase())>=0) && (cre_payer=='' || cre_payer==item.Payer) && (cre_claim_type=='' || cre_claim_type==item.ClaimType) && (cre_date=='')" )
                td {{ item.status}}
                td {{item.StatementId}}
                td {{item.PatientName}}
                td {{item.PatientId}}
                td {{item.Payer}}
                td {{item.ClaimType}}
                td {{ item.TotalAmount }}
                td {{ item.TotalPaidAmount }}
                td {{ item.Date }}
                td
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__dot-v
                                use(xlink:href="#dot-v")
                        .sub-popup-menu__list
                            a(href="#3").sub-popup-menu__item Details
                            a(href="#3").sub-popup-menu__item Share
                            a(href="#3").sub-popup-menu__item Transfer
                            a(href="#3").sub-popup-menu__item Archive
                    
        
</template>
<script>
    import Multiselect from 'vue-multiselect';
    export default {
        props: 
			 {
            history: Array,
            },
        components: {
            Multiselect
        },
        data() {
            return {
				cre_bill_status: '',
				cre_batch_id: '',
				cre_patient_name: '',
				cre_patient_id: '',
				cre_payer: '',                        
				cre_claim_type: '',
				cre_date: '',
            }
        },
        methods: {
            open() {
            },
            visible(item){
                console.log('BILLSTATUS', this.cre_bill_status)
                if((cre_bill_status=='' || cre_bill_status==item.status) &&
                    (cre_batch_id=='' || item.StatementId.toLowerCase().indexOf(cre_batch_id.toLowerCase())>=0) &&
                    (cre_patient_name=='' || cre_patient_name==item.PatientName) &&
                    (cre_patient_id=='' || item.PatientId.toLowerCase().indexOf(cre_patient_id.toLowerCase())>=0) &&
                    (cre_payer=='' || cre_payer==item.Payer) &&
                    (cre_claim_type=='' || cre_claim_type==item.ClaimType) &&
                    (cre_date==''))  
                    return true;
                
                return false;
            },
			viewBill(item){

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

    .history {
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
	.history__table-edit {
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
    .history__table {
        border-spacing: 0;
        width: 100%;

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

    .history__top-active {
        display: flex;
        margin-bottom: em(15);
		.filterString {
			color: rgb(197,197,197);
		}
		
    }

    .history__top-active-left {
        display: flex;
        align-items: center;

    }
    .history__top-active-search {
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

    .history__top-active-icons {
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

    .history__top-active-item {
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
