<template>
  <div id="app">
    {{ text | toUppercase | to-lowercase }}
    <hr>
    <button @click="fruits.push('berries')">add fruit</button>
    <input v-model="filterText">
    <ul>
      <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
    <hr>
    <app-list></app-list>
  </div>
</template>

<script>
import List from './List.vue';
import { fruitMixin } from './fruitMixin';

export default {
  name: 'app',
  mixins: [fruitMixin],
  data () {
    return {
      text: 'Welcome to an awesome APP!',
    }
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>
</style>
