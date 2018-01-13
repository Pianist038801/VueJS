<template lang="pug">

    .incidents
        .incidents__top-active
            .incidents__top-active-left
                .incidents__top-active-title
                    .title Incidents
                .incidents__top-active-search
                    svg.ico-svg.ico-svg__search
                        use(xlink:href="#search")
                    | Search
            .incidents__top-active-icons
                a(href="#3").incidents__top-active-item
                    svg.ico-svg.ico-svg__tune
                        use(xlink:href="#tune")
                a(href="#3").incidents__top-active-item
                    svg.ico-svg.ico-svg__update
                        use(xlink:href="#update")
                a(href="#3").incidents__top-active-item
                    svg.ico-svg.ico-svg__cached
                        use(xlink:href="#cached")
                a(href="#3").incidents__top-active-item
                    svg.ico-svg.ico-svg__delete
                        use(xlink:href="#delete")
                a(href="#3").incidents__top-active-item
                    svg.ico-svg.ico-svg__arrow-b
                        use(xlink:href="#arrow-b")
                a(href="#3").incidents__top-active-item
                    svg.ico-svg.ico-svg__arrow-t
                        use(xlink:href="#arrow-t")
        table.incidents__table
            tr
                th
                th Edit
                th Issue Status
                th Workgroup
                th Team
                th Hospital
                th Patient Last Name
                th Urgent
                th Bed Number
                th Caller
                th Phone Number
                th Created Dated
                th Created By
                th
            tr
                td
                    .ui-checkbox
                        input#checkbox-s1(name="checkbox-s1" type="checkbox" ).ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-s1')
                td
                    a.incidents__table-edit(href="#3")
                        svg.ico-svg.ico-svg__pen
                            use(xlink:href="#pen")
                td Closed
                td eHospitalist
                td Team
                td STL eHospitalist
                td johonson
                td (1) NO
                td 154
                td Blanca
                td 212-223-3343
                td 11/9/2016 11:12am
                td Miller M.D
                td
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__dot-v
                                use(xlink:href="#dot-v")
                        .sub-popup-menu__list
                            a(href="#3").sub-popup-menu__item Details
                            a(href="#3").sub-popup-menu__item Share
                            a(href="#3").sub-popup-menu__item Transfer
                            a(href="#3").sub-popup-menu__item Archive
            tr
                td
                    .ui-checkbox
                        input#checkbox-s2(name="checkbox-s1" type="checkbox" ).ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-s2')
                td
                    a.incidents__table-edit(href="#3")
                        svg.ico-svg.ico-svg__pen
                            use(xlink:href="#pen")
                td Closed
                td eHospitalist
                td Team
                td STL eHospitalist
                td johonson
                td (1) NO
                td 154
                td Blanca
                td 212-223-3343
                td 11/9/2016 11:12am
                td Miller M.D
                td
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__dot-v
                                use(xlink:href="#dot-v")
                        .sub-popup-menu__list
                            a(href="#3").sub-popup-menu__item Details
                            a(href="#3").sub-popup-menu__item Share
                            a(href="#3").sub-popup-menu__item Transfer
                            a(href="#3").sub-popup-menu__item Archive
            tr
                td
                    .ui-checkbox
                        input#checkbox-s3(name="checkbox-s1" type="checkbox" ).ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-s3')
                td
                    a.incidents__table-edit(href="#3")
                        svg.ico-svg.ico-svg__pen
                            use(xlink:href="#pen")
                td Closed
                td eHospitalist
                td Team
                td STL eHospitalist
                td johonson
                td (1) NO
                td 154
                td Blanca
                td 212-223-3343
                td 11/9/2016 11:12am
                td Miller M.D
                td
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__dot-v
                                use(xlink:href="#dot-v")
                        .sub-popup-menu__list
                            a(href="#3").sub-popup-menu__item Details
                            a(href="#3").sub-popup-menu__item Share
                            a(href="#3").sub-popup-menu__item Transfer
                            a(href="#3").sub-popup-menu__item Archive
            tr
                td
                    .ui-checkbox
                        input#checkbox-s4(name="checkbox-s1" type="checkbox" ).ui-checkbox__input
                        label.ui-checkbox__label(for='checkbox-s4')
                td
                    a.incidents__table-edit(href="#3")
                        svg.ico-svg.ico-svg__pen
                            use(xlink:href="#pen")
                td Closed
                td eHospitalist
                td Team
                td STL eHospitalist
                td johonson
                td (1) NO
                td 154
                td Blanca
                td 212-223-3343
                td 11/9/2016 11:12am
                td Miller M.D
                td
                    .sub-popup-menu
                        .sub-popup-menu__action
                            svg.ico-svg.ico-svg__dot-v
                                use(xlink:href="#dot-v")
                        .sub-popup-menu__list
                            a(href="#3").sub-popup-menu__item Details
                            a(href="#3").sub-popup-menu__item Share
                            a(href="#3").sub-popup-menu__item Transfer
                            a(href="#3").sub-popup-menu__item Archive

</template>
<script>
    import Multiselect from 'vue-multiselect';
    export default {
        props: {
            video: {
                type: String,
                required: false,
                default: ''
            },
        },
        components: {
            Multiselect
        },
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            open() {
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

    .incidents {
        margin-bottom: em(70);
    }

    .incidents__table-edit {
        use {
            fill: #b2b2b2;
        }
        &:hover {
            use {
                fill: darken(#b2b2b2, 20%);
            }
        }
        .ico-svg__pen {
            width: em(19px);
            height: em(19px);
        }

    }
    .incidents__table {
        border-spacing: 0;
        width: 100%;

        font-size: em(12);

        @include res(xxl) {
            font-size: em(14);
        }
        @include res(hd) {
            font-size: em(16);
        }

        th {
            text-align: left;
            color: #484848;
            font-size: em(14px);
            font-weight: 400;
            background-color: #f9f9f9;
            padding: em(16 0);
        }
        td {
            padding: em(16 5);
        }
        @extend %breakwords;

        .ui-checkbox {
            padding-left: em(18);
        }
    }

    .incidents__top-active {
        display: flex;
        justify-content: space-between;
        margin-bottom: em(40);
    }

    .incidents__top-active-left {
        display: flex;
        align-items: center;

    }
    .incidents__top-active-search {
        display: flex;
        color: #c3c3c3;
        font-size: em(18px);
        font-weight: 700;
        align-items: center;
        margin-left: em(54,18);

        .ico-svg__search {
            margin-right: em(20, 18);
            width: em(18px, 18);
            height: em(18px, 18);
            use {
                fill: #b2b2b2;
            }
        }
    }


    .incidents__top-active-icons {
        padding-right: em(20);
        display: flex;
        use {
            @extend %tr-all;
            fill: #b2b2b2
        }
        .ico-svg__tune {
            width: em(18px);
            height: em(18px);
        }
        .ico-svg__update {
            width: em(18px);
            height: em(18px);
        }
        .ico-svg__cached {
            width: em(22px);
            height: em(16px);
        }
        .ico-svg__delete {
            width: em(14px);
            height: em(18px);
        }
        .ico-svg__arrow-b {
            width: em(10px);
            height: em(13px);
        }
        .ico-svg__arrow-t {
            width: em(10px);
            height: em(13px);
        }

    }

    .incidents__top-active-item {
        position: relative;
        margin-left: em(40);
        @include link-out(.5);
        &:hover {
            use {
                fill: darken(#b2b2b2, 20%);
            }
        }

    }




</style>
