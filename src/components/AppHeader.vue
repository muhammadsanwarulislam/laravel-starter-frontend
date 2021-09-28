<template>
  <!-- Start Header -->
  <header class="fixed-topx">
    <nav class="navbar navbar-expand-lg navbar-dark align-items-center">

      <router-link to="/" class="navbar-brand text-uppercase fw-500">Starter frontend</router-link>


      <button
          class="navbar-toggler mr-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav font-14 fw-300">
          <li class="nav-item active">
            <router-link to="/dashboard">Users</router-link>
          </li>
        </ul>
        <div class="header-search">
          <form action="" method="">
            <div class="form-group">
              <input
                  type="text"
                  autocomplete="OFF"
                  name="search"
                  class="form-control text-white font-14 fw-300"
                  placeholder="Search and hit enter..."
              />
              <div class="search-icon text-white">
                <i class="fas fa-search"></i>
              </div>
            </div>
          </form>
        </div>
        <div
            class="upload-shot white-path font-14 fw-500 text-uppercase mr-auto"
        >
        </div>
      </div>

      <!-- Before Login -->
      <ul class="before-login font-14 fw-300 text-uppercase" v-if="!isLoggedIn">
        <li>
          <!--          <a href="#">Sign up</a>-->
          <router-link to="/register">Sign Up</router-link>
        </li>
        <li>
          <!--          <a href="#">Sign in</a>-->
          <router-link to="/login">Sign In</router-link>
        </li>
      </ul>
      <!-- End Before Login -->

      <!-- After Login -->
      <ul class="author-page white-path" v-else>
        <!-- Profile Dropdown -->
        <li class="dropdown">
          <a
              href="#"
              class="dropdown-toggle text-white"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
            <img
                class="user-thumb"
                src="assets/images/profile.png"
                alt="Neba Funwi-Gabga"/>

            <div class="usr-info">
              <span class="user-name font-14 fw-500">
                {{ name }}
              </span>
              <span class="user-deg font-10 fw-300">
                Sr. Software Engineer
              </span>

              <span class="down-chevron">
                <i class="fa fa-angle-down"></i>
              </span>
            </div>
          </a>

          <div
              class="dropdown-menu user-dropdown font-14 fw-500"
              aria-labelledby="userDropdown">

            <div
                class="dropdown-title-group font-12 fw-500">
              <span class="dropdown-title text-uppercase">
                Your Account
              </span>
            </div>

            <a class="dropdown-item mt-28"
               href="#"
               title="Profile">
              <i class="fa fa-user"></i>
              Profile
            </a>

            <div class="dropdown-divider"></div>

            <a class="dropdown-item" href="#" @click="logOut" title="Sign Out">
              <i class="fa fa-lock"></i>
              Sign Out
            </a>
          </div>
        </li>
        <!-- End Profile Dropdown -->
      </ul>
      <!-- End After Login -->
    </nav>
  </header>
  <!-- End Header -->
</template>

<script>
import User from "../Helpers/User";

export default {
  data: () => ({
    isLoggedIn: false,
    name: null
  }),
  methods: {
    logOut() {
      User.logout();
    }
  },
  created() {
    if (User.loggedIn()) {
      this.isLoggedIn = true;
      this.name = User.username()
    }
  },
  mounted() {
    // console.log(this.name);
  }
}
</script>

<style scoped>

</style>