<template>
  <div>
    <button class="btn btn-primary" @click="increment(100)">Increment</button>
    <button class="btn btn-primary" @click="decrement(100)">Decrement</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  // methods: {
  //   increment() {
  //     this.$store.state.counter++;
  //   },
  //   decrement() {
  //     this.$store.state.counter--;
  //   }
  // }

  // -- mutations
  // methods: {
  //   ...mapMutations(['increment', 'decrement'])
  // }

  // -- actions
  methods: {
    ...mapActions(['increment', 'decrement'])
    // , increment(by) {
    //   this.$store.dispatch('increment', by)
    // }
  }
}
</script>
