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
                                :options="['Urology (214-701-5489)','Radiology (214-212-0912)','Cardiology ((972-358-6547)','Anesthesiology (972-891-8656)']",
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
                .modal__content-col
                    tabs().modaltabs
            .modal-appointment__row
                    a(href="#3", @click="$refs.modalphone.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border CANCEL
                    a(href="#3", @click="submit").ui-btn.ui-btn--skin-default.ui-btn--theme-primary SUBMIT                


</template>
<script> 

    import modal from "./modal.vue";
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue';  
    import {Tabs, Tab} from 'vue-tabs-component';

    Vue.use(Tabs);
    Vue.use(Tab);
    export default {
        props: ['show'],
        components: { 
            modal,
            Multiselect,
            Tabs,
            Tab
        },
        methods: {
            submit(){
                console.log('UHAHA');
                console.log(this.$root._data.Patients[this.$root.activePacient])
                const result = {
                    DNIS: this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1),
                    Status: 'used',
                    destination: this.phoneNumber.substring(0, this.phoneNumber.length - 14),
                    patientPH: '00000',
                    patientMRN: this.$root._data.Patients[this.$root.activePacient].MRN,
                    Notes: this.phoneNote,
                }
                this.$root._data.callNumber = this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1);
                this.$root._data.callType = this.phoneType;
                this.$root._data.callDestination = this.phoneNumber.substring(0, this.phoneNumber.length - 14);
                this.$root._data.callNotes = this.phoneNote;
                this.$refs.modalphone.close()
                console.log('Result=', result);
            }
        },
        data() {
            return {
                phoneNumber: '',
                phoneType: '',
                phoneNote: '',
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
</style>
