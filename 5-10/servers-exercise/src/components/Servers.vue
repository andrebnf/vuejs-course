<template lang="html">
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="index in 5">
        Server #{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // import ServersPanel from './ServersPanel.vue';
  // export default {
  //   components: {
  //     'my-servers-panel': ServersPanel
  //   }
  // }
}
</script>

<style scoped lang="css">
  div {
    border: 1px solid blue;
  }
</style>
