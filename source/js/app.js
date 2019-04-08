// imports
// ******************************************
import Vue from 'vue';
import Vuex from 'vuex'

import VueResource from 'vue-resource';
import VueMoment from 'vue-moment'; 
import {Tabs, Tab} from 'vue-tabs-component';
import axios from 'axios';
import Multiselect from '../components/name-select/src/Multiselect.vue';
import boardBlock from '../components/home/board-block.vue';
import store from './store.js';
import _mockup from '../demo-mockup.js';

Vue.use(Vuex)
Vue.use(Multiselect)
Vue.use(boardBlock);
Vue.use(VueResource);
Vue.use(VueMoment);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
import schedulingPage from "pages/scheduling.vue";

import appointment from "../components/appointment/appointment.vue";
import allergies from "../components/allergies/allergies.vue";
import encounters from "../components/encounters/encounters.vue";
import referral from "../components/referral/referral.vue";
import journeyMap from "../components/journey-map/journey-map.vue";
import card from "../components/card/card.vue";

// import css style to app
import '../scss/main.scss';

import '../svg-sprite/_svg-strite';


import sidebarPacient from "../components/sidebar/sidebar.vue";
import patientInfo from "../components/patient-info/patient-info.vue";
import pharmacy from "../components/pharmacy/pharmacy.vue";
import pharmacyForm from "../components/pharmacy-form/pharmacy-form.vue";
import directoryForm from "../components/directory-form/directory-form.vue";
import answeringService from "../components/answering-service/answering-service.vue";
import answeringServiceProvider from "../components/answering-service/answering-service-provider.vue";
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
import blankPage from '../components/empty/blank-page.vue';
import searchCustomer from "../components/modal-component/search-patient.vue";
import updateReferral from "../components/modal-component/update-referral.vue";
import detailReferral from "../components/modal-component/detail-referral.vue";

let appData = {
  showDialog: false,
  epicAddress: 'http://10.3.74.119/openemr/interface/patient_file/encounter/forms.php',
  activePacient: 0,
  journeyOptions: [],
  showImageModal: 0,
  currentShowBox: null,
  currentShowSubBox: null,
  addNewCallerName: false,
  billItem: null,
  paymentResult: null,
  userIsVerify: false,
  currentShowPhoneBook: true,
  currentShowSearchCustomer: false,
  currentShowDetailReferral: false,
  currentShowUpdateReferral: false,
  newCallerName: '',
  callerName: 'a',
  callerPhone: '',
  callerType: 'a',
  callerNotes: '',
  callDestination: 'a',
  callerTransferLocation: 'NA',
  callerHospital: '',
  patientNames: ['a','s'],
  dropdownCallerName: '',
  dropdownCallerType: '',
  isBlank: false,
  dlgID: null,
  transferredFrom: '',
  hospital: '',
  extension: null,
  agentID: '',
  referralIndex: 0,
  epicProcesses: ['Encounter', 'Contracts', 'Assessment', 'Protocol', 'Disposition', 'Care Advice',' Routing'],
};

let App = new Vue({
  data: appData,
  store,
  // router,
  created(){
    let vm = this;
    vm.activePacient = null;
    vm.getCallInfoFromURL();
  },
  mounted() {
    let vm = this;
    vm.currentShowBox = 'home';
    vm.spaceWidget =  window.ciscosparkClient();
    Vue.http.get('demo-credentials.json').then((response) => {
      vm.spaceWidget.init(response.data);
    });
  },
  methods: {
    getCurrentIndexPacient: function(txt) {
      if(txt == 'add New')
      {
        this.newCallerName='';
        this.addNewCallerName = true;
      }
    },
    onKeyPress: function(event) {
      if(event.keyCode==13)
      {
        this.addNewCallerName = false;
        if(this.newCallerName=='')
          return;
        let temp = this.patientNames.slice(0);
        temp.splice(1,0,this.newCallerName);
        this.patientNames = temp;
        
      }
    },
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
      tempDNIS = tempDNIS.slice(-10)
        
      vm.dlgID = url.searchParams.get('dlg');
      vm.extension = url.searchParams.get('ext');
      vm.agentID = url.searchParams.get('agentID');

      console.log('IFRAME_TempDNIS=', tempDNIS);

      // axios({method: 'post',
      //   url: 'http://office.healthcareintegrations.com:8900/getTempDNIS',
      //   responseType: 'json',
      //   data: {tempDNIS}
      // }
      // )
      // .then(function(response){
          const response = {data: {
            "tempDNIS" : "9722345678",
            "status" : "used",
            "destinationNo" : "214-222-3333",
            "destinationName" : "Urologist",
            "patientName" : "Johns Jacobs",
            "patientMRN" : "E234567",
            "callerName" : "Jacob Jones",
            "callerPhone" : "972-444-5555",
            "callerType" : "Patient",
            "notes" : "",
            "phantom1" : "",
            "phantom2" : "",
            "phantom3" : ""
          }};
          console.log('Get_CallInfo_Axios_Response=', response);
          Vue.http.get('data/demo-mockup.json')
          .then(
            (response1) => {
              
          let data = _mockup;
          
          let array = ['EPIC']; 
          data.Customers.forEach((item, i) => {
              if(item.Category=='EPIC')
                  array.push(item.Name);
          });
          array.push('add New')
          data.patientNames = array.slice(0);
          const isPatient = tempDNIS === '2142120192';
          const isProvider = tempDNIS === '9998887777';
          if (isProvider) {
            data.Customers[0].Name = 'Nancy Snyder';
            data.Customers[0].PhotoUrl = 'img/nancy.png';
          }
          if (isProvider || isPatient) {
            data.Customers = data.Customers.slice(0, 1);
          }
          data.isPatient = isPatient;
          data.isProvider = isProvider;

          appData = Object.assign(appData, data);

          

          if (tempDNIS==="") { vm.isBlank = true; }
          else{
            
            const responseData = response.data;
            vm.callerName = responseData.callerName;
            vm.callerPhone = responseData.callerPhone;
            vm.callerType = responseData.callerType;
            vm.callerNotes = responseData.notes;
            const _patientName = responseData.patientName;
            if(_patientName.indexOf('Sarah') > -1) 
              vm.activePacient = 1;
            else if(_patientName.indexOf('Johns') > -1) 
              vm.activePacient = 0;
            else if(_patientName.indexOf('Grace') > -1) 
              vm.activePacient = 2;
            else
              vm.activePacient = 3; 
            vm.callerTransferLocation = responseData.phantom1;
            vm.callerHospital = responseData.phantom2;
            vm.releaseTempDNIS(tempDNIS);
          }
            App.$mount('#app');
          });
         
      // }).catch(function (error) {
      //   // handle error
      //   console.log('GET_CALL_ERROR=', error);
      // });
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
    showSearchCustomer: function () {
      this.currentShowSearchCustomer = !this.currentShowSearchCustomer
    },
    showDetailReferral: function (index) {
      this.referralIndex = index;
      this.currentShowDetailReferral = !this.currentShowDetailReferral
    },
    showUpdateReferral: function (index) {
      this.referralIndex = index;
      this.currentShowUpdateReferral = !this.currentShowUpdateReferral
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
    card,
    appointment,
    allergies,
    encounters,
    referral,
    journeyMap,
    patientInfo,
    pharmacy,
    pharmacyForm,
    directoryForm,
    answeringService,
    answeringServiceProvider,
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
    phoneBook,
    blankPage,
    Multiselect,
    boardBlock,
    searchCustomer,
    updateReferral,
    detailReferral,
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
urlData = _mockup;

// Vue.http.get(urlData)
//   // get access
//   .then(
//     (response) => {
//       console.log(response);
//       let data = response.body;
//         appData = Object.assign(appData, data);
//         App.$mount('#app');

//     });
