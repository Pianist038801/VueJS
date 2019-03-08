<template lang="pug">
    div.journey-map
        h2.title.mod--journey Customer Journey Map

        .journey-map-selects
            multiselect(
            :options="$root.journeyOptions",
            :searchable="false",
            :allowEmpty="false",
            :showLabels="false",
            placeholder="Choise an option",
            track-by="name",
            label="name",
            v-model="journey_select",
            @input="clickJourney"
            ).ui-multiselect.ui-multiselect--border

        .journey-map__line
            img(:src="info.PhotoUrl").journey-map__line-userpic
            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id==3")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Call type</b>: Appointments
                        .tooltip__note <b>Date</b>: Mar 8, 2019
                        .tooltip__note <b>ANI</b>: 19723586547
                        .tooltip__note <b>Self-service</b>:  Cancel Appointment
                        .tooltip__note <b>Self-service</b>:  Reschedule Appointment
                        .tooltip__note <b>No Survey offered</b>

                svg.ico-svg.ico-svg__phone
                    use(xlink:href="#phone")
            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id!=3 && journey_select.type!=''")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Call type</b>: Appointments
                        .tooltip__note <b>Date/Time</b>: {{journey_select.name}}
                        .tooltip__note <b>Duration</b>:  7 min
                        .tooltip__note <b>ANI</b>:  {{info.PhoneNumber}}
                        .tooltip__note <b>Agent ID</b>:  749936
                        .tooltip__note <b>Agent Name</b>:  James King
                        .tooltip__note <b>Survey Score</b>: 3

                svg.ico-svg.ico-svg__phone
                    use(xlink:href="#phone")
            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id==3")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Call type</b>: Appointments
                        .tooltip__note <b>Date</b>: Mar 8, 2019
                        .tooltip__note <b>Customer</b>: 19723586547
                        .tooltip__note <b>Self-service</b>:  Parking instructions
                        .tooltip__note <b>Self-service</b>:  Directions
                        .tooltip__note <b>No Survey offered</b>
                        .tooltip__note.history-view(v-if="$root.activePacient===3", @click="$refs.modalbook.open()") <b>Expand SMS History</b>
                svg.ico-svg.ico-svg__mail
                    use(xlink:href="#mail")
            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id!=3 && journey_select.type!=''")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Call type</b>: Inbound
                        .tooltip__note <b>Date/Time</b>: {{journey_select.name}}
                        .tooltip__note <b>SMS</b>:  Appintment Confimation
                        .tooltip__note <b>Customet Action</b>: Customer clicked yes
                        .tooltip__note <b>SMS Outcome</b>:  Confirmed Appointment
                        .tooltip__note <b>Agent ID</b>:  749936
                        .tooltip__note <b>Agent Name</b>:  James King

                svg.ico-svg.ico-svg__mail
                    use(xlink:href="#mail")

            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id==3")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Call type</b>: Appointments
                        .tooltip__note <b>Date</b>: Mar 8, 2019
                        .tooltip__note <b>Customer</b>: 19723586547
                        .tooltip__note <b>Agent assisted</b>
                        .tooltip__note <b>No Survey offered</b>

                svg.ico-svg.ico-svg__mail
                    use(xlink:href="#message")
            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id==3")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Call type</b>: Appointments
                        .tooltip__note <b>Date</b>: Mar 8, 2019
                        .tooltip__note <b>Customer</b>: 19723586547
                        .tooltip__note <b>Self-service</b>: Dietary instructions
                        .tooltip__note <b>No Survey offered</b>

                svg.ico-svg.ico-svg__mail
                    use(xlink:href="#couple")
            .journey-map__line-item.wrapp-tooltip(v-if="journey_select.id!=3 && journey_select.type!=''")
                .tooltip
                    .tooltip__in
                        .tooltip__note <b>Type</b>: Check in
                        .tooltip__note <b>Check in Time</b>: 3:00pm
                        .tooltip__note <b>Check in Date</b>: {{this.nextDay}}
                        .tooltip__note <b>Physician Name</b>: Mark Williams, MD
                        .tooltip__note <b>Department</b>:
                        .tooltip__note <b>Encounter Created By</b>: Dr. Mark Williams
                        .tooltip__note <b>Encounter Details</b>: Office/OP Visit (15min) XR (5 min)
                        .tooltip__note <b>Check out time</b>:  3:30pm

                svg.ico-svg.ico-svg__hospital
                    use(xlink:href="#hospital")

            .journey-map__line-item-end
        modal(ref="modalbook")
            .modal__content

                .modal__content-row
                    .modal__content-col

                        .modal-appointment__title
                            .title.mod--modal-appointment Mar 8th 2019: 11:08 AM

 
                .modal-appointment__remind
                    teatarea() 
                        div() SMS: Hi, Opal. How are you feeling this week? Do you have anything you would like to talk to your OBGYN?
                        br()
                        div() Opal: no, I am not feeling well
                        br()
                        div() SMS: Okay, would you like to speak to a nurse?
                        br()
                        div() Opal: yes
                        br()
                        div() SMS: Okay, let me get you connected to a nurse right now.


                .modal-appointment__row
                    a(href="#3", @click="$refs.modalbook.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary Cancel 

</template>
<script>

    import Multiselect from 'vue-multiselect';
    import modal from "../modal-component/modal.vue";
    export default {
        props: ['info'],
        components: {
            Multiselect,
            modal,
        },
        watch: {
            journey_select(to){
                console.log('TO=',to);
            }
        },
        data() {
            return {
                visible: false,
                journey_select: {
                    name: 'Select Appointment',
                    type: ''
                },
                nextDay: '',
            }
        },
        methods: {
            clickJourney(data) {
                let date = new Date();
                date.setDate(date.getDate() - 40 + this.$root.activePacient * 5 + data.id * 9 + 1);
                this.nextDay = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

            },
            open() {
            },
        },
         mounted() {
        },
        beforeDestroy() {
        },
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

    .journey-map-selects {
        max-width: em(400);
        margin-bottom: em(30);
    }

    .title.mod--journey {
        margin-bottom: em(40, 24);
    }

    .journey-map__line {
        display: flex;
        width: 50%;
        flex-shrink: 0;
        position: relative;
        z-index: 10;
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: em(10);
            right: 0;
            height: em(3px);
            background-color: rgba(#d7d7d7, .5);
            z-index: -1;
        }
    }

    .journey-map__line-userpic {
        width: em(54);
        height: em(54);
        vertical-align: top;
        display: inline-block;
        border-radius: 50%;
    }

    .journey-map__line-item {
        margin-left: em(30);
        border-radius: 50%;
        width: em(60px);
        height: em(60px);
        border: em(5px) solid #ffffff;
        background-color: #c3c3c3;
        position: relative;
        @extend %tr-all;
        &:hover {
            background-color: #17b8ea;
        }
        .ico-svg {
            use {
                fill: #fff;
            }
            left: 50%;
            top: 50%;
            position: absolute;
        }
        .ico-svg__phone {
            width: em(20px);
            height: em(20px);
            margin: em(-10 0 0 -10);
        }
        .ico-svg__mail {
            width: em(20px);
            height: em(16px);
            margin: em(-8 0 0 -10);
        }
        .ico-svg__message {
            width: em(20px);
            height: em(20px);
            margin: em(-10 0 0 -10);
        }
        .ico-svg__hospital {
            width: em(30px);
            height: em(30px);
            margin: em(-15 0 0 -15);
        }

    }

    .journey-map__line-item-end {
        width: em(54px);
        height: em(54px);
        border: 2px solid #d7d7d7;
        background-color: #ffffff;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 50%;
    }

    .tooltip {
        position: absolute;
        bottom: em(64);
        left: 0;
        display: none;

        width: em(440px);
        filter: drop-shadow(rgba(0, 0, 0, 0.1) 1px 1px 10px);
        background-color: #ffffff;
        border-radius: em(6);

        @include triangle(down, 20px 12px, $color: #fff);

        &:after {
            position: absolute;
            bottom: em(-12);
            left: em(16);
        }
    }
    .tooltip__in {
        padding: em(15 22);
        min-height: em(80);
    }
    .tooltip__info {
        color: rgba(#1f1f1f, .5);
        margin-bottom: em(6);
    }
    .tooltip__note {
        color: #1f1f1f;
    }

    .wrapp-tooltip {
        &:hover {
            .tooltip {
                display: block;
            }
        }
    }

</style>
