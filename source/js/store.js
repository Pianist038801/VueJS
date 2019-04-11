import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)
 

export default new Vuex.Store({
  state: {
    pacientId: 0,
    pacientName: 'Johns Jacobs',
    referrals: [],
    currentPin: '',
    chosenProvider: {
      name: "Dr.Nancy Snyder",
      type: "Provider",
      source: "Epic",
      telephone: "972-444-5452",
      address: "271 Main Street Dallas TX",
      provider: "South Shore Medical",
      providerContact: "N/A",
      providerStatus: "",
      role: "Nurse",
    },
    chosenPatient: {
      name: "Johns Jacobs",
      type: "Patient",
      source: "Epic",
      telephone: "972-778-3754",
      address: "126 Main Street Dallas TX",
      provider: "South Shore Medical",
      providerContact: "Dr.Nate Gove",
      providerStatus: "Not Available",
      role: "Patient",
    },
    chosenCustomer: {
      Name: "Johns Jacobs",
      DateOfBirth: "1981-07-01 00:00:00",
      MRN: 7499281,
      SSN: "***-**-6789",
      PhoneNumber: "+1 214 701 5489",
      PhotoUrl: "img/user.png",
      PrimaryCareProvider: {
        Name: "Mark Williams, MD",
        Phone: "+1 208 975 3874"
      },
      Address: {
        Line1: "3453 T Ave, Fort Worth",
        Line2: "TX 76179, USA"
      },
      Provider: [
        {
          Name: "United Healthcare (UHC Parkway, GA,66552)",
          PhoneNumber: "+1 216 411 8765"
        }
      ],
    }
  },
  mutations: {
    setCurrentPin(state, pin) {
      state.currentPin = pin;
    },
    setReferralData(state, referrals){
      console.log('NEW_REF+', referrals)
      state.referrals = [...referrals]
    },
    setCallerProvider(state, info) {
      state.chosenProvider = info;
      state.chosenPatient = info;
    },
    setCustomerInfo(state, info) {
      state.chosenCustomer = info;
    },
    setPacientId (state,id) {
      // Vue.set(state, 'paciendId', id);
      state.paciendId = id
      if(id==0)
       state.pacientName = 'Johns Jacobs'
      if(id==1)
       state.pacientName = 'Sarah Jones'
      if(id==2)
       state.pacientName = 'Grace Paz'
      if(id==3)
       state.pacientName = 'Opal Lee'
    },
    setPacientName (state, name) {
      state.pacientName = name
      if(name=='Johns Jacobs')
        state.pacientId = 0;
      if(name=='Sarah Jones')
        state.pacientId = 1;
      if(name=='Grace Paz')
        state.pacientId = 2;
      if(name=='Opal Lee')
        state.pacientId = 3;
    }
  },
  actions: {
    setCustomerInfo({commit, state}, customerInfo) {
      commit('setCustomerInfo', customerInfo);
    },
    setCallerProvider({commit, state}, callerInfo) {
      commit('setCallerProvider', callerInfo);
    },
    setCurrentPin({commit, state}, pinIndex) {
      commit('setCurrentPin', pinIndex);
    },
    setReferral({commit, state}, referrals) {
        commit('setReferralData', referrals);
        console.log(referrals);
    },
    setName({commit, state}, name) {
        commit('setPacientName', name);
        console.log('setName', name);
    },
    setId ({commit, state}, id) {
        commit('setPacientId', id)
        console.log('setPacientId', id);
    }
  }
})