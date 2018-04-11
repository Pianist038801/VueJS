// imports
// ******************************************
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMoment from 'vue-moment';

Vue.use(VueResource);
Vue.use(VueMoment);

import loginForm from "../components/login-form/login-form.vue";

let appData = {
  name: null,
};


let App = new Vue({
  data: appData,
  // router,
  created(){
    let vm = this;
    vm.name = 'aaa';
  },
  mounted() {
    let vm = this;
    
  },
  methods: {
  },
  components: {
    loginForm,
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
 