<template>
  <div class="component_join">
    <h2>우리 함께 맛집 뿌시러 가요 :)</h2>

    <div class="frm_join">
      <div>
        <label for="inputEmail">이메일<span class="require">*</span></label>
        <div class="decor">
          <input id="inputEmail" type="email" class="input_txt" v-model="email"/>
        </div>
      </div>

      <div>
        <label for="inputPassword">비밀번호<span class="require">*</span></label>
        <div class="decor">
          <input id="inputPassword" type="password" class="input_txt" v-model="password"/>
        </div>
      </div>

      <div>
        <label for="inputConfirmPassword">비밀번호 확인<span class="require">*</span></label>
        <div class="decor">
          <input id="inputConfirmPassword" type="password" class="input_txt" v-model="confirmPassword"/>
        </div>
      </div>

      <div>
        <label for="inputName">이름</label>
        <div class="decor">
          <input id="inputName" type="text" class="input_txt" v-model="name"/>
        </div>
      </div>

      <div>
        <label for="inputGender" class="area_inline">성별</label>
        <div id="inputGender">
          <input type="radio" class="input_radio" v-model="gender" value="F"/> 여성
          <input type="radio" class="input_radio" v-model="gender" value="M"/> 남성
          <input type="radio" class="input_radio" v-model="gender" value="N"/> 언급하고 싶지 않습니다.
        </div>
      </div>

      <div>
        <label for="inputBirth">생년월일</label>
        <div class="decor">
          <input id="inputBirth" type="date" class="input_txt" v-model="birth"/>
        </div>
      </div>

      <div class="profile">
        <p class="area_inline">프로필사진</p>
        <input type="text" class="input_txt" readonly/>
        <button type="button" class="btn_basic" @click="selectProfileImg">파일선택</button>
      </div>

      <div>
        <button type="button" class="btn_basic" @click="register">등록</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Join",
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        gender: 'N',
        birth: '',
        interface_type: 'b'
      }
    },
    methods: {
      register: function () {
        // validation check

        if (this.validationCheck()) {
          axios.post('/api/user/register', {
            email: this.email,
            password: this.password,
            name: this.name,
            gender: this.gender,
            birth: this.birth
          }).then(res => {
            if (res) {
              console.log(res);

              if (!!res.data) {
                alert("우리 오늘 맛집 뿌셔?에 오신걸 환영합니다. :) ");
              }
            }
          }).catch(error => {
            console.log(error)
          })

        } else {

        }
      },
      validationCheck: function () {
        if (this.password !== this.confirmPassword) {
          alert("비밀번호가 일치하지 않습니다.")
          return false;
        }

        return true;
      },
      selectProfileImg: function () {
        alert("개발중 '-'");
      }
    }
  }
</script>

<style scoped>
  .component_join {
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
  }
  .frm_join p {
    font-size: 15px;
    font-weight: bold;
    margin: 0px;
    text-align: left;
  }
  .frm_join .input_txt {
    width: 100%;
    height: 30px;
    font-size: 15px;
  }
  .frm_join > div {
    margin-bottom: 20px;
  }
  .area_inline {
    float: left;
  }
  .profile > p {
    line-height: 40px;
  }
  .profile > input {
    width: 200px !important;
    background-color: #E6E6E6;
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
  .require {
    color: #ff0000;
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
    width: 150px;
    min-width: 100px;
    width: auto;
  }
</style>
