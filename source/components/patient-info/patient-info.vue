<template lang="pug">
    .patient-info
        .patient-info__row

            .patient-info__col
                .patient-info__title
                    svg.ico-svg.ico-svg__heart
                        use(xlink:href="#heart")
                    | Vitals
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Height ( cm )
                        .patient-info__note-txt {{info.Vitals.Height}} cm
                    .patient-info__wrap-coll
                        .patient-info__note BMI ( calculated )
                        .patient-info__note-txt {{info.Vitals.BMI}}
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Weight ( kg )
                        .patient-info__note-txt {{info.Vitals.Weight}} kg
                    .patient-info__wrap-coll
                        .patient-info__note Pulse
                        .patient-info__note-txt {{info.Vitals.Pulse}} / min
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Respiratory Rate
                        .patient-info__note-txt {{info.Vitals.RespirationRate}} / min
                    .patient-info__wrap-coll
                        .patient-info__note Blood Pressure
                        .patient-info__note-txt {{info.Vitals.BloodPressureLo}} / {{info.Vitals.BloodPressureHi}}


            .patient-info__col
                .patient-info__title
                    svg.ico-svg.ico-svg__medical
                        use(xlink:href="#medical")
                    | Physician
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Dr. Full Name
                        .patient-info__note-txt {{info.Physician.Name}}
                    .patient-info__wrap-coll
                        .patient-info__note Emergency Number
                        .patient-info__note-txt
                            a(:href="'tel:'+info.Physician.EmergencyPhone.replace(/[^0-9]+/g,'')").patient-info__note-txt-link
                                | {{info.Physician.EmergencyPhone}}
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Clinic
                        .patient-info__note-txt {{info.Physician.Clinic}}
                    .patient-info__wrap-coll
                        .patient-info__note Phone ( primary )
                        .patient-info__note-txt
                            a(:href="'tel:'+info.Physician.PrimaryPhone.replace(/[^0-9]+/g,'')").patient-info__note-txt-link
                                | {{info.Physician.PrimaryPhone}}
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Physician Specialty
                        .patient-info__note-txt {{info.Physician.Specialty}}


            .patient-info__col
                .patient-info__title
                    svg.ico-svg.ico-svg__couple
                        use(xlink:href="#couple")
                    | Material Status
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Email
                        .patient-info__note-txt
                            a(:href="'mailto:'+info.Status.Email").patient-info__note-txt-link
                                | {{info.Status.Email}}
                    .patient-info__wrap-coll
                        .patient-info__note Race
                        .patient-info__note-txt {{info.Status.Race}}
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Religion
                        .patient-info__note-txt {{info.Status.Religion}}
                    .patient-info__wrap-coll
                        .patient-info__note Emergency Contact Name
                        .patient-info__note-txt {{info.Status.EmergencyContact.Name}}
                .patient-info__wrap
                    .patient-info__wrap-coll
                        .patient-info__note Emergency Contact Relationship
                        .patient-info__note-txt {{info.Status.EmergencyContact.Relation}}
                    .patient-info__wrap-coll
                        .patient-info__note Emergency Contact Phone
                        .patient-info__note-txt
                            a(:href="'tel:'+info.Status.EmergencyContact.Phone.replace(/[^0-9]+/g,'')").patient-info__note-txt-link
                                | {{info.Status.EmergencyContact.Phone}}


</template>
<script>
    export default {
        props: ['info'],
        components: {},
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

    .patient-info {
        margin-bottom: em(40);
    }

    .patient-info__row {
        lost-flex-container: row;
    }

    .patient-info__col {
        lost-column: 1/3 3 40px;
    }
    .patient-info__title {
        display: flex;
        align-items: center;
        color: #2d2d2d;
        font-size: em(18px);
        line-height: em(27px, 18);
        margin-bottom: em(50, 18);
        .ico-svg {
            margin-right: em(20,18);
        }
        use {
            fill: #c3c3c3;
        }
        .ico-svg__heart {
            width: em(28px, 18);
            height: em(24px, 18);
        }
        .ico-svg__medical {
            width: em(23px, 18);
            height: em(24px, 18);
        }
        .ico-svg__couple {
            width: em(31px, 18);
            height: em(30px, 18);
        }
    }

    .patient-info__wrap {
        lost-flex-container: row;
        border-bottom: 1px solid #f9f9f9;
        margin-bottom: em(10);
    }
    .patient-info__wrap-coll {
        margin-bottom: em(12);
        width: 100%;
        @include res(xxl) {
            lost-column: 1/2 2 20px;
        }
    }
    .patient-info__note {
        @extend %breakwords;
        color: rgba(#202020, .5);
        font-size: em(14px);
        margin-bottom: em(6, 14);
    }
    .patient-info__note-txt {
        @extend %breakwords;
    }
    .patient-info__note-txt-link {
        color: #202020;
        text-decoration: none;
        @extend %tr-all;
        &:hover {
            color: #1db7e9;
        }
    }

</style>
