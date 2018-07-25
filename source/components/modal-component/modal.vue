<template lang="pug">
    .modal(v-show="is_open")
        transition(name="fade")
            .modal__overlay(v-show="is_open")
        transition(name="fade")
            .modal__wrapper(v-if="visible", @click="_onOverlayClick")
                .modal__box(v-if="video")
                    .modal__box-close(@click="close")
                        svg.ico-svg.ico-svg__close
                            use(xlink:href="#close")
                    .modal__box-iframe
                        iframe(:src="video", frameborder="0", webkitallowfullscreen, mozallowfullscreen, allowfullscreen)

                .modal__box(v-else)
                    .modal__box-close(@click="close")
                        svg.ico-svg.ico-svg__close
                            use(xlink:href="#close")
                    slot
</template>

<script>

    export default {
        props: {
            video: {
                type: String,
                required: false,
                default: ''
            },
        },
        data() {
            return {
                visible: false,
                is_open: false,
            }
        },

        methods: {
            open(url) {
                this.is_open = true;
                this._lockHtml();
                setTimeout(() => {
                    this.visible = true;
                }, 30);
                this.$emit('open');

                if(url) {
                    this.$root.modalRedirect = url;
                } else {
                    this.$root.modalRedirect = 'http://todaysconference.com/attendee-registration/';
                }

            },

            close() {
                this.visible = false;
                this._unlockHtml();
                setTimeout(() => {
                    this.is_open = false;
                }, 300);
                this.$emit('close');
            },

            _lockHtml() {
                let htmlEl = document.documentElement;
                htmlEl.classList.add('state--modal-show');
            },

            _unlockHtml() {
                let htmlEl = document.documentElement;
                htmlEl.classList.remove('state--modal-show');
            },

            // event on click overlay - close modal
            _onOverlayClick(event) {
                if (event.target.contains(document.querySelector('.modal__box')) && event.target !== document.querySelector('.modal__box')) {
                    this.close();
                }
            },
            // close modal on ESC
            _onDocumentKeyup() {
                if (event.keyCode == 27) {
                    this.close();
                }
            }
        },

        mounted() {
            document.addEventListener('keyup', this._onDocumentKeyup);
        },
        beforeDestroy() {
            document.removeEventListener('keyup', this._onDocumentKeyup)
        },
        components: {}

    }
</script>

<style lang="scss">
    @import '~mixinsSCSS';
    html.state--modal-show {
        height: 100%;
        overflow: hidden;
    }

    /*html.state--modal-show > body {*/
        /*overflow: hidden;*/
        /*height: auto;*/
    /*}*/

    .modal__overlay {
        position: fixed;
        z-index: 99999;
        top: -500rem;
        right: -500rem;
        bottom: -500rem;
        left: -500rem;
        background: rgba(#000, .5);
    }

    .modal__wrapper {
        white-space: nowrap;
        position: fixed;
        z-index: 100000;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        text-align: center;
        -webkit-overflow-scrolling: touch;
        padding: em(60 10 10);
        @include res(lg) {
            padding: em(10);
        }

        &:after {
            display: inline-block;
            height: 100%;
            margin-left: -.05em;
            content: "";
            vertical-align: middle;
        }
    }

    .modal__box {
        white-space: normal;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        transform: translate3d(0, 0, 0);
        background-color: #f7f7f7;
        width: 100%;
        max-width: 980px;
        border-radius: 0;
        box-shadow: inset 0 -0.1rem 0 #dbdbdb;
        text-align: left;
    }

    .modal__box-close {
        &:after {
            position: absolute;
            z-index: -1;
            background-color: #fff;
            display: block;
            top: -1rem;
            left: -1rem;
            bottom: -1rem;
            right: -1rem;
            @extend %tr-all;
        }
        cursor: pointer;
        display: block;
        position: absolute;
        right: em(-10);
        top: -4rem;
        z-index: 20;
        width: 2rem;
        height: 2rem;
        @include link-out(1);
        @include res(lg) {
            right: em(24);
            top: em(24);
        }
        &:hover {
            use {
                fill: #000;
            }
        }
        use {
            @extend %tr-all;
            fill: #333;
        }
        .ico-svg__close {
            width: em(14);
            height: em(14);
        }
    }

    .modal__box-iframe {
        position: relative;
        padding-top: 56%;
        background-color: #333;
        iframe {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: block;
            width: 100%;
            height: 100%;
        }
    }





    .title.mod--modal-appointment {
        margin-bottom: em(24,24);
    }

    .modal-appointment__remind {
        display: flex;
        min-height: em(30);
        align-items: center;
    }
    .modal-appointment__remind-days {
        .ui-input {
            width: em(50, 14);
            text-align: center;
            margin: 0 em(20, 14);
        }
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .modal-appointment__templates-checkbox {
        margin-bottom: em(24);
    }
    .modal-appointment__templates-messages {
        margin-bottom: em(24);
    }
    .ui-textarea.mod--sms {
        height: em(80, 14);
        min-height: em(80, 14);
    }
    .modal-appointment__reason {
        margin-top: em(20);
        margin-bottom: em(24);
    }
    .modal__content-row {
        lost-flex-container: row;
    }
    .modal__content-col {
        lost-column: 1/2 2 em(100px);
    }


    .modal-appointment__remind {
        display: flex;
        min-height: em(30);
        align-items: center;
    }
    .modal-appointment__remind-days {
        .ui-input {
            width: em(50, 14);
            text-align: center;
            margin: 0 em(20, 14);
        }
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    .modal-appointment__templates-checkbox {
        margin-bottom: em(24);
    }
    .modal-appointment__templates-messages {
        margin-bottom: em(24);
    }
    .ui-textarea.mod--sms {
        height: em(80, 14);
        min-height: em(80, 14);
    }
    .modal-appointment__reason {
        margin-top: em(20);
        margin-bottom: em(24);
    }
    .modal__content-row {
        lost-flex-container: row;
    }
    .modal__content-col {
        lost-column: 1/2 2 em(100px);
    }


    .title.mod--appointment {
        margin-bottom: em(45, 24);
    }
    .make-appointment__line-select {
        lost-flex-container: row;
        margin-bottom: em(30);

    }
    .make-appointment__line-select-item {
        lost-column: 1/3 3 em(25px);
        margin-bottom: em(20);
        @include res(hd) {
            lost-column: 1/5 5 em(25px);
        }
    }
    .make-appointment__line-select-note {
        opacity: 0.5;
        color: rgba(#202020, .5);
        font-size: em(14px);
        font-weight: 400;
        margin-bottom: em(8,14);
    }
    .make-appointment__line-calendar-l {
        position: relative;

        .calendar-popup {
            position: absolute;
            z-index: 2000;
            right: 0;
            top: em(40);
        }
    }
    .make-appointment__line-calendar {
        padding: em(8px 0 0 44);
        position: relative;
        border: 1px solid #e2e2e2;
        border-radius: em(4);
        height: em(40);
        .ico-svg__calendar {
            position: absolute;
            width: em(18px);
            height: em(20px);
            left: em(12);
            top: em(8);
            opacity: .3;
            use {
                fill: #000;
            }
        }
        .ico-svg__down {
            position: absolute;
            width: em(12px);
            height: em(8px);
            right: em(12);
            top: em(16);
            opacity: .3;
            use {
                fill: #000;
            }
        }
    }
    .make-appointment__table {
        width: 100%;
        border-spacing: 0;
    }
    .search-patient__table {
        width: 100%;
        margin-top: em(50);
        border-spacing: 10;
        border-width: 12;

        td {
            border-bottom: 2px solid transparent;
            @extend %breakwords;
            padding: em(6 4);
            background-color:  rgb(233, 237, 245);
        }

        &.state--hold {
            td {
                background-color: #f9f9f9;
            }
        }
        
    }
    .search-patient__table th {
        background-color: rgb(107, 154, 208);
        color: white;
        font-size: em(22px);
        padding: em(13 13);    
    }
    .make-appointment__table-time {
        text-transform: uppercase;
    }
    .make-appointment__table-status {
        .state--hold & {
            color: #fb693c;
        }
    }
    .make-appointment__table-tr {
        td {
            border-bottom: 2px solid transparent;
            @extend %breakwords;
            padding: em(24 18);
        }

        &.state--hold {
            td {
                background-color: #f9f9f9;
            }
        }
    }
    .make-appointment__table th {

        .ui-checkbox {
            font-size: em(16, 12);
        }
        color: rgba(#1f1f1f, .5);
        font-size: em(12px);
        text-transform: uppercase;
        letter-spacing: em(1.2px, 12);
        padding: em(10 18 30 18, 12);

        &:nth-child(2), &:nth-child(3) {
            text-align: left;
        }
    }
    .make-appointment__date-selected {
        font-size: em(18px);
        margin-bottom: em(40,18);
        padding-left: em(18,18);
    }
    .make-appointment__table-action {
        width: em(210);
    }
    .modal__content {
        padding: em(40 70);
    }

    .modal-appointment__lang-main {
        display: flex;
        justify-content: space-between;
    }
    .modal-appointment__lang-toggle {
        margin-top: em(4);
        width: em(36px);
        height: em(10px);
        background-color: rgba(#ccc, .6);
        border-radius: em(100);
        position: relative;
        cursor: pointer;
        &.state--active {
            background-color: rgba(#74ccef, .5);
            &:before {
                left: calc(100% - 1em);
                background-color: #74ccef;
                box-shadow: 0 em(3px) em(5px) rgba(0, 0, 0, 0.1), 0 0 0 em(6) rgba(#74ccef, .3);
            }
        }
        &:before {
            @extend %tr-all;
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            border-radius: 50%;
            width: em(16px);
            height: em(16px);
            margin-top: em(-8);
            box-shadow: 0 em(3px) em(5px) rgba(0, 0, 0, 0.1), 0 0 0 em(6) rgba(#c4c5cb, .3);
            background-color: #c4c5cb;
        }
        &:hover {
            &:before {
                background-color: darken(#74ccef, 20%);
            }
        }
    }

    .modal-appointment__lang-ico {
        position: absolute;
        left: 0;
        top: 0;
        .ico-svg__lang {
            width: em(23px);
            height: em(20px);

            use {
                fill: #c3c3c3;
            }
        }
    }

    .modal-appointment__info {
        position: relative;
        padding-left: em(40);
        margin-bottom: em(25);
        .ico-svg {
            position: absolute;
            left: 0;
            top: 0;
            use {
                fill: #c3c3c3;
            }
        }
        .ico-svg__calendar {
            width: em(18px);
            height: em(20px);
        }
        .ico-svg__location {
            width: em(14px);
            height: em(20px);
        }
        .ico-svg__clock {
            width: em(20px);
            height: em(20px);
        }
    }

    .modal-appointment__info-lang {
        margin-right: em(40);
        display: inline-block;
        vertical-align: top;
        min-width: em(200);
        height: em(40);
    }


    .modal-appointment__row {
        text-align: right;
        margin-top: em(60px);

        .ui-btn {
            margin-left: em(20);
            min-width: em(160);
        }
    }


</style>
