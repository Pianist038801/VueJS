<template lang="pug">
    .content
        .content__top-line
            h1.title.top Customer Context
        div.customer__context__info
            div Previous Context:
            div April 28, 2019: Voice call  ->  In Trip  ->  routed to agent John
            div April 27, 2019: Voice call  ->  Change Trip  ->  routed to agent John
        .ccase-managment__top
            span().infoname Notes
        .ccase-managment__top__bottom
            textarea(:value="$root._data.callerNotes" readonly).full-width
        .content__top-line
            h1.title Trips
        table.appointment__table
            tr
                th TripID
                th Start date / time
                th End date / time
                th Air Travel
                th Rail Travel
                th Car Rental
                th Hotel Room
            
            tr(v-for="(item, index) in $store.state.trips")
                td.past {{ item.tripId[0] }}
                td.past {{ item.startDate[0] }} - {{ item.startTime[0] }} 
                td.past {{ item.endDate[0] }} - {{ item.endTime[0] }} 
                td.past {{ item.airTravel[0] }}
                td.past {{ item.railTravel[0] }}
                td.past {{ item.carRental[0] }}
                td.past {{ item.hotelRoom[0] }}
                td.more-action.past
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list                            
                            a(href="#3").sub-popup-menu__item Cancel
                            a(href="#3").sub-popup-menu__item New
                            a(href="#3").sub-popup-menu__item Edit
                            a(href="#3").sub-popup-menu__item Send Email
                            a(href="#3").sub-popup-menu__item Screen Pop
                            
        .content__top-line
            h1.title Flights
        table.appointment__table
            tr
                th TripID
                th Start date / time
                th End date / time
                th Flight ID
                th Airlines Code
                th Flight No
                th Departure
                th Arrival
                th Status
                th FareClass
                th Seat
                th Price

            tr(v-for="(item, ind) in $store.state.flightInfo")    
                td.past {{ item.tripId[0] }}
                td.past {{ item.startDate[0] }} - {{ item.startTime[0] }} 
                td.past {{ item.endDate[0] }} - {{ item.endTime[0] }} 
                td.past {{ item.flightId[0] }}
                td.past {{ item.airlineCode[0] }}
                td.past {{ item.flightNo[0] }}
                td.past {{ item.depart[0] }}
                td.past {{ item.arrive[0] }}
                td.past {{ item.status[0] }}
                td.past {{ item.fareClass[0] }}
                td.past {{ item.seat[0] }}
                td.past {{ item.price[0] }}

                td.more-action.past
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list                            
                            a(href="#3").sub-popup-menu__item Cancel
                            a(href="#3").sub-popup-menu__item New
                            a(href="#3").sub-popup-menu__item Edit
                            a(href="#3").sub-popup-menu__item Send Email
                            a(href="#3").sub-popup-menu__item Screen Pop
        
        .content__top-line
            h1.title Car Rentals
        table.appointment__table
            tr
                th TripID
                th Start date / time
                th End date / time
                th Reservation Id
                th Car Chain
                th Car Class
                th Price
            
            tr(v-for="(item, index) in $store.state.trips", v-if="item.TripDetail[0].CarRentalInfo")
                td.past {{ item.TripDetail[0].CarRentalInfo[0].tripId[0] }}
                td.past {{ item.TripDetail[0].CarRentalInfo[0].startDate[0] }} - {{ item.TripDetail[0].CarRentalInfo[0].startTime[0] }} 
                td.past {{ item.TripDetail[0].CarRentalInfo[0].endDate[0] }} - {{ item.TripDetail[0].CarRentalInfo[0].endTime[0] }} 
                td.past {{ item.TripDetail[0].CarRentalInfo[0].reservationId[0] }}
                td.past {{ item.TripDetail[0].CarRentalInfo[0].carChain[0] }}
                td.past {{ item.TripDetail[0].CarRentalInfo[0].carClass[0] }}
                td.past {{ item.TripDetail[0].CarRentalInfo[0].price[0] }}
                td.more-action.past
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list                            
                            a(href="#3").sub-popup-menu__item Cancel
                            a(href="#3").sub-popup-menu__item New
                            a(href="#3").sub-popup-menu__item Edit
                            a(href="#3").sub-popup-menu__item Send Email
                            a(href="#3").sub-popup-menu__item Screen Pop

        .content__top-line
            h1.title Hotel
        table.appointment__table
            tr
                th TripID
                th Start date / time
                th End date / time
                th Reservation Id
                th Hotel Chain
                th Hotel Room Class
                th Price
            
            tr(v-for="(item, index) in $store.state.trips", v-if="item.TripDetail[0].HotelInfo")
                td.past {{ item.TripDetail[0].HotelInfo[0].tripId[0] }}
                td.past {{ item.TripDetail[0].HotelInfo[0].startDate[0] }} - {{ item.TripDetail[0].HotelInfo[0].startTime[0] }} 
                td.past {{ item.TripDetail[0].HotelInfo[0].endDate[0] }} - {{ item.TripDetail[0].HotelInfo[0].endTime[0] }} 
                td.past {{ item.TripDetail[0].HotelInfo[0].reservationId[0] }}
                td.past {{ item.TripDetail[0].HotelInfo[0].hotelChain[0] }}
                td.past {{ item.TripDetail[0].HotelInfo[0].hotelRoomClass[0] }}
                td.past {{ item.TripDetail[0].HotelInfo[0].price[0] }}
                td.more-action.past
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list                            
                            a(href="#3").sub-popup-menu__item Cancel
                            a(href="#3").sub-popup-menu__item New
                            a(href="#3").sub-popup-menu__item Edit
                            a(href="#3").sub-popup-menu__item Send Email
                            a(href="#3").sub-popup-menu__item Screen Pop

     
        modal(ref="modalInfo")
            .modal__content(v-if="currentAppointment !== null")

                .modal__content-row
                    .modal__content-col

                        .modal-appointment__title
                            .title.mod--modal-appointment Appointment details

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__clock
                                    use(xlink:href="#clock")
                                | Appointment time: <b> {{ [currentAppointment.Time, "HH:mm:ss"] | moment("h:mm a") }}</b>

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__calendar
                                    use(xlink:href="#calendar")
                                | Appointment date: <b>{{ [currentAppointment.Date, ["M-DD-YYYY HH:mm:ss","D-MMM-YYYY HH:mm:ss"]] | moment("MMM DD, YYYY") }}</b>

                            .modal-appointment__info
                                | Hospital/clinic name: <b> {{currentAppointment.Department}}</b>

                            .modal-appointment__info
                                | Appointment type: <b>{{currentAppointment.VisitType}}</b>

                            .modal-appointment__info
                                | Reason for visit: <b>{{currentAppointment.VisitReason}}</b>
                            .modal-appointment__info
                                | Interpreter required: <b>{{currentAppointment['Appointment Details']['Interpreter Required']}}</b>

                            .modal-appointment__info(v-if="currentAppointment['Appointment Details']['Interpreter Language'] !== 'None'")
                                .modal-appointment__lang-ico
                                    svg.ico-svg.ico-svg__lang
                                        use(xlink:href="#lang")
                                | Interpreter required: <b>{{currentAppointment['Appointment Details']['Interpreter Language']}}</b>

                    .modal__content-col
                        .modal-appointment__map
                            gmap-map(
                            :center="{lat: 32.9448268, lng: -96.64587949999998}",
                            :zoom="14",
                            style="width: 100%; height: 300px"
                            )
                                gmap-marker(
                                :key="1",
                                :position="{lat: 32.9448268, lng: -96.64587949999998}",
                                )

        modal(ref="modalbook")
            .modal__content(v-if="currentAppointment !== null")

                .modal__content-row
                    .modal__content-col

                        .modal-appointment__title
                            .title.mod--modal-appointment Details

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__calendar
                                    use(xlink:href="#calendar")
                                | {{ [currentAppointment.Date, ["M-DD-YYYY HH:mm:ss","D-MMM-YYYY HH:mm:ss"]] | moment("MMM DD, YYYY")}} | {{ [ currentAppointment.Time, "HH:mm:ss" ]  | moment("h:mm a") }}

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__location
                                    use(xlink:href="#location")
                                | Schedule appointment with {{ currentAppointment.Provider }}

                            .modal-appointment__info
                                .modal-appointment__lang-ico
                                    svg.ico-svg.ico-svg__lang
                                        use(xlink:href="#lang")
                                .modal-appointment__lang-main
                                    .modal-appointment__lang-title Language Interpreter Required
                                    .modal-appointment__lang-toggle(@click.prevent="disableSelectLang=!disableSelectLang", :class="{'state--active': !disableSelectLang}")

                                .modal-appointment__info-lang
                                    multiselect(
                                    v-model="langSelected",
                                    :options="bookNowData.InterpreterLanguages",
                                    @input="",
                                    :searchable="false",
                                    :allowEmpty="false",
                                    :showLabels="false",
                                    :disabled="disableSelectLang",
                                    placeholder="Select Language"
                                    ).ui-multiselect.ui-multiselect--default

                    .modal__content-col
                        .modal-appointment__map
                            gmap-map(
                            :center="{lat: 32.9448268, lng: -96.64587949999998}",
                            :zoom="14",
                            style="width: 100%; height: 100px"
                            )
                                gmap-marker(
                                :key="1",
                                :position="{lat: 32.9448268, lng: -96.64587949999998}",
                                )

                .modal-appointment__templates-messages
                    .modal-appointment__templates-checkbox
                        .ui-checkbox
                            input#checkbox-epic(name="checkbox-epic" type="checkbox" v-model="showEpicTemplate").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-epic') Add Notes to EPIC
                    transition(name="fade")
                        textarea(v-if="showEpicTemplate").ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default

                .modal-appointment__remind
                    .ui-checkbox
                        input#checkbox-waitlist(name="checkbox-waitlist" type="checkbox" v-model="showWaitList").ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-waitlist') Waitlist Enabled

                .modal-appointment__reason
                    | Reason for visit

                .modal-appointment__templates-messages
                    .modal-appointment__templates-checkbox
                        .ui-checkbox
                            input#checkbox-sms(name="checkbox-sms" type="checkbox" v-model="showSmsTemplate").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-sms') Sent Text Confirmation
                    transition(name="fade")
                        textarea(v-if="showSmsTemplate").ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default.mod--sms
                            | {{bookNowData.SmsConfirmTemplate}}

                .modal-appointment__templates-messages

                    .modal-appointment__templates-checkbox
                        .ui-checkbox
                            input#checkbox-email(name="checkbox-email" type="checkbox" v-model="showEmailTemplate").ui-checkbox__input
                            label.ui-checkbox__label(for='checkbox-email') Sent Email Confirmation
                    transition(name="fade")
                        textarea(v-if="showEmailTemplate").ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default
                            | {{bookNowData.EmailConfirmTemplate}}


                .modal-appointment__remind
                    .ui-checkbox
                        input#checkbox-smsremind(name="checkbox-smsremind" type="checkbox" v-model="showSmsRemind").ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-smsremind') Send SMS reminder
                    transition(name="fade")
                        .modal-appointment__remind-days(v-if="showSmsRemind")
                            input(type="text", value="2").ui-input.ui-input--skin-default.ui-input--theme-default
                            | days before appointment.

                .modal-appointment__remind
                    .ui-checkbox
                        input#checkbox-voiceremind(name="checkbox-voiceremind" type="checkbox" v-model="showVoiceRemind").ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-voiceremind') Send Voice reminder


                .modal-appointment__row
                    a(href="#3", @click.prevent="$refs.modalbook.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border OK



</template>
<script>
    import modal from "../modal-component/modal.vue";
    import Multiselect from 'vue-multiselect';

    export default {
        props: ['patients'],
        components: {
            modal,
            Multiselect
        },
        data() {
            return {
                showCalendar: false,
                departmentSelect: '',
                facilitySelect: '',
                providerSelect: '',
                physicianSelect: '',
                customFormatter: 'd MMMM yyyy',
                langSelected: 'None',
                disableSelectLang: true,
                date: '',
                showSmsTemplate: false,
                showEpicTemplate: false,
                showEmailTemplate: false,
                showSmsRemind: false,

                calendarClick: false,
                visible: false,
                currentAppointment: null,
                bookNowData: this.$root._data.BookNowData
            }
        },
        methods: {
            open() {},
            showModal(data) {
                this.currentAppointment = data;
                this.$refs.modalbook.open();
            },
            openNewWindow(url){
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                window.open(url, "CNN_WindowName", strWindowFeatures);

            },

            openModalInfo(data){
                this.currentAppointment = data;
                this.$refs.modalInfo.open();
            }
        },
        mounted() {},
        beforeDestroy() {},
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

    h1.title.top {
        margin-top: 0;

    }

    h1.title {
        margin-bottom: 0;
        margin-top: 50px;
    }

    .customer__context__info {
        font-size: 20px;
        color: white;
        background: rgb(89, 181, 228);
        border-radius: 20px;
        padding-left: 30px;
        line-height: 40px;
        margin-bottom: 20px;
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
