<template lang="pug">
    aside.sidebar(v-if='pacients')
        .sidebar__title Patient Information
        .l-sidebar__userpic
            .sidebar__userpic
                img.sidebar__userpic-image(:src="pacients[currentPacient].PhotoUrl")
                a(href="#3", @click.prevent="$root.currentShowSubBox = 'patient-info'").sidebar__userpic-info
                    svg.ico-svg.ico-svg__info
                        use(xlink:href="#info")
        .sidebar__note-userpic Number of Matches (<b>{{sizePacients}}</b>)
        .l-sidebar__section
            .sidebar__section
                .sidebar__section--note Patient Name

                //- select(v-model="currentPacientName")
                    option(v-for="item in pacients", :value="item.Name") {{item.Name}}
                multiselect(
                    v-model="currentPacientName",
                    :options="namesPacient",
                    @input="getCurrentIndexPacient",
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false"
                 ).ui-multiselect.ui-multiselect--default

            .sidebar__section
                .sidebar__section--note Date of Birth
                .sidebar__section--info {{ pacients[currentPacient].DateOfBirth | moment("MMM DD, YYYY")}}
            .sidebar__section
                .sidebar__section--note MRN
                .sidebar__section--info {{ pacients[currentPacient].MRN }}    
            .sidebar__section
                .sidebar__section--note SSN
                .sidebar__section--info {{ pacients[currentPacient].SSN}}
            .sidebar__section
                .sidebar__section--note Phone Number
                .sidebar__section--info
                    a(:href="'tel:'+pacients[currentPacient].PhoneNumber.replace(/[^0-9]+/g,'')").sidebar__section--info-link
                        | {{ pacients[currentPacient].PhoneNumber}}
            .sidebar__section
                .sidebar__section--note Address
                .sidebar__section--info
                    | {{pacients[currentPacient].Address.Line1}}, 
                .sidebar__section--info 
                    | {{pacients[currentPacient].Address.Line2}}

            .sidebar__section
                .sidebar__section--note Primary Care Provider
                .sidebar__section--info {{ pacients[currentPacient].PrimaryCareProvider.Name}}
                .sidebar__section--info
                    a(:href="'tel:'+pacients[currentPacient].PrimaryCareProvider.Phone.replace(/[^0-9]+/g,'')").sidebar__section--info-link
                        | {{ pacients[currentPacient].PrimaryCareProvider.Phone}}

            //- show  TreatmentTeam
            .sidebar__section(v-if="pacients[currentPacient].TreatmentTeam.length")
                .sidebar__section--note Treatment Team
                div(v-if="pacients[currentPacient].TreatmentTeam.lenght >1")
                    multiselect(
                        v-model="currentPacientTeam",
                        :options="pacients",
                        label="Name",
                        @input="getCurrentIndexPacient",
                    )
                div(v-else)
                    .sidebar__section--info-select
                        | {{ pacients[currentPacient].TreatmentTeam[0].Name}}
                    .sidebar__section--info
                        | {{ pacients[currentPacient].TreatmentTeam[0].PhoneNumber}}

            //- show  Provider
            .sidebar__section(v-if="pacients[currentPacient].Provider.length")
                .sidebar__section--note Provider
                div(v-if="pacients[currentPacient].TreatmentTeam.lenght >1")
                    multiselect(
                    v-model="currentPacientTeam",
                    :options="pacients",
                    label="Name",
                    @input="getCurrentIndexPacient",
                    )
                div(v-else)
                    .sidebar__section--info-select
                        | {{ pacients[currentPacient].Provider[0].Name}}
                    .sidebar__section--info
                        a(:href="'tel:'+pacients[currentPacient].Provider[0].PhoneNumber.replace(/[^0-9]+/g,'')").sidebar__section--info-link
                            | {{ pacients[currentPacient].Provider[0].PhoneNumber}}

        .sidebar__success
            .sub-popup-menu
                .sub-popup-menu__action
                    a(href="#3").ui-btn.ui-btn--skin-default.ui-btn--theme-primary.mod--block  Screen pop
                .sub-popup-menu__list
                    a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InPatient/patient_scheduling/search.html')").sub-popup-menu__item Patient Search
                    a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InPatient/patient_scheduling/patient_demog.html')").sub-popup-menu__item Patient Information
                    a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InPatient/patient_scheduling/make_appt.html')").sub-popup-menu__item Appointments Create

    // End
</template>
<script>

    import Multiselect from '../name-select/src/Multiselect.vue';
    export default {
        props: ['pacients', 'active'],
        components: {
            Multiselect,
        },
        data() {
            return {
                visible: false,
                patientNames: [],
            }
        },
        methods: {
            openNewWindow(url, dataUrlField){
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                if (dataUrlField) {
                    window.open(this.$root.$data.Patients[this.$root.$data.activePacient][dataUrlField], "CNN_WindowName", strWindowFeatures);
                    return;
                }
                window.open(url, "CNN_WindowName", strWindowFeatures);
            },
            getCurrentIndexPacient(){
                let vm = this;
                console.log('1_currentID=');
                console.log(vm.currentPacient);
                const now = new Date();
                const options = [];
                console.log('ACTIVE_PATIENT=', this.$root.activePacient);
                for(let i = 0 ; i < 3; i ++)
                {
                    let date = new Date();
                    date.setDate(date.getDate() - 40 + this.$root.activePacient * 5 + i * 9);
                    const _name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear() + ' - 3:00pm';
                    options.push({id: i, name: _name, type: 'visit'})
                }
                vm.$root.journeyOptions = options;
                vm.pacients.forEach((item, i) => {
                    if(item.Name === vm.currentPacientName) {
                        vm.$root.activePacient = i;
                        //vm.currentPacient = i;
                        console.log(item.Name + '+' + vm.currentPacientName)
                        console.log(i);
                    }
                });
            }
        },
        created() {
            this.currentPacientName = this.pacients[this.$root.$data.activePacient].Name;
        },
        mounted() {
            let vm = this;
            console.log ("this is" , this);
            vm.getCurrentIndexPacient();
        },
        beforeDestroy() {

        },
        computed: {
            currentPacient: {
                // getter
                get: function () {
                return this.$store.state.pacientId;
                },
                // setter
                set: function (newValue) {
                this.$store.dispatch('setId', newValue)
                }
            },
            currentPacientName: {
                // getter
                get: function () {
                return this.$store.state.pacientName;
                },
                // setter
                set: function (newValue) {
                this.$store.dispatch('setName', newValue);
                }
            },
            // get only
            sizePacients: function () {

                let length = 0 ;
                if (this.pacients.length > 0 && this.pacients[0].Name !== "") length = this.pacients.length ;
                return length
            },
            namesPacient: function () {
                let vm = this;
                let array = ['EPIC'];

                vm.pacients.forEach((item, i) => {
                    if(item.Category=='EPIC')
                        array.push(item.Name);
                });
                return array;
            }

        },
        watch: {
            'currentPacientName': function (val) {
                this.getCurrentIndexPacient();
            },
            'active': function(val){
                this.currentPacientName = this.pacients[val].Name;
            }
        }
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

    .sidebar__success {
        .sub-popup-menu {
            width: 100%;
        }
        .sub-popup-menu__list {
            top: auto;
            bottom: em(40);
        }
    }
</style>
