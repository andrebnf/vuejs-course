<template>
  <div id="app">
    <h1>Custom directives</h1>
    <p v-highlight:background.delayed="'blue'">color this</p>
    <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">color this</p>
  </div>
</template>

<script>
export default {
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers['delayed']) {
          delay = 3000;
        }
        if (binding.modifiers['blink']) {
          let mainColor = binding.value.mainColor,
            secondColor = binding.value.secondColor,
            currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor = currentColor === secondColor ? mainColor : secondColor;
              if (binding.arg === 'background') {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      }
    }
  }
}
</script>

<style>
</style>
