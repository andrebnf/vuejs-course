export const fruitMixin = {
  data () {
    return {
      fruits: ['apple', 'banana', 'mango', 'melon'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((f) => { return f.match(this.filterText) });
    }
  },
  created() {
    console.log('created');
  }
}
