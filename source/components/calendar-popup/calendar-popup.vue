<template lang="pug">
    transition(name="fade")
        div.calendar-popup(v-if="show", @click="$parent.showCalendar=false, $parent.calendarClick=true")
            .calendar
                .calendar__top-month
                    .calendar__top-month-action
                        svg.ico-svg.ico-svg__arrow-l
                            use(xlink:href="#arrow-l")
                    .calendar__top-item.mod--first October 2017
                    .calendar__top-item Novermber 2017
                    .calendar__top-month-action
                        svg.ico-svg.ico-svg__arrow-r
                            use(xlink:href="#arrow-r")
                .calendar__main
                    .calendar__main-box
                        .calendar__main-days
                            span Su
                            span Mo
                            span Tu
                            span We
                            span Th
                            span Fr
                            span Sa
                        .calendar__days
                            .calendar__days-item.mod--free
                                | 1
                            .calendar__days-item.mod--disable
                                | 2
                            .calendar__days-item
                                | 3
                            .calendar__days-item
                                | 4
                            .calendar__days-item
                                | 5
                            .calendar__days-item.mod--busy
                                | 6
                            .calendar__days-item
                                | 7
                            .calendar__days-item
                                | 8
                            .calendar__days-item
                                | 9
                            .calendar__days-item
                                | 10
                            .calendar__days-item.mod--free
                                | 11
                            .calendar__days-item.mod--disable
                                | 12
                            .calendar__days-item
                                | 13
                            .calendar__days-item
                                | 14
                            .calendar__days-item
                                | 15
                            .calendar__days-item.mod--busy
                                | 16
                            .calendar__days-item
                                | 17
                            .calendar__days-item
                                | 18
                            .calendar__days-item
                                | 19
                            .calendar__days-item
                                | 20
                            .calendar__days-item.mod--free
                                | 21
                            .calendar__days-item.mod--disable
                                | 22
                            .calendar__days-item
                                | 23
                            .calendar__days-item
                                | 24
                            .calendar__days-item
                                | 25
                            .calendar__days-item.mod--busy
                                | 26
                            .calendar__days-item
                                | 27
                            .calendar__days-item
                                | 28
                            .calendar__days-item
                                | 29
                            .calendar__days-item
                                | 30
                            .calendar__days-item
                                | 31
                    .calendar__main-box
                        .calendar__main-days
                            span Su
                            span Mo
                            span Tu
                            span We
                            span Th
                            span Fr
                            span Sa
                        .calendar__days
                            .calendar__days-item.mod--free
                                | 1
                            .calendar__days-item.mod--disable
                                | 2
                            .calendar__days-item
                                | 3
                            .calendar__days-item
                                | 4
                            .calendar__days-item
                                | 5
                            .calendar__days-item.mod--busy
                                | 6
                            .calendar__days-item
                                | 7
                            .calendar__days-item
                                | 8
                            .calendar__days-item
                                | 9
                            .calendar__days-item
                                | 10
                            .calendar__days-item.mod--free
                                | 11
                            .calendar__days-item.mod--disable
                                | 12
                            .calendar__days-item
                                | 13
                            .calendar__days-item
                                | 14
                            .calendar__days-item.mod--shadow
                                | 15
                            .calendar__days-item.mod--busy.mod--shadow
                                | 16
                            .calendar__days-item.mod--shadow
                                | 17
                            .calendar__days-item.mod--shadow
                                | 18
                            .calendar__days-item.mod--shadow
                                | 19
                            .calendar__days-item.mod--shadow
                                | 20
                            .calendar__days-item.mod--free.mod--shadow
                                | 21
                            .calendar__days-item.mod--disable
                                | 22
                            .calendar__days-item
                                | 23
                            .calendar__days-item
                                | 24
                            .calendar__days-item
                                | 25
                            .calendar__days-item.mod--busy
                                | 26
                            .calendar__days-item
                                | 27
                            .calendar__days-item
                                | 28
                            .calendar__days-item
                                | 29
                            .calendar__days-item
                                | 30
                            .calendar__days-item
                                | 31





</template>
<script>
    export default {
        props: ['show'],
        components: {
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

    .calendar__main {
        lost-flex-container: row;
    }
    .calendar__main-box {
        lost-column: 1/2 2 em(20px);
    }

    .calendar__main-days {
        display: flex;
        width: 100%;
        margin-bottom: em(10, 14);
        color: rgba(#1f1f1f,.2);
        font-size: em(14px);
        letter-spacing: em(0.7px, 14);
        position: relative;

        span {
            width: 14%;
            text-align: center;
        }
    }

    


    /*.calendar__days-item-status {*/
        /*width: em(6px);*/
        /*height: em(6px);*/
        /*margin-top: em(3);*/
        /*border-radius: 50%;*/
        /*&.mod--free {*/
            /*background-color: #39b54a;*/
        /*}*/
        /*&.mod--busy {*/
            /*background-color: #ff633d;*/
        /*}*/
    /*}*/

    .calendar__days {
        display: flex;
        flex-wrap: wrap;
    }
    .calendar__days-item {
        width: 14%;
        text-align: center;
        height: em(40, 14);
        padding-top: em(8,14);
        display: flex;
        flex-flow: column;
        align-items: center;

        color: rgba(#1f1f1f, .5);
        font-size: em(14px);
        position: relative;
        
        &:hover {
            background-color: #e1f5fc;
            cursor: pointer;
        }

        &.mod--disable {
            text-decoration: line-through;
        }

        &:before {
            content: '';
            position: absolute;
            bottom: em(6,14);
            left: 50%;
            margin-left: em(-3, 14);
            width: em(6px);
            height: em(6px);
            line-height: 1px;
            margin-top: em(3);
            border-radius: 50%;
        }
        &.mod--free {
          &:before {
              background-color: #37b649;
          }  
        }

        &.mod--busy {
          &:before {
              background-color: #ff633d;
          }
        }

        &.mod--shadow {
            background-color: #f9f9f9;
        }




    }

    .calendar {
        padding: em(24);
        width: em(620px);
        height: em(370px);
        box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
        background-color: #ffffff;
    }

    .calendar__top-month {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: em(36);
    }
    .calendar__top-month-action {
        line-height: em(12px);
        opacity: .2;
        use {
            fill: #000;
        }
        &:hover {
            opacity: .8;
        }
        @extend %tr-all;
        cursor: pointer;
        position: relative;
        @include link-out(.5);
        .ico-svg {
            width: em(18px);
            height: em(12px);
        }
    }

    .calendar__top-item {
        width: em(220, 18);
        text-align: center;
        color: #1f1f1f;
        font-size: em(18px);
        font-weight: 700;
        &.mod--first {
            margin-right: em(70px, 18);
        }
    }

</style>
