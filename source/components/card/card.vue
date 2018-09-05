<template lang="pug">
    .cards
        .card
            div().card__header MEDICAL HISTORY
            div().card_content_title Diagnosis Names:
            div(v-for="(item, index) in patients.medicalHistory").card_content_regular {{ item }}

        .card
            div().card__header ACTIVE PROBLEMS
            div().card_content_title Problem Names:
            div(v-for="(item, index) in patients.activeProblems").card_content_regular {{ item }}

</template>
<script>
    export default {
        props: ['patients'],
        data() {
            return {
            }
        },
 
        mounted() {},
        beforeDestroy() {},
    }
</script>
<style lang="scss">
    @import '~mixinsSCSS';
    .cards {
        margin-bottom: 50px;
        height: 300px;
    }
    .card {
        lost-column: 1/2;
        border: 1px solid grey;
        margin-right: 10px;
        display: inline-block;
        height: em(300);
    }

    .card__header {
        display: flex;
        justify-content: center;
        color: black;
        align-items: center;
        border-style: solid;
        border-color: grey;
        border-width: 0px 0px 1px 0px;
        height: em(60);
        background: white;
        font-size: em(20px);
        font-weight: 800;
    }

    .card_content_title {
        font-size: em(17px);
        margin: em(25) em(25);
        font-weight: 700;
    }

    .card_content_regular {
        font-size: em(15px);
        margin-left: em(55px);
        margin-bottom: em(35px);
    }

</style>
