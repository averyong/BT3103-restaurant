<template>
  <div>
    <p v-for="(value, key, index) in datapacket" v-bind:key="index">
        {{key}} : {{value}}
        <br>
        <input type="number" min="0" placeholder="0" v-bind:id="index"> 
    </p>  
    <button v-on:click="updateOrder()"> Update Order </button>
  </div>
</template>

<script>

import database from "../firebase.js";

export default {
  data() {
    return {
      datapacket: [],
    }
  },
  props: {
    id: {
      type: String,
    },
  },
  methods: {
      fetchItems: function() {
          database.collection('orders').doc(this.id).get().then((querySnapShot) => {
              this.datapacket = querySnapShot.data();
          });
      },
      updateOrder: function() {
          var copy = {...this.datapacket}
          //let copy = Object.assign({}, this.datapacket[0]);
          for (const key in copy[1]) {
              copy[1][key] = document.getElementById(key).value;
          }
          database.collection('orders').doc(this.id).set(copy)
          .then(() => {this.$router.push('/orders')})
      }
  },    
    created() {
      this.fetchItems() 
  },
};
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