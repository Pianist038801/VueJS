<template lang="pug">
    .cards
        .card
            div().card__header MEDICAL HISTORY
            div().card_content_title Diagnosis Names:
            div(v-for="(item, index) in patients.medicalHistory").card_content_regular {{ item }}

        .card
            div().card__header.red ACTIVE PROBLEMS
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
        color: white;
        align-items: center;
        height: em(60);
        background: #4A655B;
        font-size: em(20px);
        font-weight: 800;
    }

    .red {
        background: #B53533;
    }
    .card_content_title {
        font-size: em(15px);
        margin: em(25) em(25);
        font-weight: 700;
    }

    .card_content_regular {
        font-size: em(13px);
        margin-left: em(55px);
        margin-bottom: em(35px);
    }

</style>
