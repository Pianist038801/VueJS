<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
    </v-layout>
  </v-container>
</template>

<script> 

export default {
  name: 'signin',
  data: () => ({
    errorMessages: [],
    e1: true,
    loading: false,
    email: null,
    password: null,
    emailRules: [
      v => !!v || 'Email is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),

  methods: {
  }
}
</script>
