<template lang="html">
  <div>
    <h3>User Details</h3>
    <p>User loaded has ID {{ $route.params.id }}</p>
    <router-link tag="button" :to="{ name: 'userEdit', query: { locale: 'en', q: 100 } }" class="btn btn-primary">Edit user</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // data does to exist here

    // next(vm => {
    //   vm.somedata
    // });

    next();
  }
}
</script>

<style lang="css">
</style>
