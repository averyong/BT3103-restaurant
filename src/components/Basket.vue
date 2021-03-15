<template>
  <div>
    Menu:
    <ul>
      <li v-for="item in itemsSelected" v-bind:key="item.name">
        <p>{{item[0]}} x {{item[1]}}</p>
      </li>
    </ul>
    <button v-on:click="findTotal() & sendOrder()"> Add Order </button>
    <p v-show='show'> Subtotal: ${{total}} </p>
    <p v-show='show'> Grand Total: ${{(total * 1.07).toFixed(2)}} </p>
  </div>
</template>

<script>
import database from "../firebase.js";
export default {
  data() {
    return {
      show: false
    }
  },
  props: {
    itemsSelected: {
      type: Array,
    },
  },
  methods: {
    findTotal: function () {
      this.show = true;
      this.total = 0;
      for (let i = 0; i < this.itemsSelected.length; i++) {
        this.total += this.itemsSelected[i][1] * this.itemsSelected[i][2];
      }
      return this.total;
    },
    sendOrder: function() {
      var prawn_count = 0;
      var horfun_count = 0;
      var sambal_count = 0;
      var fried_count = 0;
      var mapo_count = 0;
      var cereal_count = 0;
      for (let i=0; i < this.itemsSelected.length; i++) {
        if (this.itemsSelected[i][0] == "Prawn Omelette") {
          prawn_count += this.itemsSelected[i][1];
        }
        else if (this.itemsSelected[i][0] == "Dry Beef Hor Fun") {
          horfun_count += this.itemsSelected[i][1];
        }
        else if (this.itemsSelected[i][0] == "Sambal KangKung") {
          sambal_count += this.itemsSelected[i][1];
        }
        else if (this.itemsSelected[i][0] == "Pork Fried Rice") {
          fried_count += this.itemsSelected[i][1];
        }
        else if (this.itemsSelected[i][0] == "Mapo Tofu") {
          mapo_count += this.itemsSelected[i][1];
        }
        else {
          cereal_count += this.itemsSelected[i][1];
        }
      }
      //sends current order in the basket to a collection in firebase called "orders"
      database.collection('orders').add({
        "Prawn Omelette": prawn_count,
        "Dry Beef Hor Fun": horfun_count,
        "Sambal KangKung": sambal_count,
        "Pork Fried Rice": fried_count,
        "Mapo Tofu": mapo_count,
        "Cereal Prawn": cereal_count
      }).then(() => {location.reload()});
    },
  }
}
</script>

<style scoped>
button {
  width: 100px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>