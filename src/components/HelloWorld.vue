<template>
  <div class="mainWrap">
    <break-header v-bind:userName="userName"></break-header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import * as Utils from "../utils/utils";

  export default {
    name: 'HelloWorld',
    components: {
      'break-header': Header
    },
    data() {
      return {
        userName: this.userName = Utils.getUserName()
      }
    },
    updated: function() {
      console.log("updated...")
      this.userName = Utils.getUserName();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .mainWrap {
    padding: 60px 0 60px 0;
    background-color: #f3f3f3;
    height: 100%;
  }

</style>
