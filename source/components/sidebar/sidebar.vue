<template lang="pug">
    aside.sidebar(v-if='pacients')
        transition(name="fade", mode='out-in')
            .content
                .content__box
                    search-patient-caller-info(:show="$root.currentShowPatientCallerInfo")
        transition(name="fade", mode='out-in')
            .content
                .content__box
                    search-provider-caller-info(:show="$root.currentShowProviderCallerInfo")
        transition(name="fade", mode='out-in')
            .content
                .content__box
                    search-customer-info(:show="$root.currentShowSearchCustomerInfo")

        .sidebar__title(v-if="$root._data.isPatient === true") Caller Information
            a(v-if="$root._data.isPatient === true || $root._data.isProvider === true", href="#3", @click.prevent="$root.showSearchPatientCallerInfo()").content__top-action.caller__search-icon
                svg.ico-svg__search-patient
                    use(xlink:href="#search")
        .sidebar__title(v-if="$root._data.isProvider === true") Caller Information
            a(v-if="$root._data.isPatient === true || $root._data.isProvider === true", href="#3", @click.prevent="$root.showSearchProviderCallerInfo()").content__top-action.caller__search-icon
                svg.ico-svg__search-patient
                    use(xlink:href="#search")
        .l-sidebar__section(v-if="$root._data.isPatient === true")
            .sidebar__section
                .sidebar__section--note Caller Name
                multiselect(
                    :placeholder="$root._data.isAdam === true ? 'Adam Isakson' : $store.state.chosenPatient.name",
                    :options=[""],
                    @input="getCurrentIndexPacient",
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false"
                 ).ui-multiselect.ui-multiselect--default
            .sidebar__section
                .sidebar__section--note Caller Phone #
                input(:value="$store.state.chosenPatient.telephone" readonly).infovalue
            .sidebar__section
                .sidebar__section--note Call Type
                multiselect(
                    :placeholder="$store.state.chosenPatient.type",
                    :options="['Customer', 'Parent', 'Family', 'Agent', 'Nurse', 'Physician']",
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false"
                ).ui-multiselect.ui-multiselect--default.inline-block

        .l-sidebar__section(v-if="$root._data.isProvider === true")
            .sidebar__section
                .sidebar__section--note Caller Name
                multiselect(
                    :placeholder="$store.state.chosenProvider.name",
                    :options=[""],
                    @input="getCurrentIndexPacient",
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false"
                 ).ui-multiselect.ui-multiselect--default
            .sidebar__section
                .sidebar__section--note Caller Phone #
                input(:value="$store.state.chosenProvider.telephone" readonly).infovalue
            .sidebar__section
                .sidebar__section--note Call Type
                multiselect(
                    :placeholder="$store.state.chosenProvider.role",
                    :options="['Customer', 'Parent', 'Family', 'Agent', 'Nurse', 'Physician']",
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false"
                ).ui-multiselect.ui-multiselect--default.inline-block
        .sidebar__divider(v-if="$root._data.isPatient === true || $root._data.isProvider === true")
        .sidebar__title Customer Information
            a(v-if="$root._data.isPatient === true || $root._data.isProvider === true", href="#3", @click.prevent="$root.showSearchCustomerInfo()").content__top-action.customer__search-icon
                svg.ico-svg__search-patient
                    use(xlink:href="#search")
        div(v-if="$root._data.isPatient === false && $root._data.isProvider === false && $root._data.isAirlineDemo === false")
            .l-sidebar__userpic
                .sidebar__userpic
                    img.sidebar__userpic-image(:src="pacients[currentPacient].PhotoUrl")
                    a(href="#3", @click.prevent="$root.currentShowSubBox = 'patient-info'").sidebar__userpic-info
                        svg.ico-svg.ico-svg__info
                            use(xlink:href="#info")
            .sidebar__note-userpic Number of Matches (<b>{{sizePacients}}</b>)
            .l-sidebar__section
                .sidebar__section
                    .sidebar__section--note Customer Name

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
                        a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InCustomer/patient_scheduling/search.html')").sub-popup-menu__item Customer Search
                        a(href="#3", @click.prevent="openNewWindow('https://i.ytimg.com/vi/RIsVxJWuQ8Y/maxresdefault.jpg')").sub-popup-menu__item Customer Information
                        a(href="#3", @click.prevent="replaceNewWindow('alert:test')").sub-popup-menu__item Appointments Create
        div(v-if="$root._data.isAirlineDemo === true")
            .l-sidebar__userpic
                .sidebar__userpic
                    img.sidebar__userpic-image(:src="pacients[currentPacient].PhotoUrl")
                    a(href="#3", @click.prevent="$root.currentShowSubBox = 'patient-info'").sidebar__userpic-info
                        svg.ico-svg.ico-svg__info
                            use(xlink:href="#info")
            .sidebar__note-userpic Number of Matches (<b>{{sizePacients}}</b>)
            .l-sidebar__section
                .sidebar__section
                    .sidebar__section--note Customer Name

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
                    .sidebar__section--note Verified
                    .sidebar__section--info Yes
                .sidebar__section
                    .sidebar__section--note Account
                    .sidebar__section--info Cisco Systems INC
                .sidebar__section
                    .sidebar__section--note ANI
                    .sidebar__section--info 6027914431
                .sidebar__section
                    .sidebar__section--note CDN
                    .sidebar__section--info 9191231234 
                .sidebar__section
                    .sidebar__section--note Email
                    .sidebar__section--info bimcdona@cisco.com
                .sidebar__section
                    .sidebar__section--note Language
                    .sidebar__section--info English
                .sidebar__section
                    .sidebar__section--note Country
                    .sidebar__section--info US
                .sidebar__section
                    .sidebar__section--note Arranger
                    .sidebar__section--info FALSE
                .sidebar__section
                    .sidebar__section--note Voice Print
                    .sidebar__section--info Yes
            .sidebar__success
                .sub-popup-menu
                    .sub-popup-menu__action
                        a(href="#3").ui-btn.ui-btn--skin-default.ui-btn--theme-primary.mod--block  Screen pop
                    .sub-popup-menu__list
                        a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InCustomer/patient_scheduling/search.html')").sub-popup-menu__item Customer Search
                        a(href="#3", @click.prevent="openNewWindow('https://i.ytimg.com/vi/RIsVxJWuQ8Y/maxresdefault.jpg')").sub-popup-menu__item Customer Information
                        a(href="#3", @click.prevent="replaceNewWindow('alert:test')").sub-popup-menu__item Appointments Create
        div(v-if="$root._data.isPatient === true || ($root._data.isProvider === true && $store.state.customerSelected === true)")
            .l-sidebar__userpic
                .sidebar__userpic
                    img.sidebar__userpic-image(:src="$root._data.isAdam === true ? 'img/adam.png' : $store.state.chosenCustomer.PhotoUrl")
                    a(href="#3", @click.prevent="$root.currentShowSubBox = 'patient-info'").sidebar__userpic-info
                        svg.ico-svg.ico-svg__info
                            use(xlink:href="#info")
            .sidebar__note-userpic Number of Matches (<b>{{sizePacients}}</b>)
            .l-sidebar__section
                .sidebar__section
                    .sidebar__section--note Customer Name

                    //- select(v-model="currentPacientName")
                        option(v-for="item in pacients", :value="item.Name") {{item.Name}}
                    multiselect(
                        v-model="$root._data.isAdam === true ? 'Adam Isakson' : $store.state.chosenCustomer.Name",
                        :options="namesPacient",
                        @input="getCurrentIndexPacient",
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false"
                    ).ui-multiselect.ui-multiselect--default

                .sidebar__section
                    .sidebar__section--note Date of Birth
                    .sidebar__section--info {{ $store.state.chosenCustomer.DateOfBirth | moment("MMM DD, YYYY")}}
                .sidebar__section
                    .sidebar__section--note MRN
                    .sidebar__section--info {{ $store.state.chosenCustomer.MRN }}    
                .sidebar__section
                    .sidebar__section--note SSN
                    .sidebar__section--info {{ $store.state.chosenCustomer.SSN}}
                .sidebar__section
                    .sidebar__section--note Phone Number
                    .sidebar__section--info
                        a(:href="'tel:'+$store.state.chosenCustomer.PhoneNumber.replace(/[^0-9]+/g,'')").sidebar__section--info-link
                            | {{ $store.state.chosenCustomer.PhoneNumber}}
                .sidebar__section
                    .sidebar__section--note Address
                    .sidebar__section--info
                        | {{$store.state.chosenCustomer.Address.Line1}}, 
                    .sidebar__section--info 
                        | {{$store.state.chosenCustomer.Address.Line2}}

                .sidebar__section
                    .sidebar__section--note Primary Care Provider
                    .sidebar__section--info {{ $store.state.chosenCustomer.PrimaryCareProvider.Name}}
                    .sidebar__section--info
                        a(:href="'tel:'+$store.state.chosenCustomer.PrimaryCareProvider.Phone.replace(/[^0-9]+/g,'')").sidebar__section--info-link
                            | {{ $store.state.chosenCustomer.PrimaryCareProvider.Phone}}

                //- show  TreatmentTeam
                .sidebar__section(v-if="$store.state.chosenCustomer.TreatmentTeam.length")
                    .sidebar__section--note Treatment Team
                    div(v-if="$store.state.chosenCustomer.TreatmentTeam.lenght >1")
                        multiselect(
                            v-model="currentPacientTeam",
                            :options="pacients",
                            label="Name",
                            @input="getCurrentIndexPacient",
                        )
                    div(v-else)
                        .sidebar__section--info-select
                            | {{ $store.state.chosenCustomer.TreatmentTeam[0].Name}}
                        .sidebar__section--info
                            | {{ $store.state.chosenCustomer.TreatmentTeam[0].PhoneNumber}}

                //- show  Provider
                .sidebar__section(v-if="$store.state.chosenCustomer.Provider.length")
                    .sidebar__section--note Provider
                    div(v-if="$store.state.chosenCustomer.TreatmentTeam.lenght >1")
                        multiselect(
                        v-model="currentPacientTeam",
                        :options="pacients",
                        label="Name",
                        @input="getCurrentIndexPacient",
                        )
                    div(v-else)
                        .sidebar__section--info-select
                            | {{ $store.state.chosenCustomer.Provider[0].Name}}
                        .sidebar__section--info
                            a(:href="'tel:'+$store.state.chosenCustomer.Provider[0].PhoneNumber.replace(/[^0-9]+/g,'')").sidebar__section--info-link
                                | {{ $store.state.chosenCustomer.Provider[0].PhoneNumber}}

            .sidebar__success
                .sub-popup-menu
                    .sub-popup-menu__action
                        a(href="#3").ui-btn.ui-btn--skin-default.ui-btn--theme-primary.mod--block  Screen pop
                    .sub-popup-menu__list
                        a(href="#3", @click.prevent="openNewWindow('http://10.1.74.36:2230/EPIC_InCustomer/patient_scheduling/search.html')").sub-popup-menu__item Customer Search
                        a(href="#3", @click.prevent="openNewWindow('https://i.ytimg.com/vi/RIsVxJWuQ8Y/maxresdefault.jpg')").sub-popup-menu__item Customer Information
                        a(href="#3", @click.prevent="replaceNewWindow('alert:test')").sub-popup-menu__item Appointments Create

    // End
</template>
<script>

    import Multiselect from '../name-select/src/Multiselect.vue';
    import searchPatientCallerInfo from "../modal-component/search-patient-caller-info.vue";
    import searchProviderCallerInfo from "../modal-component/search-provider-caller-info.vue";
    import searchCustomerInfo from "../modal-component/search-customer-info.vue";

    export default {
        props: ['pacients', 'active'],
        components: {
            Multiselect,
            searchPatientCallerInfo,
            searchProviderCallerInfo,
            searchCustomerInfo,
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
                    window.open(this.$root.$data.Customers[this.$root.$data.activePacient][dataUrlField], "CNN_WindowName", strWindowFeatures);
                    return;
                }
                window.open(url, "CNN_WindowName", strWindowFeatures);
            },
            replaceNewWindow(url) {
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                window.location.href = url;
                //window.open(url, "CNN_WindowName", strWindowFeatures, true);
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
                options.push({id: 3, name: "March 8, 2019", type: 'visit'});
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
                    if(newValue === 'Opal Lee') {
                        this.$root.$data.callerNotes = '';
                        this.$root._data.dropdownCallerName = 'Opal Lee';
                    } else {
                        this.$root.$data.callerNotes = '';
                        this.$root._data.dropdownCallerName = newValue;
                    }
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
