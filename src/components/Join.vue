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
        <label for="inputName">이름<span class="require">*</span></label>
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
        <label>생년월일</label>
        <div class="decor">
          <input type="hidden" id="birth" name="birth" v-model="birth"/>
          <datepicker input-class="datepicker" v-model="birth" :language="ko" :format="formatDate" @selected="checkedDate" :required="true"></datepicker>
        </div>
      </div>

      <div class="profile">
        <label class="area_inline">프로필사진</label>
        <input type="file" v-bind:class="{input_file:profileImg}" @change="selectProfileImg"/>

        <div v-if="profileImg">
          <img :src="profileImg"/>
          <p class="img_cancel" @click="deleteProgileImg">X</p>
        </div>
      </div>

      <div class="btn_join">
        <button type="button" class="btn_basic" @click="joinUser">등록</button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Vue from 'vue'
  import VueMomentJS from 'vue-momentjs'
  import moment from 'moment'
  import Datepicker from 'vuejs-datepicker'
  import {ko} from 'vuejs-datepicker/dist/locale'
  import Noty from 'vuejs-noty'
  import 'vuejs-noty/dist/vuejs-noty.css'

  Vue.use(VueMomentJS, moment);
  Vue.use(Noty, {theme: 'relax',timeout: 1000, progressBar: false, layout: 'topCenter'});

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
        ko: ko,
        interface_type: 'b',
        profileImg: ''
      }
    },
    components: {
      Datepicker
    },
    methods: {
      joinUser: function () {
        // validation check

        if (this.validationCheck()) {
          if(confirm("회원가입 하시겠습니까 ?")){
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
          }
        } else {
          this.$noty.error("입력하신 정보를 다시 확인해주세요.");
        }
      },
      validationCheck: function () {
        if(!this.email){
          this.$noty.error("이메일을 입력하세요.");
          email.focus();
          return false;
        }

        if(!this.password){
          this.$noty.error("비밀번호를 입력하세요.");
          password.focus();
          return false;
        }

        if(!this.confirmPassword){
          this.$noty.error("비밀번호 확인을 해주세요.");
          confirmPassword.focus();
          return false;
        }

        if (this.password !== this.confirmPassword) {
          this.$noty.error("입력하신 비밀번호가 일치하지않습니다.");
          passwd.focus();
          return false;
        }

        if(!this.name){
          this.$noty.error("이름을 입력하세요.");
          name.focus();
          return false;
        }

        return true;
      },
      selectProfileImg: function(e){
        var files = e.target.files || e.dataTransfer.files;

        if (!files.length){
          return;
        } else {
          var file = files[0];
          var image = new Image();
          var reader = new FileReader();
          var vm = this;

          if(file.type.indexOf("image") > -1){
            reader.onload = (e) => {
              this.profileImg = e.target.result;
            };
            reader.readAsDataURL(file);

            this.imgName = file.name
          }else{
            this.$noty.error('이미지 파일만 가능합니다.', {
              timeout: 1000,
              progressBar: true,
              layout: 'center'
            })
          }
        }
      },
      deleteProgileImg: function(){
        this.profileImg = ''
      },
      formatDate: function (date) {
        return moment(date).format('YYYY-MM-DD')
      },
      checkedDate: function (date) {
        let selectDate = moment(date).format('YYYYMMDD');
        let now = moment(new Date()).format('YYYYMMDD');

        if (selectDate > now) {
          console.log('noooooooooooo');
        }
      },
    }
  }
</script>

<style scoped>
  .component_join {
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
    margin-bottom: 17px;
    text-align: left;
  }
  .frm_join label {
    font-size: 15px;
    font-weight: bold;
  }

  .area_inline {
    float: left;
    margin-right: 10px;
  }

  #inputGender {
    text-align: center;
  }

  .profile .input_file {
    float: left;
    width: 185px;
  }

  .profile img {
    width: 130px;
  }

  .img_cancel {
    color: #ffffff;
    background-color: #ff0000;
    width: 15px;
    height: 15px;
    line-height: 15px;
    font-size: 5px;
    text-align: center;
    float: right;
  }

  .btn_join {
    margin: 50px 0 17px 150px;
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
