<template>
  <div class="userProfile">
    <div class="userInfo">
      <div class="profilePic">
        <!--TODO 프로필 이미지-->
        <img src="https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201810%2F20181008144818672.jpg"/>
      </div>

      <div class="userStat">
        <div class="userName">
          <h1 class="name">{{userName}}</h1>
          <span class="name_side editProfileLink">
            <router-link :to="{name: 'settings'}">프로필 수정</router-link>
          </span>
          <span class="name_side logout">
            <span @click="onLogout">로그아웃</span>
          </span>
        </div>
        <div>hi</div>
      </div>

      <div class="userStatInfo"></div>
    </div>
  </div>

</template>

<script>
  import * as Utils from '../utils/utils'
  import {logout} from "../actions/userActions";

  export default {
    name: "Profile",
    data() {
      return {
        userName: Utils.getUserName(),
      }
    },
    methods: {
      onLogout: function () {
        logout(this.$router);
      }
    }
  }
</script>

<style scoped>
  a, a:link, a:visited {
    color: #000;
  }
  .userInfo {
    width: 100%;
    margin: 20px 0;
    background-color: #fff;
    padding: 20px;
  }
  .profilePic {
    margin-right: 20px;
    display: inline-block;
  }
  .userStat {
    display: inline-block;
    vertical-align: top;
  }
  .userStat .userName {
    margin-bottom: 10px;
  }
  .userStat .userName .name {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
  }
  .userStat .userName .name_side {
    position: relative;
    top: -4px;
    margin-left: 10px;
  }
  .userStatInfo {
    display: inline-block;
    margin-top: 20px;
    text-align: right;
    vertical-align: top;
    width: 410px;
  }
</style>
