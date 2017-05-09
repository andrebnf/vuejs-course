<template lang="html">
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="updateStatus()">Change status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'critical'
    }
  },
  methods: {
    updateStatus() {
      this.status = 'normal'
    }
  }
}
</script>

<style lang="css">
</style>
