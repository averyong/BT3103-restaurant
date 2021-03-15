<template>
  <div>
    <ul>
      <li v-for="(item, index) in orders" v-bind:key="index"> 
        <div style='width:50%; height:100%; float:left'>
          <p v-for="(value, key, index) in item[1]" v-bind:key="index">
            {{key}} : {{value}}
          </p>  
        </div>
        <div style='margin-left: 50%, height:100%'>
          <button v-bind:id="item[0]" v-on:click="deleteItem($event)"> Delete </button>
          <button v-bind:id="item[0]" v-on:click="route($event)"> Modify </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import database from "../firebase.js";

export default {
  data() {
    return {
      orders: [],
      id: ''
    }
  },
  methods: {
      fetchItems: function() {
          //gets all orders from the order collection and pushes it into the data property "orders"
          database.collection('orders').get().then((querySnapShot) => {
              //let item = {}
              querySnapShot.forEach(doc => {
                  //item = doc.data()
                  this.orders.push([doc.id, doc.data()])
              })
          })
      },
      deleteItem: function(event) {
        let doc_id = event.target.getAttribute("id");
        database.collection('orders').doc(doc_id).delete()
        .then(() => {location.reload()});
      },
      route: function(event) {
        let doc_id = event.target.getAttribute("id");
        this.$router.push({ name: 'modify', params: { id: doc_id } })
      }
  },
  created() {
      this.fetchItems() 
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>

