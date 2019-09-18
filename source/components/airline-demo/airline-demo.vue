<template lang="pug">
    .content
        span.count-card.one No. of calls today: 1
        span.count-card.two Total No. of calls: 1
        span.count-card.three No. of Trips: {{$store.state.trips.length}}
        span.count-card.four No. of Flights: {{$store.state.flightInfo.length}}
        span.count-card.five No. of Hotel: {{$store.state.trips.filter(item => item.TripDetail[0].HotelInfo).length}}
        span.count-card.six No. of Rental: {{$store.state.trips.filter(item => item.TripDetail[0].CarRentalInfo).length}}
        div(style="height: 30px")
        .content__top-line
            h1.title.top Customer Context
        div.context__container
            table.appointment__table
                tr
                    th.context-cell.no No
                    th.context-cell.date-time DateTime
                    th.context-cell.context Context
                tr(v-for="(item, index) in $store.state.contexts")
                    td.context-cell.no {{index + 1}}
                    td.context-cell.date-time {{item.DateTime[0]}}
                    td.context-cell.context {{item.Context[0]}}
        .ccase-managment__top
            span().infoname Notes
        .ccase-managment__top__bottom
            textarea(v-model="newContext").full-width
        a(href="#3", @click="addContext").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border.float-right Save
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
                            a(href="#3", @click.prevent="sendEmail(item.tripId[0])").sub-popup-menu__item Send Email
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
                            a(href="#3", @click.prevent="sendEmail(item.tripId[0])").sub-popup-menu__item Send Email
                            a(href="#3", @click.prevent="showMap(item.depart[0], item.arrive[0])").sub-popup-menu__item Show Map
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
                            a(href="#3", @click.prevent="sendEmail(item.TripDetail[0].CarRentalInfo[0].tripId[0])").sub-popup-menu__item Send Email
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
                            a(href="#3", @click.prevent="sendEmail(item.TripDetail[0].HotelInfo[0].tripId[0])").sub-popup-menu__item Send Email
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
        modal(ref="modalMap")
            .modal__content()

                .modal__content-row
                    gmap-map(
                    :center="departureLocation",
                    :zoom="2",
                    style="width: 100%; height: 300px"
                    )
                        gmap-marker(
                        :key="1",
                        :position="departureLocation",
                        )
                        gmap-marker(
                        :key="2",
                        :position="arriveLocation",
                        )
                .modal-appointment__row
                    a(href="#3", @click.prevent="$refs.modalMap.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border OK
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
    import axios from 'axios';
    var parseString = require('xml2js').parseString;

    export default {
        props: ['patients'],
        components: {
            modal,
            Multiselect
        },
        data() {
            return {
                newContext: '',
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
                bookNowData: this.$root._data.BookNowData,
                departure: 'dep',
                departureLocation: {lat: 31.9448268, lng: -95.64587949999998},
                arriveLocation: {lat: 30.9448268, lng: -95.64587949999998},
                arrive: 'arr',
            }
        },
        methods: {
            sendEmail(tripId) {
                const url = 'http://198.18.134.28:8080/KnowMe/customer?type=itinerary&ani=' + this.$root.$data.currentCustomerId + '&tripid=' + tripId;
                axios({method: 'get',
                    url,
                    responseType: 'xml',
                })
                .then(function(response) {
                    if(response.data.error){
                    }
                    else{
                        alert('Email is successfuly sent');
                    }
                })
            },
            getLocationFromAddress(address) {
                switch(address) {
                    case 'Dallas Texas':
                        return {
                            lat: 32.776655,
                            lng: -96.796989
                        };
                    case 'New York New York':
                        return {
                            lat: 36.102371,
                            lng: -115.174553,
                        }
                    case 'London England':
                        return {
                            lat: 51.507351,
                            lng: -0.127758
                        };
                    case 'San Jose California':
                        return {
                            lat: 37.334789,
                            lng: -121.888138,
                        }
                    case 'Charlotte North Carolina':
                        return {
                            lat: 35.223789,
                            lng: -80.841141,
                        }
                    case 'Delhi India':
                        return {
                            lat: 28.632429,
                            lng: 77.218788,
                        } 
                }
            },
            showMap(departure, arrival) {
                this.$refs.modalMap.open();
                this.departure = departure;
                this.arrival = arrival;
                this.departureLocation = this.getLocationFromAddress(departure);
                this.arriveLocation = this.getLocationFromAddress(arrival);
   

            },
            addContext() {
                const contextValue = this.newContext.replace(' ', '%20');
                const vm = this;
                const url = 'http://198.18.134.28:8080/ContextServlet/context?type=insertContext&ani=' + this.$root.$data.currentCustomerId + '&callguid=45B2FD800001000000048CCB038512C6&DNIS=9199945256&context=' + contextValue;
                axios({method: 'get',
                    url,
                    responseType: 'xml',
                })
                .then(function(response) {
                    if(response.data.error){
                    }
                    else{
                        vm.getContexts();
                    }
                })
            },
            getContexts() {
                const vm = this;
                axios({method: 'get',
                    url: 'http://198.18.134.28:8080/ContextServlet/context?type=selectAni&ani=' + this.$root.$data.currentCustomerId + '&sort=DESC',
                    responseType: 'xml',
                })
                .then(function(response) {
                    if(response.data.error){
                    }
                    else{
                        parseString(response.data, function(err, rst) {
                            vm.$store.dispatch('setContexts', rst.root.row);
                        });
                    }
                })
            },
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

    .count-card {
        border-radius: 30px;
        border: solid 5px pink;
        padding: 20px;
        margin-right: 30px;
        &.one {
            border-color: pink;
        }
        &.two {
            border-color: cyan;
        }
        &.three {
            border-color: brown;
        }
        &.four {
            border-color: navy;
        }
        &.five {
            border-color: magenta;
        }
        &.six {
            border-color: orchid;
        }

    }

    .context-cell {
        
        &.no {
            text-align: center;
        }
        &.date-time {
            
            width: 25%;
            text-align: center;
        
        }
        &.context {
            
            width: 75%;
            text-align: center;
        
        }
    }
    .float-right {
        float: right;
    }

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
        padding: 30px;
        line-height: 40px;
        margin-bottom: 20px;
        overflow: scroll;
        height: 200px;
        

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

    .appointment__table__airline {
        width: 100%;
        border-spacing: 0;
        overflow: auto;
        height: 50px;
        td, th {
            padding: em(14 8);
            text-align: left;
        }
        th {
            border-bottom: 1px solid #ebebeb;
        }
    }

    .context__container {
        max-height: 300px;
        overflow: auto;
        border: solid 1px grey;
        margin-bottom: 30px;
    }
</style>