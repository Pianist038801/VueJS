<template lang="pug">
    .content
        .content__top-line
            h1.title Patient Schedule
            a(href="#3").content__top-action
                svg.ico-svg.ico-svg__plus-round
                    use(xlink:href="#plus-round")
        .content__box
            appointment(:patients="$root._data.Patients[$root.activePacient]")
            journey-map(:info="$root._data.Patients[$root.activePacient]")

</template>
<script>
    import appointment from "../../components/appointment/appointment.vue";
    import journeyMap from "../../components/journey-map/journey-map.vue";
    export default {
        props: {

        },
        components: {
            appointment,
            journeyMap
        },
        data() {
            return {
                visible: false,
            }
        },
        methods: {
            open() {}
        },
        mounted() {},
        beforeDestroy() {},
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';
</style>
