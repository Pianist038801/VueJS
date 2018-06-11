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
                                :options="['Urology (214-701-5489)','Radiology (214-212-0912)','Cardiology (972-358-6547)','Anesthesiology (972-891-8656)']",
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
                                li() Urology (214-701-5489)
                                li() Front Office
                                li() Cardiology
                            ul(v-if="!showRecent")
                                li() Urology (214-701-5489)
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
    import firebase from '../../js/firebase';
    import axios from 'axios';

  var config = {
    apiKey: "AIzaSyCT2XVZukLQWSWEsXARA_ibBxV5kgKUiWk",
    authDomain: "finesse-2346d.firebaseapp.com",
    databaseURL: "https://finesse-2346d.firebaseio.com",
    projectId: "finesse-2346d",
    storageBucket: "finesse-2346d.appspot.com",
    messagingSenderId: "127662663362"
  };
  firebase.initializeApp(config);

    export default {
        props: ['show'],
        components: { 
            modal,
            Multiselect,
        },
        methods: {
            submit(){
                
                console.log('UHAHA');
                console.log(this.$root._data.Patients[this.$root.activePacient])

                const result = {
                    tempDNIS: this.tempDNIS,
                    Status: 'used',
                    destination: this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1),
                    patientPH: '505-33339999',
                    patientMRN: this.$root._data.Patients[this.$root.activePacient].MRN,
                    Notes: this.phoneNote,
                }


                const results = {
                    destinationNo : this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1),
                    destinationName : this.phoneNumber.substring(0, this.phoneNumber.length - 14),
                    patientName : this.$root._data.Patients[this.$root.activePacient].Name,
                    patientMRN : this.$root._data.Patients[this.$root.activePacient].MRN,
                    callerName : this.$root._data.callerInfo.callerName,
                    callerPhone : this.$root._data.callerInfo.callerNo,
                    callerType : this.$root._data.callerInfo.callerType,
                    notes : this.phoneNote,
                    phantom1 : "",
                    phantom2 : "",
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
                    else
                    {
                        alert('Call transferred successfully');
                    }
                });
                this.$refs.modalphone.close()
                // Old-Way of end-end flow
                // this.$root._data.callNumber = this.phoneNumber.substring(this.phoneNumber.length - 13, this.phoneNumber.length - 1);
                // this.$root._data.callType = this.phoneType;
                // this.$root._data.callDestination = this.phoneNumber.substring(0, this.phoneNumber.length - 14);
                // this.$root._data.callNotes = this.phoneNote;
                // this.$refs.modalphone.close()
                // console.log('Result=', result);
                // const callInfos = this.$root._data.callInfos;
                // for(var i = 0; i<callInfos.length ;i++)
                // {
                //     if(callInfos[i].tempDNIS == this.tempDNIS)
                //     {
                //         callInfos[i] = result;
                //         break;
                //     }
                // }
                // var storageRef = firebase.storage().ref();
                //                 // Create a reference to 'mountains.jpg'
                // var mountainsRef = storageRef.child('mountains.json');
                // var ref = firebase.database().ref().set({notes: this.phoneNote});     
                
                // try{
                //     var debug = {hello: "world"};
                //     var blob = new Blob([JSON.stringify(this.$root._data.callInfos)], {type : 'application/json'});
                //     mountainsRef.put(blob).then(function(snapshot) {
                //         console.log('Uploaded a raw string!');
                //         snapshot.ref.getDownloadURL().then(function(downloadURL) {
                //             console.log('File available at', downloadURL);
                //             console.log('window');
                //             console.log(window);
                //             window.open(downloadURL, '_blank').focus();
                //         });
                //     });
                // }
                // catch(e){
                //     console.log(e);
                // }
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
            console.log('uhaha', this.$root._data.callInfos)
            const callInfos = this.$root._data.callInfos;
            for(var i = 0; i<callInfos.length ;i++)
            {
                if(callInfos[i].Status == 'unused')
                {
                    this.tempDNIS = callInfos[i].tempDNIS;
                    break;
                }
            }
            console.log('TEMPDNIS=', this.tempDNIS);
            var ref = firebase.database().ref();     
            ref.on("value", function(snapshot){
                console.log("CHANGE=", snapshot.val())
                this.$root._data.callNotes = snapshot.val().notes
            })
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
