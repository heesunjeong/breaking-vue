<template>
  <div class="resultContainer">
    Search Result Area

    <ul class="resultsView">
      <li v-for="(result, idx) in results" class="resultCard">
        <div class="cardHolder">
          <div>{{idx+1}}. {{result.place_name}}</div>
          <div>{{result.address_name}}</div>
          <div>{{result.phone}}</div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "result-container",
    data() {
      return {}
    },
    computed:
      mapState({
        results: 'searchResult',
      })
  }
</script>

<style scoped>
  .resultContainer {
    position: relative;
    width: 500px;
    z-index: 2;
    position: relative;
  }
  .resultsView {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .resultCard {
    border-bottom: 1px solid #c7cdcf;
    border-left: none;
    margin: 0;
    padding: 0;
    background: #fff;
    border-left: 5px solid transparent;
    margin: 0;
    overflow: hidden;
    padding: 5px .5%;
    position: relative;
    width: auto;
    text-align: left;
  }
  .cardHolder {
    margin: 0;
    padding: 20px;
  }

</style>

