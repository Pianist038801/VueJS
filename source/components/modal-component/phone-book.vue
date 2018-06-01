<template lang="pug">
        
    modal(ref="modalphone")
        .modal__content
            .modal__content-row
                .modal__content-col
                    .modal-appointment__title
                        .title.mod--modal-appointment Books Now
                         
 
</template>
<script> 

    import modal from "./modal.vue";  
    import Multiselect from 'vue-multiselect';

    export default {
        props: ['show'],
        components: { 
            modal,
            Multiselect
            
        },
        data() {
            return {
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
