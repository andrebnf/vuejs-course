import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value){
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('created from global mixin');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
