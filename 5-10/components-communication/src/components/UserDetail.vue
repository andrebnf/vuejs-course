<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Username: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName()">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  props: {
    myName: { type: String, required: true }, // [String, Array]
    // for Object and Array types, `default` is a function that returns the prop
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName.split('').reverse().join('');
    },
    resetName() {
      this.myName = 'André';
      this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => this.userAge = age );
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
