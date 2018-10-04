<template>
  <div class="component_login">
    <h2>로그인</h2>

    <form class="frm_login" action="/api/login" method="post" ><!--action="/api/login" method="post" @submit="onLogin"-->
      <div>
        <p>이메일</p>
        <div class="decor">
          <input type="text" v-model="email" name="username" placeholder="이메일을 입력하세요."/>
        </div>
      </div>

      <div>
        <p>비밀번호</p>
        <div class="decor">
          <input type="password" v-model="password" name="password" placeholder="비밀번호를 입력하세요."/>
        </div>
      </div>

      <div class="btn_login_all">
        <button type="submit" class="btn_basic">로그인</button>
        <div class="btn_google">
          <!--<img src="../image/goole.png"/>-->
          <button type="button" class="btn_basic" @click="googleLogin">
            <img src="../assets/images/goole.png"/>
            로 그 인
          </button>
        </div>
        <button type="button" class="btn_basic">
          <router-link :to="{name: 'join'}">회원가입</router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

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
        axios.post('/api/login', {
          email: this.email,
          password: this.password
        }).then(res => {
          if (res) {
            console.log(res);
          }
        }).catch(error => {
          alert("로그인에 실패하였습니다.\n이메일 혹 비밀번호를 다시 한번 확인해주세요.")
        })

      },
      googleLogin: function () {
        alert("개발중 '-'");
      }
    }
  }
</script>

<style>
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
  .frm_login > div {
    margin-bottom: 50px;
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
  a:link, a:visited {
    color: #ffffff;
    text-decoration: none;
  }
</style>
