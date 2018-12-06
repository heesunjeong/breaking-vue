<template>
  <div class="change_password">
    <h2>비밀번호 변경</h2>
    <div>
      <label for="input_password">현재 비밀번호</label>
      <div class="decor">
        <input id="input_password" type="password" class="input_txt" v-model="oldPassword"/>
      </div>
    </div>

    <div>
      <label for="input_new_password">새로운 비밀번호</label>
      <div class="decor">
        <input id="input_new_password" type="password" class="input_txt" v-model="newPassword"/>
      </div>
    </div>

    <div>
      <label for="input_new_password_check">새로운 비밀번호 확인</label>
      <div class="decor">
        <input id="input_new_password_check" type="password" class="input_txt" v-model="checkPassword"/>
      </div>
    </div>

    <button type="button" class="btn_basic" @click="updatePassword">수정</button>

  </div>
</template>

<script>
  import * as actions from '../actions/userActions';

  export default {
    name: "ChangePassword",
    data() {
      return {
        oldPassword: '',
        newPassword: '',
        checkPassword: ''
      }
    },
    methods: {
      updatePassword: function () {
        if (this.checkValidate()) {
          actions.updatePassword(password, (data) => {
            if (data) {
              alert("비밀번호가 변경되었습니다.");
              this.$router.push({name: 'profile'});
            } else {
              this.invalidPassword("현재 비밀번호가 일치하지 않습니다.");
            }
          });
        }
      },

      checkValidate: function () {
        if (this.newPassword !== this.checkPassword) {
          this.invalidPassword("새로운 비밀번호가 일치하지 않습니다.");
          return false;

        } else if (this.oldPassword == '' || this.newPassword == '' || this.checkPassword == '') {
          alert("비밀번호를 입력해주세요.");
          return false;

        } else {
          return true;
        }
      },

      invalidPassword: function (msg) {
        this.oldPassword = '';
        this.newPassword = '';
        this.checkPassword = '';

        alert(msg);
      },

    }
  }
</script>

<style scoped>
  .change_password {
    min-height: 300px;
    padding: 10px 74px 150px 74px;
    background: #fff;
    overflow: hidden;
    width: 410px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    margin: auto;
  }
  .change_password > div {
    margin-bottom: 17px;
    text-align: left;
    margin-bottom: 30px;
  }
  .change_password label {
    font-size: 15px;
  }
  h2 {
    color: #4e595d;
    font-size: 24px;
    line-height: normal;
    margin: 0 auto 30px;
    font-weight: normal
  }
  .decor {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-color: #efeff4;
    background: #efeff4;
    background-position: 12px 12px;
    background-repeat: no-repeat;
    /*margin-right: 10px;*/
    padding: 10px 10px 10px 40px;
    position: relative;
  }
  .decor input, textarea {
    background: transparent;
    border: none;
    color: #4e595d;
    font-family: inherit;
    font-size: 13px;
    outline: none;
    width: 100%;
  }
  .input_txt {
    width: 100%;
    height: 30px;
    font-size: 15px;
  }
</style>
