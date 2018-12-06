<template>
  <div class="component_login">
    <h2>로그인</h2>

    <div class="frm_login"><!--action="/api/login" method="post" @submit="onLogin"-->
      <div class="login_pad">
        <p>이메일</p>
        <div class="decor">
          <input type="text" v-model="email" name="username" placeholder="이메일을 입력하세요." @keyup.enter="onLogin"/>
        </div>
      </div>

      <div class="login_pad">
        <p>비밀번호</p>
        <div class="decor">
          <input type="password" v-model="password" name="password" placeholder="비밀번호를 입력하세요." @keyup.enter="onLogin"/>
        </div>
      </div>

      <div class="find_password">
        <router-link :to="{name: 'findPassword'}">비밀번호 찾기</router-link>
      </div>

      <div class="btn_login_all login_pad">
        <button type="submit" class="btn_basic" @click="onLogin">로그인</button>

        <div class="btn_google">
          <!--<img src="../image/goole.png"/>-->
          <button type="button" class="btn_basic" @click="googleLogin">
            <img src="../assets/images/goole.png"/>
            로 그 인
          </button>
        </div>

        <button type="button" class="btn_basic" @click="onJoin">회원가입</button>
      </div>

    </div>
  </div>
</template>

<script>
  import * as actions from '../actions/userActions';

  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onLogin: function () {
        if (this.validate()) {
          actions.login(this.email, this.password, (data) => {
            localStorage.setItem('user_token', JSON.stringify(data));
            this.$router.push({name: 'home'});
          })
        }
      },
      googleLogin: function () {
        alert("개발중 '-'");
      },
      onJoin: function () {
        this.$router.push({name: 'join'});
      },
      validate: function () {
        if (!this.email || !this.password) {
          alert("이메일 혹은 비밀번호를 입력해주세요.");
          return false;
        }
        else {
          return true;
        }
      }
    }
  }
</script>

<style scoped>

  .btn_google {
    width: 150px;
    float: left;
  }
  .btn_google img {
    width: 50px;
    height: 25px;
    float: left;
  }
  .btn_google .btn_basic {
    border: 0px;
    background-color: #CE3732;
    width: 130px;
    line-height: 24px;
  }
  .frm_login {
    margin: 40px;
  }
  .frm_login p {
    font-size: 15px;
    font-weight: bold;
    margin: 0px;
    text-align: left;
  }
  .frm_login input {
    width: 100%;
    height: 30px;
    font-size: 15px;
  }
  .component_login {
    min-height: 300px;
    padding: 40px;
    width: 620px;
    background: #fff;
    overflow: hidden;
    width: 410px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .frm_login > .login_pad {
    margin-bottom: 30px;
  }
  .btn_login_all button:first-child {
    float: left;
    margin-right: 10px;
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
  .decor input {
    background: transparent;
    border: none;
    color: #4e595d;
    font-family: inherit;
    font-size: 13px;
    outline: none;
    width: 100%;
  }
  h2 {
    color: #4e595d;
    font-size: 24px;
    line-height: normal;
    margin: 0 auto 30px;
    font-weight: normal
  }
  .btn_basic {
    letter-spacing: 0;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    background: #0a2847;
    border: none;
    clear: both;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    padding: 5px;
    width: 100px;
    min-width: 85px;
    width: auto;
  }
  button > a:link, a:visited {
    color: #ffffff;
    text-decoration: none;
  }
  .find_password {
    text-align: left;
    padding: 10px 0 20px 0;
  }
  .component_login .find_password a:link, a:visited {
    color: #0a2747;
    text-decoration: none;
  }
</style>
