<template lang="html">
  <div>
    <h3>User Edit</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Q: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">
      Confirm
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm('Are you sure?')) {
        next();
      }
    }
  }
}
</script>

<style lang="css">
</style>
