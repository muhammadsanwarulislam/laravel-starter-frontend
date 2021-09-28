<template>
  <!-- Section Cards -->
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="login" @keydown="form.onKeydown($event)">
        <AlertError :form="form"/>
        <AlertSuccess :form="form" v-if="success" message="Login success"/>
        <div class="form-group">
          <input
              v-model="form.phone_number"
              type="text"
              name="phone_number"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Phone Number"/>
          <HasError :form="form" field="Phone Number"/>
        </div>
        <div class="form-group">
          <input
              v-model="form.password"
              type="password"
              name="password"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Password"/>
          <HasError :form="form" field="password"/>
        </div>
        <div class="mt-4 mb-4 clearfix">
          <a class="forgot-pass color-blue font-14 fw-400" href="#"> Forgot password? </a>
        </div>
        <div class="text-right">
          <button
              type="submit"
              class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            Login
          </button>
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <router-link to="/register">Create an account</router-link>
        </p>
      </form>
    </div>
  </section>
  <!-- End Cards -->
</template>

<script>
import Form from 'vform'
import {AlertError, AlertSuccess, HasError} from 'vform/src/components/bootstrap4';

import User from "../Helpers/User";


export default {
  components: {
    HasError, AlertError, AlertSuccess
  },
  data: () => ({
    form: new Form({
      phone_number: '',
      password: '',
    }),
    success: false
  }),

  created() {
    if (User.loggedIn()) {
      window.location = '/dashboard'
    }
  },

  methods: {
    login() {
      this.form.post('/login')
          .then(res => {
            if(res.status === 200){
              this.success = true;
              User.responseAfterLogin(res.data);
            }
          }).catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

</style>