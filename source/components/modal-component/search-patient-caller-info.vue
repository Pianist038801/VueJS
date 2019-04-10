<template lang="pug">
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                
                    .modal-appointment__title
                        .title.mod--modal-appointment Provider Caller
 
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
                    th.g-align-center Type
                    th.g-align-center Source
                    th.g-align-center Telephone
                    th.g-align-center Address
                    th.g-align-center Provider
                    th.g-align-center Provider Contact
                tr(v-for="(patient, index) in $root._data.Directory",v-bind:style="{color: patient==chosen?'red':'black'}", v-if="ifShow(patient)==true" @click="clickRow(patient)")
                    td.g-align-center {{patient.name}}
                    td.g-align-center {{patient.type}}
                    td.g-align-center {{patient.source}}
                    td.g-align-center {{patient.telephone}}
                    td.g-align-center {{patient.address}}
                    td.g-align-center {{patient.provider}}
                    td.g-align-center {{patient.providerContact}}


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
                if(this.chosen!=null) store.dispatch('setCallerProvider', this.chosen);
            },
            ifShow(patient){
                if (patient.type === this.callerType) {
                    const key = this.searchKey.toLowerCase();
                    
                    return (patient.name.toLowerCase().indexOf(key) > -1 ||
                        patient.type.toLowerCase().indexOf(key) > -1 ||
                        patient.source.toLowerCase().indexOf(key) > -1 ||
                        patient.address.toLowerCase().indexOf(key) > -1 ||
                        patient.telephone.toLowerCase().indexOf(key) > -1 ||
                        patient.provider.toLowerCase().indexOf(key) > -1 ||
                        patient.providerContact.toLowerCase().indexOf(key) > -1);
                    return true;
                }
                return false;
            },
            showType() {
                console.log(searchType);
            },
            submit(){
                console.log('UHAHA');
                console.log(this.$root._data.Customers[this.$root.activePacient])
                const vm = this;
                // const results = {
                //     destinationNo : this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1),
                //     destinationName : this.phoneNumber.substring(0, this.phoneNumber.length - 14),
                //     patientName : this.$root._data.Customers[this.$root.activePacient].Name,
                //     patientMRN : this.$root._data.Customers[this.$root.activePacient].MRN,
                //     callerName : this.$root._data.callerInfo.callerName,
                //     callerPhone : this.$root._data.callerInfo.callerNo,
                //     callerType : this.$root._data.callerInfo.callerType,
                //     notes : this.phoneNote,
                //     transferredFrom: 'Urology Dept',
                //     hospital: 'Agenta Health - Urology Department',
                //     phantom1 : 'Urology Dept',
                //     phantom2 : 'Agenta Health - Urology Department',
                //     phantom3 : ""
                // }
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
