<template lang="pug">
    .appointment
        table.appointment__table
            tr
                th Rx Number
                th Prescribing Physician
                th Pharmacy
                th Day Supply
                th Number of Refills
                th Refills Remaining
                th Drug Classification
                th Insurance Provider
                th Actions
            tr(v-for="(item, index) in data", v-if="check(item)")
                td {{item.rxNumber}}
                td {{item.physician}}
                td {{item.pharmacy}}
                td {{item.daySupply}}
                td {{item.numberOfRefills}}
                td {{item.refillsRemaining}}
                td {{item.drugClassification}}
                td {{item.insuranceProvider}}
                td.more-action
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list
                            a(href="#3",).sub-popup-menu__item Set Auto Refill
                            a(href="#3",).sub-popup-menu__item Send Fax Auth
                            a(href="#3",).sub-popup-menu__item Verify Insurance
                            a(href="#3",).sub-popup-menu__item Transfer Rx

</template>
<script>
    import modal from "../modal-component/modal.vue";

    export default {
        props: ['data'],
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
