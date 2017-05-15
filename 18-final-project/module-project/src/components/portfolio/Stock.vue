<template lang="html">
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">

        <h3 class="panel-title">
          {{ stock.name }} <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }}</small>
        </h3>

        <div class="panel-body">
          <div class="pull-left">
            <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
          </div>
          <div class="pull-right">
            <button
                class="btn btn-success"
                @click="sellStock"
                :disabled="!isQuantityValid()">
              {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: parseInt(this.quantity)
      };

      this.placeSellOrder(order);
      this.quantity = 0;
    },
    isQuantityValid() {
      if (/^[0-9]+$/.test(this.quantity) &&
          parseInt(this.quantity) > 0 &&
          !this.insufficientQuantity)
        return true;
      return false;
    }
  }
}
</script>

<style lang="css">
</style>
