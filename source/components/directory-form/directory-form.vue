<template lang="pug">     
    .appointment
        svg.ico-svg.ico-search
            use(xlink:href="#search")
        input(placeholder="Search Directory", v-model="search_keyword").ui-input
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
                td {{item.name}}
                td {{item.type}}
                td {{item.source}}
                td {{item.telephone}}
                td {{item.address}}
                td {{item.provider}}
                td {{item.providerContact}}
                td(v-if="isGreen(item)").green {{item.providerStatus}}
                td(v-if="isRed(item)").red {{item.providerStatus}}
                td(v-if="isNormal(item)") {{item.providerStatus}}
                td.more-action
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__more
                                use(xlink:href="#more")
                        .sub-popup-menu__list
                            a(href="#",).sub-popup-menu__item Call
                            a(href="#",).sub-popup-menu__item Text
                            a(href="#",).sub-popup-menu__item Page

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
                search_keyword: '',
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
        },
        beforeDestroy() {},
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

	.ui-input {
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
