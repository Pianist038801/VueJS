<template lang="pug"> 
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                .modal-appointment__title
                    .title.mod--modal-appointment Customer Referral Details 
                    .referral-view__top
                        .referral__detail-field
                            span().infoname Referral Id    
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].refID" readonly).infovalue
                        .referral__detail-field
                            span().infoname External Referral ID
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].refID_External" readonly).infovalue
                        .referral__detail-field
                            span().infoname Referral Auth Start Date
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].startDate" readonly).infovalue
                        .referral__detail-field
                            span().infoname Referral Auth End Date
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].endDate" readonly).infovalue

                    .referral-view__top
                        .referral__detail-field
                            span().infoname Customer Id    
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].patientID" readonly).infovalue
                        .referral__detail-field
                            span().infoname Customer Name
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].patientName" readonly).infovalue
                        .referral__detail-field-patient-address
                            span().infoname_address Customer Address
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].patientAddress" readonly).infovalue-patient-address

                    .referral-view__top
                        .referral__detail-field
                            span().infoname Referral Type
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].referralType" readonly).infovalue
                        .referral__detail-field
                            span().infoname Referral Status
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].referredStatus" readonly).infovalue
                        .referral__detail-field
                            span().infoname Diagnoses
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].diagnoses" readonly).infovalue
                        .referral__detail-field
                            span().infoname procedures
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].procedures" readonly).infovalue

                    .referral-view__top
                        .referral__detail-field
                            span().infoname Referred by provider name
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].referredBy" readonly).infovalue
                        .referral__detail-field
                            span().infoname Referred to provider name
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].referredTo" readonly).infovalue
                        .referral__detail-field
                            span().infoname Referred to provider address
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].referredToAddress" readonly).infovalue
                        .referral__detail-field
                            span().infoname Referred to facility address
                            input(:value="this.$root._data.Referrals[this.$root._data.referralIndex].referredToFacility" readonly).infovalue
                                 
            .modal-appointment__row
                    a(href="#3", @click="onClose").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Ok

</template>
<script>

    import modal from "./modal.vue";
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue';
    import axios from 'axios';
    import store from '../../js/store.js';

    export default {
        props: ['show'],
        components: {
            modal,
            Multiselect,
        },
        methods: {
            onClose(){
                this.$refs.modalphone.close()
            },
            ifShow(patient){
                console.log('searchsType')
                console.log(this.searchType);
                if(this.searchKey==-1) return true;
                if(this.searchType=='') return false;
                switch(this.searchType){
                    case 'Customer MRN':
                        return patient.MRN.indexOf(this.searchKey)>-1 ? true : false
                    case 'Customer First Name':
                        return patient.Name.split(' ')[1].indexOf(this.searchKey)>-1 ? true : false
                    case 'Customer Last Name':
                        return patient.Name.split(' ')[0].indexOf(this.searchKey)>-1 ? true : false
                    case 'Customer DOB':
                        return patient.DateOfBirth.split(' ')[0].indexOf(this.searchKey)>-1 ? true : false
                    case 'Customer Zip':
                        return true
                    case 'Customer Phone Number':
                        return patient.PhoneNumber.indexOf(this.searchKey)>-1 ? true : false
                    case 'Customer SSN':
                        return patient.SSN.indexOf(this.searchKey)>-1 ? true : false
                }
            },
            showType(){
                console.log(searchType);
            },
            submit(){
                
                console.log('UHAHA');
                console.log(this.$root._data.Customers[this.$root.activePacient])
                const vm = this;
                const results = {
                    destinationNo : this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1),
                    destinationName : this.phoneNumber.substring(0, this.phoneNumber.length - 14),
                    patientName : this.$root._data.Customers[this.$root.activePacient].Name,
                    patientMRN : this.$root._data.Customers[this.$root.activePacient].MRN,
                    callerName : this.$root._data.callerInfo.callerName,
                    callerPhone : this.$root._data.callerInfo.callerNo,
                    callerType : this.$root._data.callerInfo.callerType,
                    notes : this.phoneNote,
                    transferredFrom: 'Urology Dept',
                    hospital: 'Agenta Health - Urology Department',
                    phantom1 : 'Urology Dept',
                    phantom2 : 'Agenta Health - Urology Department',
                    phantom3 : ""
                }
                console.log(results)
                axios({method: 'post',
                    url: 'http://office.healthcareintegrations.com:8900/setTempDNIS',
                    responseType: 'json',
                    data: results}
                )
                .then(function(response){
                    console.log('Axios_Response=', response);
                    if(response.data.error){
                        alert('No Available TempDNIS Now.');
                    }
                    else{
                        vm.tempDNIS = response.data.tempDNIS
                        console.log('TEMPDNIS=', vm.tempDNIS);
                        //const callNumber = 1111111; // get from finesse api
                        //const transferNumber = results.destinationNo.split('-').join('')
                    }
                });
            },
            clickRow(item){
                console.log(item)
                this.chosen = item
            },  
        },        
        data() {
            return {
                referral: this.$root._data.Referrals[this.$root._data.referralIndex]
            }
        },
         
        created(){
            console.log('PHONE_CREATED');
        },

        watch: {
            show: function (val) {
                this.$refs.modalphone.open();
            }
        },
        mounted() {
            console.log('PHONE_MOUNTED');
            let vm = this;
            vm.phoneNumber='';
        },
        computed:{
             
        },
        beforeDestroy() {
        },
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';
    .box {
        border: 1px solid;
        padding: 12px;
        height: 100%;
    }
    .tab-holder {
        display: flex;
    }
    .tab {
        border: 1px solid;
        padding: 5px 12px;
        flex: 1;
    }
</style>
