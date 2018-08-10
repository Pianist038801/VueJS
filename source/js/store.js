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
       else
        state.pacientName = 'Grace Paz'
    },
    setPacientName (state, name) {
      state.pacientName = name
      if(name=='Johns Jacobs')
        state.pacientId = 0;    
      else
        state.pacientId = 1;
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