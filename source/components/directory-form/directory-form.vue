<template lang="pug">     
    .appointment
        svg.ico-svg.ico-search
            use(xlink:href="#search")
        input(placeholder="Search Directory", v-model="search_keyword").ui-input-search
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
                            a(href="#", @click.prevent="showSMSWindow(item)").sub-popup-menu__item Text
                            a(href="#",).sub-popup-menu__item Page
        modal(ref="modalbook")
            .modal__content(v-if="currentDirectory !== null")

                .modal__content-row
                    .modal__content-col

                        .modal-appointment__title
                            .title.mod--modal-appointment Send SMS



                .modal-appointment__templates-messages
                    textarea.ui-textarea.ui-textarea--skin-default.ui-textarea--theme-default.mod--sms
                        | {{sms_template}}
                .modal-appointment__row
                    a(href="#3", @click.prevent="sendSMS()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Send
                    a(href="#3", @click.prevent="$refs.modalbook.close()").ui-btn.ui-btn--skin-default.ui-btn--theme-primary-border Cancel

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
                sms_template: 'User [Agent Name] is requesting you to contact them immediately at telephone number [Finesse Number]',
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

                msg = msg.replace ( '[Agent Name]' , currentDirectory.name ) ;
                msg = msg.replace ( '[Finesse Number]' , currentDirectory.telephone ) ;

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
