<template lang="pug">
    .appointment
        .appointment__top
            .appointment__top-filter
                svg.ico-svg.ico-svg__filter-results-button
                    use(xlink:href="#filter-results-button")
                span All Appointments
            
        table.appointment__table
            tr
                th Date
                th Department
                th Appt. Time
                th Provider
                th Visit Type
                th Reason for Visit
                th Actions
            
            tr(v-for="(item, index) in patients.PastAppointments")
                td.past {{ [item.Date, ["M-DD-YYYY HH:mm:ss","D-MMM-YYYY HH:mm:ss"]] | moment("MMM DD, YYYY")}}
                td.past {{item.Department}}
                td.past {{ [ item.Time, "HH:mm:ss" ]  | moment("h:mm a") }}
                td.past {{ item.Provider }}
                td.past {{ item.VisitType }}
                td.past {{ item.VisitReason }}
                td.more-action.past
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list
                            a(href="#3", @click.prevent="openModalInfo(patients.PastAppointments[index])").sub-popup-menu__item More details
                            a(href="#3").sub-popup-menu__item Reschedule Appointment
                            a(href="#3").sub-popup-menu__item Send Reminder
                            a(href="#3", @click.prevent="openNewWindow($root.epicAddress)").sub-popup-menu__item Show in EHR
                            a(href="#3", @click.prevent="showModal(patients.PastAppointments[index])").sub-popup-menu__item Show Details
            tr(v-for="(item, index) in patients.CurrentAppointments")
                td {{ [item.Date, ["M-DD-YYYY HH:mm:ss","D-MMM-YYYY HH:mm:ss"]] | moment("MMM DD, YYYY")}}
                td {{item.Department}}
                td {{ [ item.Time, "HH:mm:ss" ]  | moment("h:mm a") }}
                td {{ item.Provider }}
                td {{ item.VisitType }}
                td {{ item.VisitReason }}
                td.more-action
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list
                            a(href="#3", @click.prevent="openModalInfo(patients.CurrentAppointments[index])").sub-popup-menu__item More details
                            a(href="#3").sub-popup-menu__item Reschedule Appointment
                            a(href="#3").sub-popup-menu__item Cancel Appointment
                            a(href="#3").sub-popup-menu__item Send Reminder
                            a(href="#3", @click.prevent="openNewWindow($root.epicAddress)").sub-popup-menu__item Show in EHR
                            a(href="#3", @click.prevent="showModal(patients.CurrentAppointments[index])").sub-popup-menu__item Show Details

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
                            label.ui-checkbox__label(for='checkbox-epic') Add Notes to EHR
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
