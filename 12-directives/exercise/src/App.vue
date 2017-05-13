<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button v-customOn:click="clicked">Click Me</button>
      </div>
      <hr>
      <div style="background-color: lightgreen; width: 100px; height: 100px"
          v-customOn:mouseenter="mouseEnter"
          v-customOn:mouseleave="mouseLeave">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding, settings) {
        // el.onclick = function() {
        //   binding.value();
        // }

        const type = binding.arg,
          fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert('I was clicked');
    },
    mouseEnter() {
      console.log('Mouse enter');
    },
    mouseLeave() {
      console.log('Mouse leave');
    }
  }
}
</script>

<style>
</style>
