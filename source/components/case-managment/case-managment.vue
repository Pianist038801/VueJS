<template lang="pug">
    .case-managment
        .case-managment__top
            .case-managment__top-item
                .case-managment__top-item-label  Hospital Name
                .case-managment__top-item-box
                    multiselect(
                    :options=['Mercy Joplin', 'John Jacobs'],
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false",
                    placeholder="Mercy Joplin"
                    ).ui-multiselect.ui-multiselect--default

            .case-managment__top-item
                .case-managment__top-item-label  Incident ID
                .case-managment__top-item-box
                    .case-managment__top-item-box-note INC0010032

            .case-managment__top-item
                .case-managment__top-item-label  Unit
                .case-managment__top-item-box
                    multiselect(
                    :options=['Cardiology', 'Ophthalmology'],
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false",
                    placeholder="Cardiology"
                    ).ui-multiselect.ui-multiselect--default

            .case-managment__top-item
                .case-managment__top-item-label  Case Manager
                .case-managment__top-item-box
                    .case-managment__top-item-box-note Katie Holmes, RN

            .case-managment__top-item
                .case-managment__top-item-label  Incident Type
                .case-managment__top-item-box
                    multiselect(
                    :options=['Existing', 'Missing'],
                    :searchable="false",
                    :allowEmpty="false",
                    :showLabels="false",
                    placeholder="Existing"
                    ).ui-multiselect.ui-multiselect--default

            .case-managment__top-item
                .case-managment__top-item-label  Phone Number#
                .case-managment__top-item-box
                    a(href="tel:1212421234").case-managment__top-item-box-link  +1-(212)-42-1234



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
    .case-managment__top {
        lost-flex-container: row;
        margin-bottom: em(50);
    }
    .case-managment__top-item {
        lost-column: 1/3 3 em(80px);
        margin-bottom: em(30);
    }
    .case-managment__top-item-box {
        display: inline-block;
        vertical-align: top;

        min-width: em(130);
    }

    .case-managment__top-item-label {
        color: rgba(#202020, .5);
        font-size: em(14px);
    }
    .case-managment__top-item-box-note {
        padding-top: em(8);
    }

    .case-managment__top-item-box-link {
        margin-top: em(8);
        text-decoration: none;
        @extend %tr-all;
        display: inline-block;
        vertical-align: top;
        color: #202020;
        &:hover {
            color: #1db7e9;
        }
    }

</style>
