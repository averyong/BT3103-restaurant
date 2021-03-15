
<template>
  <div>
    <h1 style="text-align: center; color:blue">~ Yi En's Zi Char ~</h1>
    <ul>
      <li><router-link to="/" exact>Home </router-link></li>
      <li><router-link to="/orders" exact>Orders</router-link></li>
      <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
    </ul>
    <router-view></router-view> 

  </div>
</template>

<script>
//import PageContent from "./components/PageContent.vue";
//import Header from './components/Header.vue'

export default {
//  components: {
//    "page-content": PageContent,
//  },
//  components:{
//    'app-header':Header,
    
//  }
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


