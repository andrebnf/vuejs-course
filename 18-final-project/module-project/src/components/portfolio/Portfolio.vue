<template lang="html">
  <div>
    <div v-if="stocks.length > 0">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
    <div v-else>
      <div class="jumbotron">
        <h3>You have no stocks on your portfolio</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from './Stock.vue';

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    appStock: Stock
  }
}
</script>

<style lang="css">
</style>
