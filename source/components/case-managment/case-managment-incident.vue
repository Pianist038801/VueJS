<template lang="pug">
    .incident
        .incident__title
            h2.title Incident No
            .incident__title-num #INC0010047

        .case-managment
            .case-managment__top
                .case-managment__top-item
                    .case-managment__top-item-label  Number
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note  INC0010047

                .case-managment__top-item
                    .case-managment__top-item-label  Issue Status
                    .case-managment__top-item-box
                        multiselect(
                        :options=['Work in Progress', 'Closed', 'Escalate'],
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder=""
                        ).ui-multiselect.ui-multiselect--default

                .case-managment__top-item
                    .case-managment__top-item-label  Workgroup
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note eHospitalist

                .case-managment__top-item
                    .case-managment__top-item-label  Team
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note Team Name

                .case-managment__top-item
                    .case-managment__top-item-label  Hospital
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note STL eHospitalist

                .case-managment__top-item
                    .case-managment__top-item-label  Patient Last Name
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note johnson

                .case-managment__top-item
                    .case-managment__top-item-label  Urgent
                    .case-managment__top-item-box
                        multiselect(
                        :options=['(1) NO', '(2) Yes'],
                        :searchable="false",
                        :allowEmpty="false",
                        :showLabels="false",
                        placeholder="(1) NO"
                        ).ui-multiselect.ui-multiselect--default

                .case-managment__top-item
                    .case-managment__top-item-label  Bed Number
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note 154

                .case-managment__top-item
                    .case-managment__top-item-label Caller
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note Blanca

                .case-managment__top-item
                    .case-managment__top-item-label Phone Number
                    .case-managment__top-item-box
                        a(href="tel:2122234543").case-managment__top-item-box-link +212-223-4543





                .case-managment__top-item
                    .case-managment__top-item-label Created Dated
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note 11/9/2016  11:12am

                .case-managment__top-item
                    .case-managment__top-item-label Created By
                    .case-managment__top-item-box
                        .case-managment__top-item-box-note Miller M.D


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

    .incident__title {
        display: flex;

        align-items: flex-end;
        margin-bottom: em(60);
    }

    .incident__title-num {
        color: #b2b2b2;
        font-size: em(20px);
        margin-left: em(40,20);
        text-transform: uppercase;
    }
</style>
