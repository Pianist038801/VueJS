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
                                :options="['1','2']",
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
                                v-model="phoneNumber",
                                :options="['Transfer','Consult', 'Conference']",
                                @input="",
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Select Phone Number"
                                ).ui-multiselect.ui-multiselect--default    
                            
                            .modal-appointment__lang-main
                                .modal-appointment__lang-title Notes

                            textarea().ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default.mod--sms
            
            .modal-appointment__row
                    a(href="#3", @click="$refs.modalphone.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border CANCEL
                    a(href="#3", @click="submit").ui-btn.ui-btn--skin-default.ui-btn--theme-primary SUBMIT                


</template>
<script> 

    import modal from "./modal.vue";
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue'; 
    export default {
        props: ['show'],
        components: { 
            modal,
            Multiselect, 
        },
        methods: {
            submit(){
                
            }
        },
        data() {
            return {
                phoneNumber: '',
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
