<template lang="pug">
        
    modal(ref="modalphone")
        .modal__content

            .modal__content-row
                .modal__content-col

                    .modal-appointment__title
                        .title.mod--modal-appointment Book Now
 


</template>
<script> 

    import modal from "./modal.vue";  

    export default {
        props: ['show'],
        components: { 
            modal
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
                console.log('WATCH_SHOW=', val)
            }
        },
        mounted() {
            console.log('PHONE_MOUNTED');
            let vm = this;
            vm.$refs.modalphone.open();
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
