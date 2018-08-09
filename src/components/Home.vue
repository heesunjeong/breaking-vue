<template>
  <div class="breakHome">
    <div class="searchContents">
      <div class="nameArea">
        <img src="https://t1.daumcdn.net/cfile/tistory/121214244AC63EA804"/>
        <h1>우리 오늘 맛집 뿌셔? 👊</h1>
        <h5>대한민국에서 먹고, 마시고, 방문할 수 있는 최고의 장소를 찾아보세요. <br/>
          현지 전문가들이 남긴 간단한 팁도 읽어보세요.</h5>
      </div>
      <input type="text" placeholder="검색" v-model="searchWord" v-on:keyup.enter="clickSearch()"/>
      <input type="text" placeholder="지역" v-model="near" v-on:keyup.enter="clickSearch()"/>
      <button v-on:click="clickSearch()">Search</button>
    </div>
  </div>
</template>

<script>
  import Types from '../store/types'
  import * as Utils from '../utils/utils'

  export default {
    name: "Home",
    data() {
      return {
        searchWord: '',
        near: '판교',
      }
    },
    methods: {
      clickSearch: function () {
        const data = {q: this.searchWord, near: this.near};

        if (Utils.isNotNull(this.searchWord) || Utils.isNotNull(this.near)) {
          this.$store.commit(Types.SEARCH_TASTYLOAD, data);
          this.$router.push({name: 'explore', query: data});
        } else {
          alert("검색어를 입력해주세요.")
        }
      }
    }
  }
</script>

<style scoped>
  .breakHome {
    background: #181b50;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .searchContents {
    margin-top: -250px;
    position: absolute;
    top: 50%;
    width: 100%;
  }
  .nameArea {
    color: #FFFFFF;
  }
  .breakHome input[type=text] {
    -webkit-border-radius: 3px;
    border-radius: 3px;
    border: 1px solid transparent;
    color: #333;
    font-family: inherit;
    font-size: 13px;
    height: 20px;
    line-height: 20px;
    margin: 9px 10px 0 0;
    outline: none;
    padding: 10px;
  }
  .breakHome button {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    color: #4e595d;
    font: normal 13px/140% "Helvetica Neue", Helvetica, Verdana, Arial, sans-serif;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    background: #73cf42;
    color: #fff;
    height: auto;
    margin-left: 10px;
    padding: 15px 20px;
    top: 9px;
    width: auto;
    border: 0px;
  }
  h5 {
    font-weight: normal;
  }
</style>
