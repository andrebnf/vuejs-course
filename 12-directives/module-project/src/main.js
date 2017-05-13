import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  // bind(el, binding, vnode) -> bound it to an element
  // inserted(el, binding, vnode) -> inserted in the parent node
  // updated(el, binding, vnode, oldNode) -> once component is updated (w/o children)
  // componentUpdated(el, binding, vnode, oldNode) -> once component is updated (w children)
  // unbind(el, binding, vnode) -> unbind it to an element
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value;
    let delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }

    setTimeout(() => {
      if (binding.arg === 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
