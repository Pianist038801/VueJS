<template lang="pug">
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                
                    .modal-appointment__title
                        .title.mod--modal-appointment Search Customer
 
                        .modal-content-row
  
                            .modal-appointment__info-lang
                                multiselect(
                                v-model="callerType",
                                :options="['Patient', 'Provider', 'Other']",
                                @input="",
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Select Type"
                                ).ui-multiselect.ui-multiselect--default

                            input(v-model="searchTemp").modal-appointment__info-lang
                            a(href="#3", @click="searchKey=searchTemp==''?-1:searchTemp").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Search

            table.search-patient__table
                tr
                    th.g-align-center Name
                    th.g-align-center DOB
                    th.g-align-center MRN
                    th.g-align-center SSN
                    th.g-align-center Phone Number
                    th.g-align-center Address
                    th.g-align-center Primary Care Provider
                    th.g-align-center Provider
                tr(v-for="(patient, index) in $root._data.possibleCustomers",v-bind:style="{color: patient==chosen?'red':'black'}", v-if="ifShow(patient)==true" @click="clickRow(patient)")
                    td.g-align-center {{patient.Name}}
                    td.g-align-center {{patient.DateOfBirth}}
                    td.g-align-center {{patient.MRN}}
                    td.g-align-center {{patient.SSN}}
                    td.g-align-center {{patient.PhoneNumber}}
                    td.g-align-center {{patient.Address.Line1}}
                    td.g-align-center {{patient.PrimaryCareProvider.Name}}
                    td.g-align-center {{patient.Provider[0].Name}} 


            .modal-appointment__row
                    a(href="#3", @click="onSelect").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Select
                    a(href="#3", @click="$refs.modalphone.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Cancel

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
            alertSearch() {
                alert(this.searchTemp);
            },
            onSelect(){
                this.$refs.modalphone.close()
                if(this.chosen!=null) store.dispatch('setCustomerInfo', this.chosen);
            },
            ifShow(patient){
                const key = this.searchKey.toLowerCase();
                return (patient.Name.toLowerCase().indexOf(key) > -1 ||
                    patient.DateOfBirth.toLowerCase().indexOf(key) > -1 ||
                    patient.MRN.toLowerCase().indexOf(key) > -1 ||
                    patient.SSN.toLowerCase().indexOf(key) > -1 ||
                    patient.PhoneNumber.toLowerCase().indexOf(key) > -1 ||
                    patient.Address.Line1.toLowerCase().indexOf(key) > -1 ||
                    patient.Provider[0].Name.toLowerCase().indexOf(key) > -1 ||
                    patient.PrimaryCareProvider.Name.toLowerCase().indexOf(key) > -1);
            },
            showType() {
                console.log(searchType);
            },
            submit(){
                console.log('UHAHA');
                console.log(this.$root._data.Customers[this.$root.activePacient])
                const vm = this;
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
                callerType: 'Patient',
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
