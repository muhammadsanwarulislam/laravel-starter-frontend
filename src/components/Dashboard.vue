<template>
  <!-- Start Wrapper -->
  <div class="wrapper">

    <!-- Section Cards -->
    <section class="cards-block">
      <div class="container">
        <div class="row">
          <!-- CARD -->
          {{user.data.data.name}}
        </div>
        <!-- END ROW -->
      </div>
      <!--/ End Container -->
    </section>
    <!-- End Cards -->
  </div>
  <!-- End Wrapper -->
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    user: []
  }),

  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      axios.get('/user').then((res) => {
        if (res.status === 200) {
          this.user = res;
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