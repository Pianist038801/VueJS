<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
 

<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>

<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCT2XVZukLQWSWEsXARA_ibBxV5kgKUiWk",
    authDomain: "finesse-2346d.firebaseapp.com",
    databaseURL: "https://finesse-2346d.firebaseio.com",
    projectId: "finesse-2346d",
    storageBucket: "finesse-2346d.appspot.com",
    messagingSenderId: "127662663362"
  };
  firebase.initializeApp(config);
</script>



<script>
export default {
  name: 'app'
}
</script>
