<template lang="pug"> 
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                .modal__content-col
                    .modal-appointment__title
                        .title.mod--modal-appointment Phone Book
 
                        .modal-content-row
                            .modal-appointment__lang-main
                                .modal-appointment__lang-title Destination

                            .modal-appointment__info-lang
                                multiselect(
                                v-model="phoneNumber",
                                :options="['Urology (469-899-1224)','Radiology (214-212-0912)','Cardiology (972-358-6547)','Anesthesiology (972-891-8656)']",
                                @input="",
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Select Phone Number"
                                ).ui-multiselect.ui-multiselect--default
                            
                            .modal-appointment__lang-main
                                .modal-appointment__lang-title Type

                            .modal-appointment__info-lang
                                multiselect(
                                v-model="phoneType",
                                :options="['Transfer','Consult', 'Conference']",
                                @input="",
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Select Phone Type"
                                ).ui-multiselect.ui-multiselect--default    
                            
                            .modal-appointment__lang-main
                                .modal-appointment__lang-title Notes

                            textarea(v-model="phoneNote").ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default.mod--sms

                            span tempDNIS
                            input(v-model="tempDNIS" readonly)
                .modal__content-col
                    div().box
                        div().tab-holder
                            a(@click="showRecent=false").tab Recent List
                            a(@click="showRecent=true").tab Favorite List
                        div()
                            ul(v-if="showRecent")
                                li() 972-888-2938
                                li() Urology (469-899-1224)
                                li() Front Office
                                li() Cardiology
                            ul(v-if="!showRecent")
                                li() Urology (469-899-1224)
                                li() Radiology (214-212-0912)
                                li() Cardiology (972-358-6547)
                                li() Anesthesiology (972-891-8656)
            .modal-appointment__row
                    a(href="#3", @click="$refs.modalphone.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border CANCEL
                    a(href="#3", @click="submit").ui-btn.ui-btn--skin-default.ui-btn--theme-primary DIAL


</template>
<script> 

    import modal from "./modal.vue";
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue'; 
    import axios from 'axios';

    export default {
        props: ['show'],
        components: { 
            modal,
            Multiselect,
        },
        methods: {
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
                    phantom1 : "",
                    phantom2 : "",
                    phantom3 : this.$root._data.agentID
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
                    else
                    {
                        vm.tempDNIS = response.data.tempDNIS
                        //Transfer Call
                        const { dlgID, extension } = vm.$root._data;
                        console.log('DLG=', dlgID, 'extension=', extension);
                        
                        let xmls=`<body>\
                            <requestedAction>CONSULT_CALL</requestedAction>\
                            <dialog>${dlgID}</dialog>\
                            <toAddress>91${vm.tempDNIS}</toAddress>\
                            <targetMediaAddress>${extension}</targetMediaAddress>\
                        </body>`
                        var config = {
                            headers: {'Content-Type': 'application/xml'}
                        };    
                        axios.post(
                            'http://10.3.74.118:3456/finesse_api',
                            xmls,
                            config
                        )
                        .then((res) => {
                            console.log("TRANSFER_CALL_RESPONSE RECEIVED: ");
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log("TRANSFER_CALL ERROR: ");
                            console.log(err)
                        })  
                    }
                });  
            }
        },
        data() {
            return {
                phoneNumber: '',
                phoneType: '',
                phoneNote: '',
                tempDNIS: '',
                showRecent: true,
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
