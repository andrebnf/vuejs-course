<template>
  <div class="col-xs-12 col-sm-6">
    <div v-if="!server">
      <p>Please select a server</p>
    </div>
    <div v-else>
      <p>Server #{{ server.id }}</p>
      <p>
        <b>Server Status</b>: {{ server.status }}
      </p>
    </div>
    <hr>
    <button @click="resetStatus()">Reset status</button>
  </div>

</template>

<script>
import { serverBus } from '../../main';

export default {
  data: function() {
    return {
      server: null
    }
  },
  methods: {
    resetStatus() {
      this.server.status = 'Normal';
    }
  },
  created() {
    serverBus.$on('serverSelected', (server) => {
      this.server = server;
    });
  }
}
</script>

<style>

</style>
