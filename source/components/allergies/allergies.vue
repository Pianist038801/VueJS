<template lang="pug">
    .appointment
        .appointment__top
            .appointment__top-filter
                svg.ico-svg.ico-svg__filter-results-button
                    use(xlink:href="#filter-results-button")
                span All Allergies
            
        table.appointment__table
            tr
                th Allergy Name
                th Allergy Description
                th Date Entered
                th Date Noted
                th Reactions
                th Reaction Comments
                th Severity
                th Type
            
            tr(v-for="(item, index) in patients.allergies")
                td {{ item.name }}
                td {{ item.description }}
                td {{ item.dateEntered }}
                td {{ item.dateNoted }}
                td {{ item.reactions }}
                td {{ item.reactionComments }}
                td {{ item.severity }}
                td {{ item.type }}


</template>
<script>
    import modal from "../modal-component/modal.vue";

    export default {
        props: ['patients'],
        components: {
            modal
        },
        data() {
            return {
                visible: false,
                currentMoreInfoIndex: null
            }
        },
        methods: {
            open() {},

            openNewWindow(url){
                let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                window.open(url, "CNN_WindowName", strWindowFeatures);

            },

            openModalInfo(index){
                this.currentMoreInfoIndex = index;
                this.$refs.modalInfo.open();
            }
        },
        mounted() {},
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
