<template>
  <div class="container">
    <h2>우리 오늘 맛집 뿌셔?</h2>
    <h4>찾으시는 페이지를 찾을 수 없습니다. </h4>
    <h5>다른 멋진 곳들을 찾아보세요.</h5>
    <div class="searchForm">
      <input type="text" class="searchInput" v-model="searchWord"/>
      <button class="searchButton">SEARCH</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "not-found",
    data() {
      return {
        searchWord: ''
      }
    }
  }
</script>

<style scoped>
  h4 {
    font-weight: normal;
  }
  .container {
    height: 230px;
    margin: 45% auto 0;
    position: relative;
    text-align: center;
    top: 30%;
    width: 32em;
  }
  .searchInput {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: inset rgba(0, 0, 0, .1) 0 0 3px;
    -webkit-box-shadow: inset rgba(0, 0, 0, .1) 0 0 3px;
    box-shadow: inset rgba(0, 0, 0, .1) 0 0 3px;
    background: #fcfcfc;
    border: 1px solid #d9d9d9;
    color: #4c4c4c;
    font-family: inherit;
    font-size: 13px;
    margin: 0 10px 10px 0;
    outline: none;
    padding: 7px;
    width: 220px;
    -moz-transition-duration: .33s;
    -moz-transition-property: background, border, color, opacity, box-shadow;
    -webkit-transition-duration: .33s;
    -webkit-transition-property: background, border, color, opacity, box-shadow;
    transition-duration: .33s;
    transition-property: background, border, color, opacity, box-shadow;
  }
  .searchButton {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #A7E300;
    background: -webkit-gradient(linear, left top, left bottom, from(#A7E300), to(#99D100));
    background: -moz-linear-gradient(top, #A7E300, #99D100);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#A7E300', endColorstr='#99D100');
    border: 1px solid #87b800;
    color: #fff;
    cursor: pointer;
    font-family: inherit;
    font-size: 11px;
    font-weight: bold;
    height: 30px;
    line-height: 28px;
    padding: 0 10px;
    text-align: center;
    text-shadow: rgba(0, 0, 0, .1) 0 -1px 0;
    text-transform: uppercase;
  }
</style>
