<template>
  <div id="app">
    <router-link to="/main">首页</router-link>
    <router-link to="/content">内容</router-link>
<!--   router-view>:展示模板内容 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Content from "./components/Content";

export default {
  comments:{
    Content,
  },
  name: 'App',

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
