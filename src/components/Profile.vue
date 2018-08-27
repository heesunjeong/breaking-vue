<template>
  <div class="userProfile">
    <div class="userInfo">
      <div class="profilePic">
        ㅇㅇ
      </div>

      <div class="userStat">
        <div class="userName">
          <h1 class="name">Joy Jeong</h1>
          <span class="editProfileLink">
            <router-link :to="{name: 'settings'}">프로필 수정</router-link>
          </span>
        </div>
        <div>hi</div>
      </div>

      <div class="userStatInfo"></div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>
  a {
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
  .userStat .userName .editProfileLink {
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
