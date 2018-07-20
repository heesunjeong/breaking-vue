<template>
  <div class="notFoundContainer">
    <h2>우리 오늘 맛집 뿌셔?</h2>
    <h4>찾으시는 페이지를 찾을 수 없습니다. 다른 멋진 곳들을 찾아보세요.</h4>
    <div class="searchForm">
      <input type="text" v-bind:value="searchWord"/>
      <button>SEARCH</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "not-found"
  }
</script>

<style scoped>
  h4 {
    font-weight: normal;
  }

  .notFoundContainer {
    height: 230px;
    position: relative;
    text-align: center;
    top: 50%;
    width: 32em;
  }

  .searchForm {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: inset rgba(0,0,0,.1) 0 0 3px;
    -webkit-box-shadow: inset rgba(0,0,0,.1) 0 0 3px;
    box-shadow: inset rgba(0,0,0,.1) 0 0 3px;
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


</style>
