import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)
 

export default new Vuex.Store({
  state: {
    pacientId: 0,
    pacientName: 'Johns Jacobs',
    referrals: [],
  },
  mutations: {
    setReferralData(state, referrals){
      console.log('NEW_REF+', referrals)
      state.referrals = [...referrals]
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
    },
    setPacientName (state, name) {
      state.pacientName = name
      if(name=='Johns Jacobs')
        state.pacientId = 0;
      if(name=='Sarah Jones')
        state.pacientId = 1;
      if(name=='Grace Paz')
        state.pacientId = 2;
    }
  },
  actions: {
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