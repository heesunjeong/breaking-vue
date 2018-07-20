<template>
  <div class="header">
    <div class="leftSide">
      <div class="nameArea">
        <router-link :to="{name: 'home'}"><h4>🤜BREAK💥TASTYLOAD🤛</h4></router-link>
      </div>
      <div class="inputs">
        <input class="searchInput" type="text" v-model="searchWord" v-on:keyup.enter="enterSearchWord()" placeholder="search"/>
        <input class="searchInput" type="text" v-model="location" v-on:keyup.enter="enterLocation()" placeholder="지역 검색"/>
        <div></div>
      </div>
    </div>
    <div class="rightSide">
      <div v-if="!!userName" class="user">
        <router-link :to="{name: 'userInfo'}">{{userName}}</router-link>
      </div>

      <div v-else class="loggedOutMenu">
        <router-link :to="{name: 'login'}">로그인</router-link> /
        <router-link :to="{name: 'join'}">회원가입</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Types from '../store/types'

  export default {
    name: "break-header",
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      enterSearchWord: function () {
        if (!!this.searchWord) {
          const data = {searchWord: this.searchWord, location: this.location};
          this.$store.commit(Types.SEARCH_TASTYLOAD, data);
        }
      },
      enterLocation: function () {
        if (!!this.searchLocation) {
        }

      }
    },
    computed: {
      searchWord: function () {
        return this.$route.query.searchWord ? this.$route.query.searchWord : ''
      },
      location: function () {
        return this.$route.query.location ? this.$route.query.location : ''
      }
    }
  }
</script>

<style scoped>
  .header {
    background: #0c2946;
    height: 60px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000000;
  }
  .header .leftSide {
    float: left;
    margin-left: 10px;
  }
  .header .leftSide .nameArea {
    float: left;
    color: #ffffff;
  }
  .header .leftSide .inputs {
    float: left;
    color: #ffffff;
  }
  .header .leftSide .inputs {
    float: left;
    color: #ffffff;
  }
  .header .leftSide .inputs .searchInput {
    padding-right: 40px;
    width: 159px;
  }
  .header input[type=text] {
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

  .rightSide {
    float: right;
    margin-right: 10px;
    color: #ffffff;
  }

  .rightSide .user {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    vertical-align: middle;
  }

  .rightSide .loggedOutMenu {
    float: right;
    list-style: none;
    margin: 21px 0 0 0;
  }

</style>
