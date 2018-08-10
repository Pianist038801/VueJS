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

Vue.use(Vuex)
Vue.use(Multiselect)
Vue.use(boardBlock);
Vue.use(VueResource);
Vue.use(VueMoment);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
import schedulingPage from "pages/scheduling.vue";

import appointment from "../components/appointment/appointment.vue";
import referral from "../components/referral/referral.vue";
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
import blankPage from '../components/empty/blank-page.vue';
import searchPatient from "../components/modal-component/search-patient.vue";
import updateReferral from "../components/modal-component/update-referral.vue";
import detailReferral from "../components/modal-component/detail-referral.vue";

let appData = {
  activePacient: 1,
  showImageModal: 0,
  currentShowBox: null,
  currentShowSubBox: null,
  addNewCallerName: false,
  billItem: null,
  paymentResult: null,
  userIsVerify: false,
  currentShowPhoneBook: false,
  currentShowSearchPatient: false,
  currentShowDetailReferral: false,
  currentShowUpdateReferral: false,
  newCallerName: '',
  callerName: 'a',
  callerPhone: '',
  callerType: 'a',
  callerNotes: '',
  callDestination: 'a',
  callerTransferLocation: 'NA',
  callerHospital: 'NA',
  patientNames: ['a','s'],
  dropdownCallerName: '',
  isBlank: false,
  dlgID: null,
  transferredFrom: '',
  hospital: '',
  extension: null,
  agentID: '',
  referralIndex: 0,
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
    vm.activePacient = 0;
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

      axios({method: 'post',
        url: 'http://office.healthcareintegrations.com:8900/getTempDNIS',
        responseType: 'json',
        data: {tempDNIS}
      }
      )
      .then(function(response){
          console.log('Get_CallInfo_Axios_Response=', response);
          Vue.http.get('data/demo-mockup.json')
          .then(
            (response1) => {
              console.log(response1);
              let data = response1.body;
              
              let array = ['EPIC']; 
              data.Patients.forEach((item, i) => {
                  if(item.Category=='EPIC')
                      array.push(item.Name);
              });
              array.push('add New')
              data.patientNames = array.slice(0);

                appData = Object.assign(appData, data);
                
                if(response.data.error){
                  console.error('Noo TempDNIS Found.')
                  if(tempDNIS=="") // Blank Gadget
                  {
                    vm.isBlank=true;
                  }
                  else  //Default Gadget
                  {
                    vm.callerName = appData.callerInfo.callerName;
                    vm.callerPhone = appData.callerInfo.callerNo;
                    vm.callerType = appData.callerInfo.callerType;
                    vm.callerNotes = '';
                    vm.activePacient = 0;
                  }
              }
              else{
                const responseData = response.data;
                vm.callerName = responseData.callerName;
                vm.callerPhone = responseData.callerPhone;
                vm.callerType = responseData.callerType;
                vm.callerNotes = responseData.notes;
                vm.activePacient = responseData.patientName.indexOf('Sarah') > -1 ? 1 : 0;
                vm.callerTransferLocation = responseData.phantom1;
                vm.callerHospital = responseData.phantom2;
                vm.releaseTempDNIS(tempDNIS);
              }
                App.$mount('#app');

            });
         
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
    showSearchPatient: function () {
      this.currentShowSearchPatient = !this.currentShowSearchPatient
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
    appointment,
    referral,
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
    phoneBook,
    blankPage,
    Multiselect,
    boardBlock,
    searchPatient,
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

// Vue.http.get(urlData)
//   // get access
//   .then(
//     (response) => {
//       console.log(response);
//       let data = response.body;
//         appData = Object.assign(appData, data);
//         App.$mount('#app');

//     });
