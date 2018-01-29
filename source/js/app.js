// imports
// ******************************************
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment';

Vue.use(VueResource);
Vue.use(VueMoment);

import schedulingPage from "pages/scheduling.vue";

import appointment from "../components/appointment/appointment.vue";
import journeyMap from "../components/journey-map/journey-map.vue";


// import css style to app
import '../scss/main.scss';

import '../svg-sprite/_svg-strite';


import sidebarPacient from "../components/sidebar/sidebar.vue";
import patientInfo from "../components/patient-info/patient-info.vue";
import pharmacy from "../components/pharmacy/pharmacy.vue";
import insuranceVerification from "../components/insurance-verification/insurance-verification.vue";
import makeAppointment from "../components/make-appointment/make-appointment.vue";
import cManagment from "../components/case-managment/case-managment.vue";
import cManagmentIncidents from "../components/case-managment/case-managment-incidents.vue";
import cManagmentIncident from "../components/case-managment/case-managment-incident.vue";
import patientBilling from "../components/billing/patient-billing.vue";
import billingHistory from "../components/billing/billing-history.vue";
import statementReview from "../components/billing/statement-review.vue";
import paymentConfirmation from "../components/billing/payment-confirmation.vue";
import paymentResult from "../components/billing/payment-result.vue";

import create from '../service/incident/create';
import { STATES } from '../service/incident/model';
import searchByNum from '../service/incident/search-num';
import updateStatus from '../service/incident/update-status';
import updateAssign from '../service/incident/update-assign';
import searchToday from '../service/incident/search-today';
import searchWeek from '../service/incident/search-week';

let appData = {
  activePacient: null,
  showImageModal: 0,
  currentShowBox: null,
  currentShowSubBox: null,
  billItem: null,
  paymentResult: null,
  userIsVerify: false,
};

export default {
  init() {
    let App = new Vue({
      data: appData,
      // router,
      created() {
        let vm = this;
        vm.activePacient = 0;
      },
      mounted() {
        let vm = this;
        vm.currentShowBox = 'case-managment';
        vm.spaceWidget = window.ciscosparkClient();
        Vue.http.get('demo-credentials.json').then((response) => {
          vm.spaceWidget.init(response.data);
        });
      },
      methods: {
        showSpaceWidget: function () {
          var vm = this;
          var $el = document.getElementById("huddle-room-mount");
          if ($el) {
            vm.spaceWidget.render($el);
          }
        },
        openNewWindow(url) {
          let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
          window.open(url, "CNN_WindowName", strWindowFeatures);
        },
        showStatementReview: function (item) {
          this.currentShowBox = 'statement_review';
          console.log('*&&**&(*&(*&*(&', item);
          this.billItem = item;
        },
        payBill: function (item) {
          this.currentShowBox = 'payment_confirmation';
          this.billItem = item;
        },
        showPaymentResult: function (item) {
          this.currentShowBox = 'payment_result';
          console.log('SDFSDF', item);
          this.paymentResult = item;
        },
        showImage: function () {
          this.showImageModal = this.showImageModal + 1;
        },
        goBack: function (item) {
          this.currentShowBox = 'billing';

        },
        begin: function ({ phone } = { phone: "9994232121" }) {
          // call create api and render the top portion of the page
          const incident = {
            "caller_id": "Katina Ramano",
            "u_hospital": "STL eHospitalist",
            "u_workgroup": "eICU",
            "u_team": "Team 1",
            "u_nurse_name": "Alice",
            "u_phone_number": phone,
            "u_patient_last_name": "Ramano",
            "u_problem": "Not Given",
            "u_urgent": "Yes",
            "u_bed_number": "123",
            "u_notes": "Test - Rajeev",
          };
          create(incident) 
        },
        end: function() {
          // clear the state
          alert('3')
        }
      },
      components: {
        sidebarPacient,
        appointment,
        journeyMap,
        patientInfo,
        pharmacy,
        insuranceVerification,
        makeAppointment,
        cManagment,
        cManagmentIncidents,
        cManagmentIncident,
        patientBilling,
        billingHistory,
        statementReview,
        paymentConfirmation,
        paymentResult
      },
      watch: {
        currentShowBox: function () {
          this.currentShowSubBox = null;
        }
      }
    });


    // ajax send data form to url - get list ID's

    // window.location
    // search: "?data=demo-mockup"


    function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
    }
    function transformToAssocArray(prmstr) {
      var params = {};
      var prmarr = prmstr.split("&");
      for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
      }
      return params;
    }
    var paramsUrl = getSearchParameters();

    let urlData = paramsUrl.data ? `data/${paramsUrl.data}` : 'data/demo-mockup.json';


    Vue.http.get(urlData)
      // get access
      .then(
      (response) => {
        console.log(response);
        appData = Object.assign(appData, response.body);
        App.$mount('#app');
      });
  },


};