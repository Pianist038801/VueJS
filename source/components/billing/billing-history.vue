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
                    .sub-popup-menu-special(@mouseover="overMenu(index)", @mouseout="outMenu()")
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__dot-v
                                use(xlink:href="#dot-v")
                        .sub-popup-menu__list-special(v-if="showMenu==index")
                            a(href="#3", @click.prevent="viewBill(index)").sub-popup-menu__item View Bill
                            a(href="#3", @click.prevent="payBill(index)").sub-popup-menu__item Pay Bill
                            .sub-popup-menu
                                .sub-popup-menu__action
                                    a(href="#3",@mouseover.prevent="overInvision()", @mouseout.prevent="outInvision()").sub-popup-menu__item View in Invision
                                .sub-popup-menu__list 
                                    a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InPatient/patient_scheduling/search.html')").sub-popup-menu__item Patient Search
                                    a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InPatient/patient_scheduling/patient_demog.html')").sub-popup-menu__item Patient Information
                                    a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InPatient/patient_scheduling/make_appt.html')").sub-popup-menu__item Appointments Create
                            a(href="#3", @click.prevent="showReminder(index)").sub-popup-menu__item Send Reminder
                            a(href="#3").sub-popup-menu__item Print
                            a(href="#3", @click.prevent="openNewWindow('http://uhealthsystem.com/images/content/UMH-statement.jpg')").sub-popup-menu__item Download as PDF
        modal(ref="modalbook")
            .modal__content

                .modal__content-row
                    .modal__content-col

                        .modal-appointment__title
                            .title.mod--modal-appointment Payment Reminder

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__calendar
                                    use(xlink:href="#calendar")
                                | {{ new Date() |  moment("MMM DD, YYYY") }} 

                .modal-appointment__templates-messages
                    .modal-appointment__templates-checkbox
                        .ui-checkbox
                            input#checkbox-sms(name="checkbox-sms" type="checkbox" v-model="showSmsTemplate").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-sms') Send Text Reminder
                    transition(name="fade")
                        textarea(v-if="showSmsTemplate").ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default.mod--sms
                            Dear [Patient Name], we are sending this message to remind of a payment.  Your payemnt is due in two weeks from now.. Regards. [DRNAME]

                .modal-appointment__templates-messages 
                    .modal-appointment__templates-checkbox
                        .ui-checkbox
                            input#checkbox-email(name="checkbox-email" type="checkbox" v-model="showEmailTemplate").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-email') Send Email Reminder
                    transition(name="fade")
                        textarea(v-if="showEmailTemplate").ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default
                            | Email Confirmation Template
 
                .modal-appointment__remind
                    .ui-checkbox
                        input#checkbox-smsremind(name="checkbox-smsremind" type="checkbox" v-model="showSmsRemind").ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-smsremind') Send SMS reminder
                    transition(name="fade")
                        .modal-appointment__remind-days(v-if="showSmsRemind")
                            input(type="text", value="2").ui-input.ui-input--skin-default.ui-input--theme-default
                            | days before bill is due.

                .modal-appointment__row
                    a(href="#3", @click="$refs.modalbook.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border CANCEL
                    a(href="#3", @click="sendReminder").ui-btn.ui-btn--skin-default.ui-btn--theme-primary SEND 
</template>
<script>
    import Multiselect from 'vue-multiselect';
    import modal from "../modal-component/modal.vue";
    export default {
        props: 
			 {
            history: Array,
            },
        components: {
            Multiselect,
            modal
        },
        data() {
            return {
                activeBookItem: 0,
				cre_bill_status: '',
				cre_batch_id: '',
				cre_patient_name: '',
				cre_patient_id: '',
				cre_payer: '',                        
				cre_claim_type: '',
				cre_date: '',
                reminderDate: '2000/10/10',
                showEmailTemplate: false,
                showSmsRemind: false,
                showSmsTemplate: false,
                showInvision: false,
                showMenu: -1
            }
        },
        methods: {
            openNewWindow(url) {
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                window.open(url, "CNN_WindowName", strWindowFeatures);
            },
            overInvision(){
                this.showInvision = true;
                console.log('Toggle');
            },
            outInvision(){
                this.showInvision = false;
                console.log('Out');
            },
            overMenu(index){
                this.showMenu=index;
            },
            outMenu(){
                if(this.showInvision == false)
                    this.showMenu=-1;
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
            showReminder(index) {
                this.activeBookItem = index;
                this.$refs.modalbook.open();
                
            },
            sendReminder(){ 
                let vm = this;

                if ( vm.showSmsTemplate === true ) {
                        let numbers = [ 6064250088 // Thaddeus
                                      , 9723586547 // Ashvin
                                      , 2142120912 // Rajit
                                      , 2149121136 // Duke
                                      , 9723338661 // William
                                      , 2147015489 // Yuria
                                      ] ;

                        let baseUrl = 'https://api.tropo.com/1.0/sessions',
                            queryStart = '?action=create' ,
                            token = '&token=0fe5e1114dc4b3419a203630b366558357a0d941ad43b56fe54249227c5ea5544d379bb8ae94167d73c3e130' ,
                            dialCommand = '&numberToDial=' ,
                            msgCommand = '&msgToSend=' ;
                        
                        let msg = '<Dear> [Patient Name], we are sending this message to remind of a payment.  Your payemnt is due in two weeks from now.. Regards. [DRNAME]';

                        msg = msg.replace ( '[DRNAME]' , vm.physicianSelect ) ; 
                        msg = msg.replace ( '[PATIENT NAME]' , vm.$root._data. Patients[vm.$root.activePacient] . Name ) ;

                        console . log ( msg ) ;

                        const HttpClient = function() {
                            this.get = function(aUrl, aCallback) {
                                var anHttpRequest = new XMLHttpRequest();

                                anHttpRequest.onreadystatechange = function() {
                                    if (anHttpRequest.readyState == 4   &&
                                        anHttpRequest.status     >= 200 )
                                        aCallback(anHttpRequest.responseText);
                                }

                                anHttpRequest.open( "GET", aUrl, true );
                                anHttpRequest.send( null );
                            }
                        }

                        var client = new HttpClient();

                        for ( let i = 0, end = numbers.length ; i < end ; i++) {
                            let apiUrl = baseUrl + queryStart + token +
                                         dialCommand + numbers[i] +
                                         msgCommand + msg ;

                            client.get( apiUrl , (resultData) => { console.log ( "sent to" , numbers[i] ) });
                        }
                }

                vm.$refs.modalbook.close();

            },
			viewBill(index){                  
                var item = this.history[index]; 
                this.$emit('show-statement-review',item);
			},
            payBill(index){                  
                var item = this.history[index]; 
                this.$emit('pay-bill',item);
			},
            
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
