<template>
  <div>
    <div class="setting_p">
      <div class="profile_column"></div>
      <h2>프로필 설정</h2>
      <div class="profile_settings">

        <div class="form_group">
          <div class="name_container">
            <label for="input_name">이름</label>
            <div class="input_deco">
              <input id="input_name" class="name" name="name" type="text" v-bind:value="userInfo.name">
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="email_container">
            <label for="input_email">이메일</label>
            <div class="input_deco">
              <input id="input_email" class="email" name="email" type="text" v-bind:value="userInfo.email">
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="name_container">
            <label for="input_bio">소개</label>
            <div class="input_deco">
              <textarea id="input_bio" class="bio" name="bio" type="text" maxlength tabindex="6"></textarea>
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="name_container">
            <label for="input_gender">성별</label>
            <div class="input_deco">
              <input id="input_gender" class="gender" name="gender" type="text" v-bind:value="userInfo.gender">
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="name_container">
            <label for="input_name">사용자 ID</label>
            {{userInfo.id}}
          </div>
        </div>

        <div class="save_btn form_group">
          <button type="button" class="greenButton">변경사항 저장</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import * as actions from '../actions/userActions';

  export default {
    name: "Settings",
    data() {
      return {
        userInfo: ''
      }
    },
    mounted: function () {
      actions.getUserInfo(this.$router)
        .then(data => {
          this.userInfo = data;
        });

    },
    methods: {
      updateUserInfo: function () {

      }

    }
  }
</script>

<style scoped>
  .setting_p {
    background-color: #ffffff;
    padding: 20px;
  }
  .profile_column {
    display: inline;
    float: right;
    overflow: hidden;
    width: 600px;
    border-bottom: 1px solid #efeff4;
    padding-bottom: 5px;
  }
  .form_group {
    overflow: hidden;
    padding-left: 180px;
  }
  .form_group label {
    color: #4e595d;
    display: inline-block;
    float: left;
    /*font-weight: bold;*/
    line-height: 32px;
    margin-left: -180px;
    padding-right: 20px;
    text-align: right;
    vertical-align: top;
    width: 160px;
  }
  .form_group input {
    background: transparent;
    border: none;
    color: #4e595d;
    font-family: inherit;
    font-size: 13px;
    outline: none;
    width: 100%;
  }
  .form_group textarea {
    background: transparent;
    border: none;
    color: #4e595d;
    font-family: inherit;
    font-size: 13px;
    outline: none;
    width: 100%;
  }
  .form_group .input_deco {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #fcfcfc;
    border: 1px solid #c7cdcf;
    color: #4e595d;
    font-family: inherit;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 8px;
    width: 60%;
    z-index: 10;
    -moz-box-shadow: inset rgba(0, 0, 0, 0.1) 0 0 3px 0;
    -webkit-box-shadow: inset rgba(0, 0, 0, 0.1) 0 0 3px 0;
    box-shadow: inset rgba(0, 0, 0, 0.1) 0 0 3px 0;
  }
  .greenButton {
    color: #4e595d;
    font: normal 13px/140% "Helvetica Neue", Helvetica, Verdana, Arial, sans-serif;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -moz-text-shadow: none;
    -webkit-text-shadow: none;
    text-shadow: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: #00b551;
    border: 1px solid rgba(0, 0, 0, 0.05);
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 14px;
    font-weight: normal;
    height: 30px;
    line-height: 28px;
    padding: 0 10px;
    text-align: center;
    text-transform: none;
    -webkit-appearance: none;
  }

</style>
