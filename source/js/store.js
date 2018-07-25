import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)
 

export default new Vuex.Store({
  state: {
    pacientId: 0,
    pacientName: 'Johns Jacobs',
  },
  mutations: {
    setPacientId (state,id) {
       // Vue.set(state, 'paciendId', id);
       state.paciendId = id
       if(id==0)
        state.pacientName = 'Johns Jacobs'
       else
        state.pacientName = 'Johns Sarah'
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