// imports
// ******************************************
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment'; 
import {Tabs, Tab} from 'vue-tabs-component';
import axios from 'axios';

Vue.use(VueResource);
Vue.use(VueMoment);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
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
import phoneBook from "../components/modal-component/phone-book.vue";

let appData = {
  activePacient: null,
  showImageModal: 0,
  currentShowBox: null,
  currentShowSubBox: null,
  billItem: null,
  paymentResult: null,
  userIsVerify: false,
  currentShowPhoneBook: false,
  callerName: 'a',
  callerPhone: 'a',
  callerType: 'a',
  callerNotes: 'a',
  callDestination: 'a',
  callerTransferLocation: 'NA',
  callerHospital: 'NA',
};


let App = new Vue({
  data: appData,
  // router,
  created(){
    let vm = this;
    vm.activePacient = 0;
    vm.getCallInfoFromURL();
  },
  mounted() {
    let vm = this;
    vm.currentShowBox = 'scheduling';
    vm.spaceWidget =  window.ciscosparkClient();
    Vue.http.get('demo-credentials.json').then((response) => {
      vm.spaceWidget.init(response.data);
    });
  },
  methods: {
    releaseTempDNIS: function(tempDNIS) {
      axios({method: 'post',
        url: 'http://office.healthcareintegrations.com:8900/releaseTempDNIS',
        responseType: 'json',
        data: {tempDNIS}
      }
      )
      .then(function(response){
          console.log('Get_CallInfo_Axios_Response=', response);
          if(response.data.error){
            console.error('Error in Releasing TempDNIS');
          }
          else{
            console.log('TempDNIS released');
          }
      });
    },
    getCallInfoFromURL: function() {
      let vm = this;
      //Get TempDNIS from the url
      var url = new URL(window.location.href);
      var tempDNIS = url.searchParams.get("ani");
      console.log('TempDNIS=', tempDNIS);

      axios({method: 'post',
        url: 'http://office.healthcareintegrations.com:8900/getTempDNIS',
        responseType: 'json',
        data: {tempDNIS}
      }
      )
      .then(function(response){
          console.log('Get_CallInfo_Axios_Response=', response);
          if(response.data.error){
              console.error('Noo TempDNIS Found.')
              vm.callerName = "John Jacobs";
              vm.callerPhone = "214-701-5489";
              vm.callerType = "Patient";
              vm.callerNotes = '';
              vm.activePacient = 0;
          }
          else{
            const responseData = response.data;
            vm.callerName = responseData.callerName;
            vm.callerPhone = responseData.callerPhone;
            vm.callerType = responseData.callerType;
            vm.callerNotes = responseData.notes;
            vm.activePacient = responseData.patientName.indexOf('Sarah') > -1 ? 1 : 0;
            vm.releaseTempDNIS(tempDNIS);
          }
      });
    },
    showSpaceWidget: function () {
      var vm = this;
      var $el = document.getElementById("huddle-room-mount");
      if($el){
        vm.spaceWidget.render($el);
      }
    },
    showPhoneBook: function () {
      var vm = this;
      console.log('PHONE_CLICKED: !!!', vm.currentShowPhoneBook )
      vm.currentShowPhoneBook = !vm.currentShowPhoneBook;
    },
    openNewWindow(url) {
      let strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
      window.open(url, "CNN_WindowName", strWindowFeatures);
    },
    showStatementReview: function(item) {
      this.currentShowBox = 'statement_review';
      console.log('*&&**&(*&(*&*(&', item);
      this.billItem = item;  
    },
    payBill: function(item) {
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
    paymentResult,
    phoneBook
  },
  watch: {
    currentShowBox: function () {
      this.currentShowSubBox = null;
    },
  }
});


// ajax send data form to url - get list ID's

// window.location
// search: "?data=demo-mockup"


function getSearchParameters() {
  var prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}
function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
    var tmparr = prmarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}
var paramsUrl = getSearchParameters();

let urlData = paramsUrl.data? `data/${paramsUrl.data}`:'data/demo-mockup.json';
let downloadURL = 'https://firebasestorage.googleapis.com/v0/b/finesse-2346d.appspot.com/o/mountains.json?alt=media&token=86019233-afb7-4934-946f-2ca00ce2037e';

Vue.http.get(urlData)
  // get access
  .then(
    (response) => {
      console.log(response);
      let data = response.body;

      //
        appData = Object.assign(appData, data);
        App.$mount('#app');
        
      // Vue.http.get(downloadURL).then((res)=>{
      //   data = Object.assign(data, {callInfos: res.body})
      //   appData = Object.assign(appData, data);
      //   App.$mount('#app');
      // })

    });
