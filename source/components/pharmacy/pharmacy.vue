<!-- Despite the name of this file, is actually for the Locations section of Patient Info Page. -->
<template lang="pug">
    .pharmacies
        h2.title Locations

        .pharmacies__line
            .pharmacies__line-item
                svg.ico-svg.ico-svg__pharmacy
                    use(xlink:href="#pharmacy")
                .pharmacies__line-item-select
                    multiselect(
                    v-model="currentPharmacyName",
                    :options="pharmacies",
                    @input="setAcivePharmacy",
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false"
                    ).ui-multiselect.ui-multiselect--default
            .pharmacies__line-item
                svg.ico-svg.ico-svg__location
                    use(xlink:href="#location")
                | {{info.Location.DropdownRecords[currentPharmacy].Address}}

            .pharmacies__line-item
                svg.ico-svg.ico-svg__phone
                    use(xlink:href="#phone")
                a(:href="'tel:'+info.Location.DropdownRecords[currentPharmacy].Phone.replace(/[^0-9]+/g,'')").pharmacies__line-item-link
                    | {{info.Location.DropdownRecords[currentPharmacy].Phone}}
            .pharmacies__line-item
                svg.ico-svg.ico-svg__clock
                    use(xlink:href="#clock")
                | {{info.Location.DropdownRecords[currentPharmacy].Hours}}


            <!-- :center = {{info.Location.DropdownRecords[currentPharmacy].Address}} or "{lat: 32.9448268, lng: -96.64587949999998}" v-for="(m, index) in markers" -->
        .pharmacies__map
            gmap-map(
            :center="info.Location.DropdownRecords[0].Position",
            :zoom="12",
            style="width: 100%; height: 300px"
            )
                gmap-marker(
                :key="index"
                v-for="(m, index) in info.Location.DropdownRecords[currentPharmacy].Markers",
                :position="m.Position",
                :label="m.Name"
                )

</template>
<script>
    import Multiselect from 'vue-multiselect';
    import Vue from 'vue'
    import * as VueGoogleMaps from 'vue2-google-maps';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyBvWE_sIwKbWkiuJQOf8gSk9qzpO96fhfY',
            libraries: 'places', // This is required if you use the Autocomplete plugin
        }
    });

    export default {
        props: ['info'],
        components: {
            Multiselect
        },
        data() {
            return {
                visible: false,
                currentPharmacy: 0,
                currentPharmacyName: ''
            }
        },
        methods: {
            setAcivePharmacy() {
                let vm = this;
                vm.info.Location.DropdownRecords.forEach((item, i) => {
                    if (item.Name === vm.currentPharmacyName) {
                        vm.currentPharmacy = i;
                    }
                });
            }
        },
        created() {
            let vm = this;
            this.currentPharmacyName = vm.info.Location.DropdownRecords[vm.currentPharmacy].Name;
        },
        computed: {
            pharmacies: function () {
                let vm = this;
                let array = [];
                vm.info.Location.DropdownRecords.forEach((item, i) => {
                    array.push(item.Name);
                });
                return array;
            }
        },
        mounted() {

        },
        beforeDestroy() {
        },
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';

    .pharmacies__line {
        lost-flex-container: row;
        margin: em(20 20 10 20);
    }

    .pharmacies__line-item {
        margin-bottom: em(10);
        lost-column: 2/4 2 em(20px);
        @include res(xxl) {
            lost-column: 1/4 4 em(20px);
        }
        color: #2d2d2d;
        display: flex;
        align-items: center;

        use {
            fill:  #c3c3c3;
        }
        .ico-svg {
            margin-right: em(20px);
        }
        .ico-svg__pharmacy {
            width: em(24px);
            height: em(33px);
        }
        .ico-svg__location {
            width: em(14px);
            height: em(20px);
        }
        .ico-svg__location {
            width: em(14px);
            height: em(20px);
        }
        .ico-svg__phone {
            width: em(18px);
            height: em(18px);
        }

        .ico-svg__clock {
            width: em(20px);
            height: em(20px);
        }
    }


    .pharmacies__map {
        margin-bottom: em(40);
    }

    .pharmacies__line-item-link {
        text-decoration: none;
        color: #202020;
        @extend %tr-all;
        &:hover {
            color: #1db7e9;
        }
    }




</style>
