<template>
  <div id="app">
    <h1>Let's go somewhere!</h1>
    <hr>
    <router-link to='/'>Home</router-link>  <!-- <router-link>不會reload整個頁面 -->
    <router-link to='/users/10'>Users for Team 10</router-link>
    <router-link to='/users/12'>Users for Team 12</router-link>
    <hr>
    <router-view></router-view> <!--路由需要搭配一組元件來做應用。使用 <router-view> 來當作一個 Route 的進入點。 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>


