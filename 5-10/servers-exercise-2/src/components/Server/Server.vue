<template lang="html">
  <li class="list-group-item" style="cursor: pointer" @click="serverSelected()">
    Server #{{ server.id }} <span style="float: right"><b>{{ server.status }}</b></span>
  </li>

</template>

<script>
import { serverBus } from '../../main.js';

export default {
  props: ['server'],
  methods: {
    serverSelected() {
      serverBus.$emit('serverSelected', this.server);
    }
  }
}
</script>

<style lang="css">
</style>
