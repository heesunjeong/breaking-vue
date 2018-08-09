<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        msg: '우리 오늘 맛집뿌셔?'
      }
    }
  }
</script>

<style>
  body {
    display: block;
    margin: 0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 0;
    margin: 0;
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none
  }
  a:hover, a:active {
    text-decoration: none;
    color: #fff;
    background-color: #f59000;
  }

  .btn_basic {
    width: 100px;
    height:30px;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: bold;
    background-color: #0c2946;
  }

</style>
