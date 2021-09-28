<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Register
      </h1>
      <form class="auth-form" @submit.prevent="register" @keydown="form.onKeydown($event)">
        <AlertError :form="form"/>
        <AlertSuccess :form="form" v-if="success" message="User registered successfully"/>
        <div class="form-group">
          <input
              v-model="form.name"
              type="text"
              name="name"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Full Name"
          />

          <HasError :form="form" field="name"/>

        </div>

        <div class="form-group">
          <input
              v-model="form.phone_number"
              type="text"
              name="phone_number"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Phone Number"
          />

          <HasError :form="form" field="phone_number"/>

        </div>

      

        <div class="form-group">
          <input
              v-model="form.email"
              type="text"
              name="email"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Email"
          />

          <HasError :form="form" field="email"/>

        </div>
        <div class="form-group">
          <input
              v-model="form.password"
              type="password"
              name="password"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Password"
          />

          <HasError :form="form" field="password"/>

        </div>
        <div class="form-group">
          <input
              v-model="form.password_confirmation"
              type="password"
              name="password_confirmation"
              class="form-control form-control-lg font-14 fw-300"
              placeholder="Confirm Password"
          />
        </div>

        <div class="text-right">
          <button
              type="submit" :disabled="form.busy"
              class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
            Register
          </button>

        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </section>
  <!-- End Cards -->
</template>

<script>
import Form from 'vform'
import {AlertError, AlertSuccess, HasError} from 'vform/src/components/bootstrap4';

export default {
  components: {
    HasError, AlertError, AlertSuccess
  },
  data: () => ({
    form: new Form({
      phone_number:'',
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }),
    success: false
  }),

  methods: {
    register() {
      this.form.post('/register')
          .then(res => {
            if(res.status ===200){
              this.success = true;
              window.location = '/login'
            }

          }).catch(err => {
        console.log(err);
      })
    }
  }

}
</script>

<style scoped>

</style>