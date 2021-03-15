<template>
  <div>
    <button v-on:click="decrement()">-</button>
    {{' ' + counter + ' '}}
    <button v-on:click="increment()">+</button>
  </div>
</template>

<script>
export default {
  name: "QuantityCounter",

  data() {
    return {
      counter: 0,
    };
  },

  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    increment: function () {
      if (this.counter < 10) {
        this.counter += 1;
      } else {
        alert("You cannot buy more than 10 items.");
      }
      this.$emit("counter", this.item, this.counter);
    },

    decrement: function () {
      if (this.counter > 0) {
        this.counter -= 1;
      }
      this.$emit("counter", this.item, this.counter);
    },
  },
};
</script>

<style scoped>
button {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  background-color: orange;
  width: 30px;
  height: 30px;
  margin: 10px;
}
</style>
