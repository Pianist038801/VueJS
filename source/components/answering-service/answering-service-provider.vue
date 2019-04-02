<template lang="pug">     
    .appointment
        .answering-service
            .answering-caller-info
                span Call from: 253-444-5637
                div Call To: 1-800-456-9876
                div (OmniCare Urology)
                div(style="height: 30px")
                div Call matched to: Patient
                div Number of Matches: 1
                div Last Action: Urology Appointment
                div(style="flex: 1; height: 3px; background: navy; margin: 10px 0;")
                div Details
                div(style="height: 10px")
                .details-content
                    .modal__content-row
                        .modal-appointment__title
                            .title.mod--modal-appointment(style="margin-left: 50px") South Shore Urology
                    .details-content-urology
                        .urology-item
                            div Mon - Fri 9am - 4:30 pm
                            div Lunch: 12pm - 1:15pm
                        .urology-item
                            div 780 Main Street 
                            div South Weymouth, MA 02190
                        .urology-item
                            div Office #: 781-331-4600
                            div Fax #: 781-337-5095
                            div SSH Ext: x6860
                div(style="margin-top: 30px") Quick Links:
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link 2 Pond Park
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Cancer Center
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Consults
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Courtesy Coach
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Emergency Department
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Engineering
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Health Info Mgmt
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Human Resources
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Supply Chain Mgmt
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Neat Line
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Patient Flow/Discharge
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link Physician Referral
                a(href="#3", ).ui-btn.ui-btn--skin-default.ui-btn--theme-primary.menu-button.quick-link.blue Other
            .answering-triage-guide
                div(style="height: 20px")
                span Triage Guide
                div(style="height: 30px")
                div The office representatives are unavailable at this time. Is this urgent or can I send a message to the office for you?
                div(style="height: 50px")
                .button-array
                    a(href="#3", @click="$refs.modalbook.open()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border.triage-button Message
                    a(href="#3", @click="$refs.modalbook.open()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border.triage-button Page
                .button-array
                    a(href="#3", @click="$refs.modalphone.open()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border.triage-button Urgent
                    a(href="#3", @click="$refs.modalTransfer.open()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border.triage-button Transfer
        
            modal(ref="modalprovider")
                .modal__content
                    .modal__content-row
                        .modal-appointment__title
                            .title.mod--modal-appointment South Shore Urology
                    .modal__content-row(style="padding: 10px; background: darkcyan; color: white;")                       
                        span() Mon - Fri 9am - 4:30 pm
                        span(style="margin-left: 100px") 780 Main Street 
                        span(style="margin-left: 130px") Office #: 781-331-4600
                    .modal__content-row(style="padding: 10px; background: darkcyan; color: white;")                       
                        span() Lunch: 12pm - 1:15pm
                        span(style="margin-left: 110px") South Weymouth, MA 02190
                        span(style="margin-left: 40px") Fax #: 781-337-5095
                    .modal__content-row(style="padding: 10px; background: darkcyan; color: white;")                       
                        span(style="margin-left: 510px") SSH Ext: x6860
                            
                    .modal__content-row(style="margin-top: 30px")
                        span() The office representitives are unavailable at this time. Is this urgent or can I send a message to the office for you?
                    .modal__content-row(style="margin-top: 30px")
                        multiselect(
                                :options=['Office Message', 'Urgent/OnCall', '-------', 'Office Status'],
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Office Message",
                                style="margin-top: -5px"
                            ).ui-multiselect.ui-multiselect--default.inline-block
                    .modal-appointment__row
                            a(href="#3", @click.prevent="$refs.modalprovider.close();").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Ok
            modal(ref="modalTransfer")
                .modal__content
                    .modal__content-row
                        svg.ico-svg.ico-search
                            use(xlink:href="#search")
                        input(placeholder="Search Directory", v-model="search_keyword").ui-input-search
                        span().inline-present(style="margin-left: 70px; margin-right: 20px") Filter:
                        multiselect(
                            :options=["Show All", "Patient", "Provider"],
                            v-model="search_filter",
                            :searchable="false",
                            :allowEmpty="false",
                            :showLabels="false",
                            placeholder="Show All",
                            style="margin-top: -5px"
                        ).ui-multiselect.ui-multiselect--default.inline-block
                        table.appointment__table
                            tr
                                th Name
                                th Type
                                th Source
                                th Telephone
                                th Address
                                th Provider
                                th Provider Contact
                                th Provider Status
                                th Actions

                            tr(v-for="(item, index) in data", v-if="check(item)")
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name", @click.prevent="$refs.modaldetail.open();") {{item.name}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name", @click.prevent="$refs.modaldetail.open();").highlited {{item.name}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name") {{item.type}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name").highlited {{item.type}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name") {{item.source}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name").highlited {{item.source}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name") {{item.telephone}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name").highlited {{item.telephone}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name") {{item.address}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name").highlited {{item.address}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name", @click.prevent="$refs.modalprovider.open();") {{item.provider}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name", @click.prevent="$refs.modalprovider.open();").highlited {{item.provider}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name") {{item.providerContact}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name").highlited {{item.providerContact}}
                                td(v-if="isGreen(item) && $root.patientNames[$root.activePacient + 1] !== item.name").green {{item.providerStatus}}
                                td(v-if="isGreen(item) && $root.patientNames[$root.activePacient + 1] === item.name").highlited.green {{item.providerStatus}}
                                td(v-if="isRed(item) && $root.patientNames[$root.activePacient + 1] !== item.name").red {{item.providerStatus}}
                                td(v-if="isRed(item) && $root.patientNames[$root.activePacient + 1] === item.name").highlited.red {{item.providerStatus}}
                                td(v-if="isNormal(item) && $root.patientNames[$root.activePacient + 1] !== item.name") {{item.providerStatus}}
                                td(v-if="isNormal(item) && $root.patientNames[$root.activePacient + 1] === item.name").highlited {{item.providerStatus}}
                                td(v-if="$root.patientNames[$root.activePacient + 1] !== item.name").more-action
                                    .sub-popup-menu
                                        .sub-popup-menu__action
                                            svg.ico-svg.ico-svg__more
                                                use(xlink:href="#more")
                                        .sub-popup-menu__list
                                            a(href="#",).sub-popup-menu__item Transfer
                                            a(href="#", @click.prevent="showSMSWindow(item)").sub-popup-menu__item Text
                                            a(href="#",).sub-popup-menu__item Page
                                td(v-if="$root.patientNames[$root.activePacient + 1] === item.name").highlited.more-action
                                    .sub-popup-menu
                                        .sub-popup-menu__action
                                            svg.ico-svg.ico-svg__more
                                                use(xlink:href="#more")
                                        .sub-popup-menu__list
                                            a(href="#",).sub-popup-menu__item Transfer
                                            a(href="#", @click.prevent="showSMSWindow(item)").sub-popup-menu__item Text
                                            a(href="#",).sub-popup-menu__item Page
                    .modal-appointment__row
                            a(href="#3", @click="$refs.modalTransfer.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border CANCEL
            modal(ref="modaldetail")
                .modal__content
                    .modal__content-row
                        .modal-appointment__title
                            .title.mod--modal-appointment Customer Details 
                            .referral-view__top
                                .referral__detail-field
                                    span().infoname First Name  
                                    input(:value="first_name" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Last Name
                                    input(:value="last_name" readonly).infovalue
                                .referral__detail-field
                                    span().infoname MI
                                    input(:value="mi" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Location
                                    input(:value="location" readonly).infovalue

                            .referral-view__top
                                .referral__detail-field
                                    span().infoname Room #
                                    input(:value="room_no" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Bed
                                    input(:value="bed_no" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Phone
                                    input(:value="phone" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Floor Name
                                    input(:value="floor_name" readonly).infovalue

                            .referral-view__top
                                .referral__detail-field
                                    span().infoname Location Main Phone
                                    input(:value="location_phone" readonly).infovalue
                                .referral__detail-field
                                    span().infoname MR #
                                    input(:value="MRN" readonly).infovalue
                                .referral__detail-field
                                    span().infoname DOB
                                    input(:value="dob" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Town
                                    input(:value="town" readonly).infovalue

                            .referral-view__top
                                .referral__detail-field
                                    span().infoname Admission/Registeration Date
                                    input(:value="admission_date" readonly).infovalue
                                .referral__detail-field
                                    span().infoname City/Town
                                    input(:value="city" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Discharge Date
                                    input(:value="discharge_date" readonly).infovalue
                                .referral__detail-field
                                    span().infoname Attending Provider
                                    input(:value="attending_provider" readonly).infovalue
                                        
                    .modal-appointment__row
                            a(href="#3", @click.prevent="$refs.modaldetail.close();").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Ok
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
            modal(ref="modalbook")
                .modal__content
                    .modal__content-row
                        .modal__content-col

                            .modal-appointment__title
                                .title.mod--modal-appointment Send SMS

                    .modal__content-row 
                        
                            span().inline-present Provider Name:
                            span().inline-present(style="margin-left: 10px; margin-top: -10px; width: 30px") OmniCare Urology
                        
                            span().inline-present(style="margin-left: 100px") Patient Name:  Johns Jacobs
                        
                            span().inline-present(style="margin-left: 70px; margin-right: 20px") Template:
                            multiselect(
                                :options=['Contact Patient', 'Contact Agent'],
                                :searchable="false",
                                :allowEmpty="false",
                                :showLabels="false",
                                placeholder="Contact Agent",
                                style="margin-top: -5px"
                            ).ui-multiselect.ui-multiselect--default.inline-block
                    .modal-appointment__templates-messages
                        textarea.ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default.mod--sms
                            | {{sms_template}}
                    .modal__content-row
                        span(style="margin-right: 50px") Priority: 
                        .ui-checkbox(style="margin-right: 50px")
                            input#checkbox-routine(name="checkbox-routine" type="checkbox" v-model="showRoutine").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-routine') Routine
                        .ui-checkbox
                            input#checkbox-stat(name="checkbox-stat" type="checkbox" v-model="shotStat").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-stat') STAT
                    .modal__content-row(style="margin-top: 36px")
                        span(style="margin-right: 50px") Response: 
                        .ui-checkbox(style="margin-right: 30px")
                            input#checkbox-call(name="checkbox-call" type="checkbox" v-model="showCall").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-call') Please Call
                        .ui-checkbox
                            input#checkbox-fyi(name="checkbox-fyi" type="checkbox" v-model="shotFYI").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-fyi') FYI
                            
                    .modal-appointment__row
                        a(href="#3", @click.prevent="sendSMS()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Send
                        a(href="#3", @click.prevent="$refs.modalbook.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Cancel

</template>
<script>
    import modal from "../modal-component/modal.vue";
    import Multiselect from 'vue-multiselect';

    export default {
        props: ['data'],
        components: {
            modal,
            Multiselect,
        },
        data() {
            return {
                first_name: 'Johns',
                last_name: 'Jacobs',
                mi: 'N.M.I',
                location: '3453 T Ave, Fort Worth, TX 76179, USA',
                room_no: '375',
                bed_no: '12',
                phone: '+1 214 701 5489',
                floor_name: 'L4',
                location_phone: '+1 214 701 0000',
                MRN: 'MR-204-3121',
                dob: 'Jul 01, 1981',
                town: 'Texas',
                city: 'Fort Worth',
                admission_date: 'Apr 06, 1997',
                discharge_date: 'N/A',
                attending_provider: 'South Shore Urology',
                search_filter: 'Search All',
                sms_template: 'User Rajit Kumar is requesting you to contact them immediately at telephone number 41647',
                search_keyword: '',
                visible: false,
                currentMoreInfoIndex: null,
                business_segment: '',
                service_area: '',
                status: '',
                startDate: '',
                endDate: '',
                currentDirectory: null,
            }
        },
        methods: {
            open() {},
            sendSMS(){
                console.log('hey');
                let vm = this;
                const { currentDirectory } = this;


                let numbers = [ 6064250088 // Thaddeus
                                , 9723586547 // Ashvin
                                , 2142120912 // Rajit
                                , 4699555520 // CJ
                                , 9723338661 // William
                                , 2147015489 // Yuria
                                ] ;

                let baseUrl = 'https://api.tropo.com/1.0/sessions',
                    queryStart = '?action=create' ,
                    token = '&token=0fe5e1114dc4b3419a203630b366558357a0d941ad43b56fe54249227c5ea5544d379bb8ae94167d73c3e130' ,
                    dialCommand = '&numberToDial=' ,
                    msgCommand = '&msgToSend=' ;

                let msg = 'User [Agent Name] is requesting you to contact them immediately at telephone number [Finesse Number]' ;

                msg = msg.replace ( '[Agent Name]' , 'Rajit Kumar' ) ;
                msg = msg.replace ( '[Finesse Number]' , 41647 ) ;

                console . log ( msg ) ;

                const HttpClient = function() {
                    this.get = function(aUrl, aCallback) {
                        var anHttpRequest = new XMLHttpRequest();

                        anHttpRequest.onreadystatechange = function() {
                            if (anHttpRequest.readyState == 4   &&
                                anHttpRequest.status     >= 200 )
                                aCallback(anHttpRequest.responseText);
                        }

                        anHttpRequest.open( "GET", aUrl, true );
                        anHttpRequest.send( null );
                    }
                }

                var client = new HttpClient();

                for ( let i = 0, end = numbers.length ; i < end ; i++) {
                    let apiUrl = baseUrl + queryStart + token +
                                    dialCommand + numbers[i] +
                                    msgCommand + msg ;

                    client.get( apiUrl , (resultData) => { console.log ( "sent to" , numbers[i] ) });
                }

                vm.$refs.modalbook.close();

            },
            showSMSWindow(data) {
                this.currentDirectory = data;
                this.$refs.modalbook.open();
            },
            openNewWindow(url){
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                window.open(url, "CNN_WindowName", strWindowFeatures);
            },
            isRed(item) {
                return item.providerStatus === 'Not Available'
            },
            isGreen(item) {
                return item.providerStatus === 'Available'
            },
            isNormal(item) {
                return item.providerStatus !== 'Not Available' && item.providerStatus !== 'Available'
            },
            check(item){
                const { search_keyword } = this;
                if (this.search_filter == 'Patient' && item.type != 'Patient')
                    return false;
                if (this.search_filter == 'Provider' && item.type != 'Provider')
                    return false;
                return (
                    search_keyword=='' ||
                    item.name.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 ||
                    item.type.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 ||
                    item.source.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 ||
                    item.telephone.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 ||
                    item.address.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 ||
                    item.provider.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 ||
                    item.providerContact.toLowerCase().indexOf(search_keyword.toLowerCase()) >= 0 );
            },
            openModalInfo(index){
                this.currentMoreInfoIndex = index;
                this.$refs.modalInfo.open();
            }
        },
        computed: {
            sunday: function()
            {
                var d = new Date();
                var day = d.getDay(),
                    diff = d.getDate() - day + (day == 0 ? -6:1) - 1; // adjust when day is sunday
                    //{{new Date().getDate()}}/{{ new Date().getMonth() + 1 }}/{{new Date().getFullYear()}}
                const _sunday =  new Date(d.setDate(diff));
                return _sunday.getDate() + '/' + (_sunday.getMonth() + 1) + '/' + _sunday.getFullYear()
            },
            saturday: function()
            {
                var d = new Date();
                var day = d.getDay(),
                    diff = d.getDate() - day + (day == 0 ? -6:1) + 5; // adjust when day is sunday
                const _saturday =  new Date(d.setDate(diff));
                return _saturday.getDate() + '/' + (_saturday.getMonth() + 1) + '/' + _saturday.getFullYear()
            }
            
        },
        mounted() {
            this.$store.dispatch('setReferral', this.$root._data.Referrals);
            console.log('$Root', this.$root);
        },
        beforeDestroy() {},
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';
    .menu-button {
        font-size: 12px;
        margin: 5px;
        &.grey {
            background: rgb(237,237,237);
            color: black;
            border-color: grey;
            :hover {
                background: rgb(237,237,237);
            }
        }

        &.red {
            background: red;
            color: white;
            border-color: grey;
        }

        &.green {
            background: green;
            color: white;
            border-color: grey;
        }
        &.yellow {
            background: yellow;
            color: black;
            border-color: grey;
        }
        &.dark-grey {
            background: rgb(124,124,124);
            color: white;
            border-color: grey;
        }
        &.blue {
            color: white;
            border-color: grey;
        }
    }



    .highlited {
        background: lightblue;
    }
    .inline-present {
        display: inline-block !important;
        max-width: 250px;
    }
	.ui-input-search {
		font-size: em(15);
        width: em(400);
        height: em(40);
    }
    
    .ico-search {
        margin-right: em(10);
        margin-top: em(0);
        width: em(30);
        height: em(30);
    }

    .appointment {
        margin-bottom: em(80);
    }

    .appointment__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: em(60);
    }

    .appointment__top-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        .ico-svg__filter-results-button {
            margin-right: em(20);
            width: em(18px);
            height: em(12px);
            use {
                fill: #000;
            }
        }
    }

    .appointment__top-data {
        display: flex;
        justify-content: center;
        align-items: center;
        .ico-svg__calendar {
            margin-right: em(20);
            width: em(18px);
            height: em(20px);
            use {
                fill: #000;
            }
        }
    }

    .appointment__table {
        width: 100%;
        border-spacing: 0;

        td, th {
            padding: em(14 8);
            text-align: left;
        }
        th {
            border-bottom: 1px solid #ebebeb;
        }
    }

</style>
