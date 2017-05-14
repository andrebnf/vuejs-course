<template lang="html">
  <div>
    <h2>User</h2>
    <p>this is the user page</p>
    <button class="btn btn-primary" @click="navigateToHome">Go to home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // id: this.$route.params.id
    }
  },
  props: ['id'],
  // watch: {
  //   '$route'(to, from) {
  //     this.id = to.params.id;
  //   }
  // },
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'home' });
      // this.$router.push('/');
      // this.$router.push({ path: '/' });
    }
  }
}
</script>

<style lang="css">
</style>
