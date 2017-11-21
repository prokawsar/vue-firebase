<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <input type="text">
    <button type="submit">Add Me</button>
  </div>
</template>

<script>
import { nameRef } from './firebase'

export default {
  name: 'app'
  
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
