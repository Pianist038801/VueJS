<template lang="pug"> 
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                
                    .modal-appointment__title
                        .title.mod--modal-appointment Search Patient
 
                        .modal-content-row
  
                            .modal-appointment__info-lang
                                multiselect(
                                v-model="phoneNumber",
                                :options="['Search All', 'Search EPIC', 'Search CERNER']",
                                @input="",
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Select EHR"
                                ).ui-multiselect.ui-multiselect--default
 

                            .modal-appointment__info-lang
                                multiselect(
                                v-model="searchType",
                                :options="['Patient MRN', 'Patient First Name', 'Patient Last Name', 'Patient DOB','Patient Zip', 'Patient Phone Number', 'Patient SSN']",
                                @input="showType",
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Select Criteria"
                                ).ui-multiselect.ui-multiselect--default
                            input(v-model="searchTemp").modal-appointment__info-lang
                            a(href="#3", @click="searchKey=searchTemp==''?-1:searchTemp").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Search

            table.search-patient__table
                tr
                    th.g-align-center MRN
                    th.g-align-center First Name
                    th.g-align-center Last Name
                    th.g-align-center DOB
                    th.g-align-center ZIP
                    th.g-align-center Phone Number
                    th.g-align-center SSN
                tr(v-for="(patient, index) in $root._data.Patients",v-bind:style="{color: patient==chosen?'red':'black'}", v-if="ifShow(patient)==true" @click="clickRow(patient)")
                
                    td().g-align-center {{patient.MRN}}
                    td.g-align-center {{patient.Name.split(' ')[1]}}
                    td.g-align-center {{patient.Name.split(' ')[0]}}
                    td.g-align-center {{patient.DateOfBirth.split(' ')[0]}}
                    td.g-align-center Zip
                    td.g-align-center {{patient.PhoneNumber}}
                    td.g-align-center {{patient.SSN}}
                //- tr(v-for="(item, index) in existingApointmentSlots", :class="{'state--hold': item.Status === 'On Hold' }").make-appointment__table-tr

                //-     td.make-appointment__table-time {{item.StartTime | moment("HH:mm")}} - {{item.EndTime | moment("HH:mm A")}}
                //-     td {{item.Name}}
                //-     td.g-align-center {{item.Facility}}
                //-     td.g-align-center {{item.Provider}}
                //-     td.g-align-center {{item.Physician}}
                //-     td.make-appointment__table-status.g-align-center {{item.Status}}
                //-     td.g-align-center.make-appointment__table-action(v-if="item.Status === 'On Hold'")
                //-         a(href="#3", @click.prevent="").ui-btn.ui-btn--skin-default.ui-btn--theme-disable-border.mod--block update
                //-     td.g-align-center.make-appointment__table-action(v-else)
                //-         a(href="#3", @click.prevent="showModal(index)").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border.mod--block book now
            .modal-appointment__row
                    a(href="#3", @click="onSelect").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Select

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
            onSelect(){
                this.$refs.modalphone.close()
                console.log('THIS.CHOSEN=');
                console.log(this.chosen);
                if(this.chosen.Name=='Johns Sarah')
                    store.dispatch('setId', 1)
                else
                    store.dispatch('setId', 0)
            },
            ifShow(patient){
                console.log('searchsType')
                console.log(this.searchType);
                if(this.searchKey==-1) return true;
                if(this.searchType=='') return false;
                switch(this.searchType){
                    case 'Patient MRN':
                        return patient.MRN.indexOf(this.searchKey)>-1 ? true : false
                    case 'Patient First Name':
                        return patient.Name.split(' ')[1].indexOf(this.searchKey)>-1 ? true : false
                    case 'Patient Last Name':
                        return patient.Name.split(' ')[0].indexOf(this.searchKey)>-1 ? true : false
                    case 'Patient DOB':
                        return patient.DateOfBirth.split(' ')[0].indexOf(this.searchKey)>-1 ? true : false
                    case 'Patient Zip':
                        return true
                    case 'Patient Phone Number':
                        return patient.PhoneNumber.indexOf(this.searchKey)>-1 ? true : false
                    case 'Patient SSN':
                        return patient.SSN.indexOf(this.searchKey)>-1 ? true : false
                }
            },
            showType(){
                console.log(searchType);
            },
            submit(){
                
                console.log('UHAHA');
                console.log(this.$root._data.Patients[this.$root.activePacient])
                const vm = this;
                const results = {
                    destinationNo : this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1),
                    destinationName : this.phoneNumber.substring(0, this.phoneNumber.length - 14),
                    patientName : this.$root._data.Patients[this.$root.activePacient].Name,
                    patientMRN : this.$root._data.Patients[this.$root.activePacient].MRN,
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
                phoneNumber: '',
                searchType: '',
                phoneNote: '',
                searchKey: '',
                searchTemp: '',
                showRecent: true,
                chosen: null,
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
