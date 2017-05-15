<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">

        <h3 class="panel-title">{{ stock.name }} <small>(Price: {{ stock.price }})</small></h3>

        <div class="panel-body">
          <div class="pull-left">
            <input type="number" :class="{danger: insufficientFunds}" class="form-control" placeholder="Quantity" v-model="quantity">
          </div>
          <div class="pull-right">
            <button
                class="btn btn-success"
                @click="buyStock"
                :disabled="!isQuantityValid()">
              {{ insufficientFunds ? 'No funds' : 'Buy' }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };

      this.$store.dispatch('buyStock', order);
      this.quantity = 0;
    },
    isQuantityValid() {
      if (/^[0-9]+$/.test(this.quantity) &&
          parseInt(this.quantity) > 0 &&
          !this.insufficientFunds)
        return true;
      return false;
    }
  },
  computed: {
    insufficientFunds() {
      return (this.quantity * this.stock.price) > this.funds;
    },
    funds() {
      return this.$store.getters.funds;
    }
  }
}
</script>

<style lang="css" scoped>
  .danger {
    border: 1px solid red;
  }
</style>
