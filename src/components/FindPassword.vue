<template>
  <div class="container">
    <div class="find_password">
      <h2>비밀번호 찾기</h2>
      <p>새로운 비밀번호를 이메일로 보내드립니다. 이메일 주소를 입력하십시오.</p>
      <hr>
      <div class="email_form">
        <label for="email">이메일주소:</label>
        <input id="email" type="email" name="email" class="formStyle" v-model="email" placeholder="Enter your email" @keyup.enter="onConfirm"/>
        <div>
          <input type="button" class="greenButton" tabindex="5" value="확인" @click="onConfirm"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as actions from '../actions/userActions';

  export default {
    name: "FindPassword",
    data() {
      return {
        email: '',
      }
    },
    methods: {
      onConfirm: function () {
        if (this.validate()) {
          actions.findPassword(this.email, () => {
            alert('이메일로 새로운 비밀번호를 보냈습니다. :)');
            this.$router.push({name: 'login'});
          })
        } else {
          alert('이메일 주소를 다시 확인해주세요.');
          this.email = '';
        }
      },
      validate: function () {
        if (this.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          return true;
        } else {
          return false;
        }
      }

    }
  }
</script>

<style scoped>
  .container {
    background: #fff;
    display: inline;
    float: left;
    overflow: hidden;
    width: 440px;
    display: block;
    float: none;
    padding: 20px;
    -moz-box-shadow: #c7cdcf 0 1px 0 0;
    -webkit-box-shadow: #c7cdcf 0 1px 0 0;
    box-shadow: #c7cdcf 0 1px 0 0;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: #fff;
    position: relative;
    z-index: 2;
    margin: 100px auto;
  }
  h2 {
    line-height: 22px;
    font-size: 21px;
    font-weight: 500;
  }
</style>
