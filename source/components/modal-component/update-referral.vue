<template lang="pug"> 
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                .modal-appointment__title
                    .title.mod--modal-appointment Update Customer Referral Details 
                    .referral-view__top
                        .referral__detail-field
                            span().infoname STATUS    
                            multiselect(
                                :options="['Denied', 'Pending', 'Closed', 'Authorized']",
                                :searchable="false",
                                v-model="status",
                                :allowEmpty="false",
                                :showLabels="false"
                            ).ui-multiselect.ui-multiselect--default.inline-block
                        .referral__detail-field-reason
                            span().infoname Reason
                            input(v-model="reason").reasonvalue
                         

                    .referral-view__top
                        .referral__detail-field
                            span().infoname Referral Start Date
                            input(v-model="startDate").infovalue
                        .referral__detail-field
                            span().infoname Referral Expiration Date
                            input(v-model="expirationDate").infovalue
                        .referral__detail-field
                            span().infoname Schedule By Date
                            input(v-model="scheduleDate", required).infovalue
                        .referral__detail-field
                            span().infoname Scheduling Status
                            multiselect(
                                :options="['Denied', 'Pending', 'Closed', 'Authorized']",
                                :searchable="false",
                                v-model="scheduleStatus",
                                :allowEmpty="false",
                                :showLabels="false"
                            ).ui-multiselect.ui-multiselect--default.inline-block

                    .referral-view__top
                        .referral__detail-field
                            span().infoname Referred to Dept ID
                            input(v-model="deptID").infovalue
                        .referral__detail-field
                            span().infoname Referred to Dept ID Type
                            input(v-model="deptType").infovalue
                        .referral__detail-field
                            span().infoname Referred to Location ID
                            input(v-model="locationID").infovalue
                        .referral__detail-field
                            span().infoname Referred to Location ID Type
                            input(v-model="locationType").infovalue

                    .referral-view__top
                        .referral__detail-field
                            span().infoname Referred by provider ID Type
                            input(v-model="providerType").infovalue
                        .referral__detail-field
                            span().infoname Referred to provider ID
                            input(v-model="providerID").infovalue
                        .referral__detail-field
                            span().infoname Assign Referral to Appointment
                             
                            input(type="checkbox", v-model="assign", @click.prevent="assign=true" ).infovalue
                            multiselect(
                                :options="assign==true?appointments:[]",
                                :searchable="false",
                                v-model="appointment",
                                :allowEmpty="false",
                                :showLabels="false"
                            ).ui-multiselect.ui-multiselect--default.inline-block
                        .referral__detail-field
                            span().infoname Unassign Referral to Appointment
                            input(type="checkbox", v-model="un_assign", @click.prevent="assign=false" ).infovalue

                    .referral-view__top
                        .referral__detail-field-notes
                            span().infoname Notes
                            textarea(v-model="notes").reasonvalue
                        .referral__detail-field-notes 
                            span().infoname Comments
                            textarea(v-model="comments").reasonvalue
                                 
            
            .modal-appointment__row
                    a(href="#3", @click="onClose").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Close
                    a(href="#3", @click="onUpdate").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Update

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
            onUpdate(){
                this.$root._data.Referrals[this.$root._data.referralIndex].referredStatus = this.status
                this.$root._data.Referrals[this.$root._data.referralIndex].reason = this.reason
                this.$root._data.Referrals[this.$root._data.referralIndex].startDate = this.startDate
                this.$root._data.Referrals[this.$root._data.referralIndex].endDate = this.expirationDate
                this.$root._data.Referrals[this.$root._data.referralIndex].scheduleDate = this.scheduleDate
                this.$root._data.Referrals[this.$root._data.referralIndex].scheduleStatus = this.scheduleStatus
                this.$root._data.Referrals[this.$root._data.referralIndex].deptID = this.deptID
                this.$root._data.Referrals[this.$root._data.referralIndex].deptType = this.deptType
                this.$root._data.Referrals[this.$root._data.referralIndex].locationID = this.locationID
                this.$root._data.Referrals[this.$root._data.referralIndex].locationType = this.locationType
                this.$root._data.Referrals[this.$root._data.referralIndex].referredBy = this.providerID
                this.$root._data.Referrals[this.$root._data.referralIndex].referralType = this.providerType
                this.$root._data.Referrals[this.$root._data.referralIndex].assignAppointment = this.assign    
                this.$root._data.Referrals[this.$root._data.referralIndex].appointment = this.appointment
                this.$root._data.Referrals[this.$root._data.referralIndex].notes = this.notes
                this.$root._data.Referrals[this.$root._data.referralIndex].comments = this.comments
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
        },        
        data() {
            console.log('Update_DLG_OPEN');
            const referral = this.$root._data.Referrals[this.$root._data.referralIndex];
            const appointments = this.$root._data.referralAppointments.map(val => val.StartTime)
            return {
                appointments,
                status: referral.referredStatus,
                reason: referral.reason,
                startDate: referral.startDate,
                expirationDate: referral.endDate,
                scheduleDate: referral.scheduleDate,
                scheduleStatus: referral.scheduleStatus,
                deptID: referral.deptID,
                deptType: referral.deptType,
                locationID: referral.locationID,
                locationType: referral.locationType,
                providerID: referral.referredBy,
                providerType: referral.referralType,
                checkAppointment: referral.assignAppointment,
                assign: referral.assignAppointment,
                un_assign: !referral.assignAppointment,
                appointment: referral.appointment,
                notes: referral.notes,
                comments: referral.comments,
            }
        },
         
        created(){
            console.log('PHONE_CREATED');
        },

        watch: {
            assign: function(val) {
                this.un_assign = !val;
            },
            show: function (val) {
                console.log('showUpdate');
                this.$refs.modalphone.open();
                const referral = this.$root._data.Referrals[this.$root._data.referralIndex];
                this.reason = referral.reason
                this.status= referral.referredStatus,
                this.reason= referral.reason,
                this.startDate= referral.startDate,
                this.expirationDate= referral.endDate,
                this.scheduleDate= referral.scheduleDate,
                this.scheduleStatus= referral.scheduleStatus,
                this.deptID= referral.deptID,
                this.deptType= referral.deptType,
                this.locationID= referral.locationID,
                this.locationType= referral.locationType,
                this.providerID= referral.referredBy,
                this.providerType= referral.referralType,
                this.checkAppointment= referral.assignAppointment,
                this.assign= referral.assignAppointment,
                this.appointment= referral.appointment,
                this.notes= referral.notes,
                this.comments= referral.comments
                 
            }
        },
        mounted() {
            console.log('PHONE_MOUNTED');
            let vm = this;
            vm.phoneNumber='';
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
