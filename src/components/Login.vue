<template>
  <div class="component_login">
    <h1>로그인</h1>

    <form class="frm_login" action="/user_login" method="post">
      <div>
        <p>이메일</p>
        <input type="text" v-model="email" name="username" placeholder="이메일을 입력하세요."/>
      </div>

      <div>
        <p>비밀번호</p>
        <input type="password" v-model="passwd" name="password" placeholder="비밀번호를 입력하세요."/>
      </div>

      <div class="btn_login_all">
        <button type="submit" class="btn_basic">로그인</button>
        <div class="btn_google">
          <!--<img src="../image/goole.png"/>-->
          <button type="button" class="btn_basic" @click="googleLogin">
            <img src="../assets/images/goole.png"/>
            로 그 인</button>
        </div>
        <button type="button" class="btn_basic" >
          <router-link :to="{name: 'join'}">회원가입</router-link>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        email: '', passwd: ''
      }
    },
    methods: {
      onLogin: function () {
        alert("개발중 '-'");
//        alert(this.email + "   :::   " + this.passwd);
      },
      googleLogin: function () {
        alert("개발중 '-'");
      }
    }
  }
</script>

<style >
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
    width: 60%;
    margin: auto;
  }

  .frm_login p {
    font-size: 15px;
    font-weight: bold;
    margin: 0px;
    text-align: left;
  }

  .frm_login input {
    width: 400px;
    height: 30px;
    font-size: 15px;
  }

  .component_login {
    width: 40%;
    margin: auto;
    margin-top: 100px;
    border: 3px solid #0c2946;
  }

  .frm_login > div {
    margin-bottom: 50px;
  }

  .btn_login_all button:first-child {
    float: left;
    margin-right: 25px;
  }
</style>
