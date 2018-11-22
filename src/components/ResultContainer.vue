<template>
  <div class="resultContainer">

    <ul v-if="results.length > 0" class="resultsView">
      <li v-for="(result, idx) in store.searchResult" class="resultCard">
        <div class="cardHolder">
          <div class="placeArea" @mouseover="onMouseOver(result, idx)" @mouseleave="onMouseLeave()" @click="onClick(idx, result.place_name, result.id)">
            <div>{{idx+1}}. {{result.place_name}}</div>
            <div>{{result.address_name}}</div>
            <div>{{result.phone}}</div>
          </div>
        </div>
      </li>

      <Paging :totalData="store.meta.pageable_count" :pageCount="5" :dataPerPage="15" @onChange="changePages"/>

    </ul>

    <div v-else class="emptyResult">
      <div>찾으시는 결과가 없습니다. 다른 곳을 검색해보세요.</div>
    </div>

  </div>
</template>

<script>
  import * as actions from '../actions/mapActions'
  import types from '../store/types'
  import Paging from "./Paging";

  export default {
    name: "result-container",
    components: {Paging},
    computed: {
      results: function () {
        return this.$store.state.searchResult;
      },
      meta: function () {
        return this.$store.state.meta;
      },
      store: function () {
        return this.$store.state;
      }
    },
    methods: {
      onMouseOver: function (result, idx) {
        this.$emit('mouseover', idx)
      },
      onMouseLeave: function () {
        this.$emit('mouseleave')
      },
      onClick: function (idx, placeName, id) {
        this.$router.push({name: 'detail', query: {store: placeName, id: id}, params: {placeInfo: this.results[idx]}});
      },
      changePages: function (selectedPage) {
        const {q, near} = this.$route.query;

        actions.getPlace(q, near, selectedPage)
          .then(res => {
            if (res) {
              const data = {q, near};

              this.$store.commit(types.SEARCH_TASTYLOAD, data);
              this.$store.commit(types.SEARCH_RESULT, res);
              this.$router.push({name: 'explore', query: data});

              window.scrollTo(0, 0);
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
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
  .emptyResult {
    background-color: #fff;
    padding: 50% 0;
  }
</style>

