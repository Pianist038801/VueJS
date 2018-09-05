<template lang="pug">
    .appointment
        .appointment__top
            .appointment__top-filter
                svg.ico-svg.ico-svg__filter-results-button
                    use(xlink:href="#filter-results-button")
                span All referrals
            input(v-model="business_segment", placeholder='Business Segment')
            input(v-model="service_area", placeholder='Service Area')
            input(v-model="status", placeholder='Status')
            input(v-model="startDate", placeholder='Start Date')
            input(v-model="endDate", placeholder='End Date')
            .appointment__top-data
                svg.ico-svg.ico-svg__calendar
                    use(xlink:href="#calendar")
                // span {{["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()]}} {{new Date().getDate()}}, {{new Date().getFullYear()}}
                // span {{new Date().getDate()}}/{{ new Date().getMonth() + 1 }}/{{new Date().getFullYear()}}
                span {{sunday}} - {{saturday}}
        table.appointment__table
            tr
                th Ref ID
                th Patient ID
                th Patient Name
                th Referred By (Provider)
                th Referred To (Provider)
                th Referral Type
                th Referred Status
                th Business Segment
                th Service Area
                th Referral Auth Start Date
                th Referral Auth End Date
                th Actions
            tr(v-for="(item, index) in this.$store.state.referrals", v-if="check(item)")
                td {{item.refID}}
                td {{item.patientID}}
                td {{item.patientName}}
                td {{item.referredBy}}
                td {{item.referredTo}}
                td {{item.referralType}}
                td {{item.referredStatus}}
                td {{item.businessSegment}}
                td {{item.serviceArea}}
                td {{item.startDate}}
                td {{item.endDate}}
                td.more-action
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list
                            a(href="#3", @click.prevent="openNewWindow($root.epicAddress)").sub-popup-menu__item Show in EPIC
                            a(href="#3", @click.prevent="$root.showDetailReferral(index)").sub-popup-menu__item Show Details
                            a(href="#3", @click.prevent="$root.showUpdateReferral(index)").sub-popup-menu__item Update

        modal(ref="modalInfo")
            .modal__content(v-if="currentMoreInfoIndex !== null")

                .modal__content-row
                    .modal__content-col

                        .modal-appointment__title
                            .title.mod--modal-appointment Appointment details

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__clock
                                    use(xlink:href="#clock")
                                | Appointment time: <b> {{ [patients.PastAppointments[currentMoreInfoIndex].Time, "HH:mm:ss"] | moment("h:mm a") }}</b>

                            .modal-appointment__info
                                svg.ico-svg.ico-svg__calendar
                                    use(xlink:href="#calendar")
                                | Appointment date: <b>{{ [patients.PastAppointments[currentMoreInfoIndex].Date, ["M-DD-YYYY HH:mm:ss","D-MMM-YYYY HH:mm:ss"]] | moment("MMM DD, YYYY") }}</b>

                            .modal-appointment__info
                                | Hospital/clinic name: <b> {{patients.PastAppointments[currentMoreInfoIndex].Department}}</b>

                            .modal-appointment__info
                                | Appointment type: <b>{{patients.PastAppointments[currentMoreInfoIndex].VisitType}}</b>

                            .modal-appointment__info
                                | Reason for visit: <b>{{patients.PastAppointments[currentMoreInfoIndex].VisitReason}}</b>
                            .modal-appointment__info
                                | Interpreter required: <b>{{patients.PastAppointments[currentMoreInfoIndex]['Appointment Details']['Interpreter Required']}}</b>

                            .modal-appointment__info(v-if="patients.PastAppointments[currentMoreInfoIndex]['Appointment Details']['Interpreter Language'] !== 'None'")
                                .modal-appointment__lang-ico
                                    svg.ico-svg.ico-svg__lang
                                        use(xlink:href="#lang")
                                | Interpreter required: <b>{{patients.PastAppointments[currentMoreInfoIndex]['Appointment Details']['Interpreter Language']}}</b>

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



</template>
<script>
    import modal from "../modal-component/modal.vue";

    export default {
        props: ['referrals'],
        components: {
            modal
        },
        data() {
            return {
                visible: false,
                currentMoreInfoIndex: null,
                business_segment: '',
                service_area: '',
                status: '',
                startDate: '',
                endDate: '',
            }
        },
        methods: {
            open() {},

            openNewWindow(url){
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                window.open(url, "CNN_WindowName", strWindowFeatures);

            },
            check(item){
                if(this.business_segment!='' && item.businessSegment.indexOf(this.business_segment) < 0) return false;
                if(this.service_area!='' && item.serviceArea.indexOf(this.service_area) < 0) return false;
                if(this.status!='' && item.referredStatus.indexOf(this.status) < 0) return false;    
                if(this.startDate!='' && item.startDate.indexOf(this.startDate) < 0) return false;
                if(this.endDate!='' && item.endDate.indexOf(this.endDate) < 0) return false;
                return true;
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
        },
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
