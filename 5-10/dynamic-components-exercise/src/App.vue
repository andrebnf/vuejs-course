<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="component = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
        <button @click="component = 'appGreen'" class="btn btn-success">Load Green Template</button>
        <button @click="component = 'appRed'" class="btn btn-danger">Load Red Template</button>
        <hr>
        <component :is="component">Component Text FTW :D</component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data: function() {
    return {
      component: 'app-blue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style>
</style>
