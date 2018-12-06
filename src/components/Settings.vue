<template>
  <div class="component_settings">
    <h2>Profile Settings</h2>

    <div class="frm_settings">
      <div>
        <label for="input_email">이메일</label>
        <div class="decor">
          <input id="input_email" type="email" class="input_txt" v-model="email" readonly/>
        </div>
      </div>

      <div>
        <label for="input_name">이름</label>
        <div class="decor">
          <input id="input_name" type="text" class="input_txt" v-model="name"/>
        </div>
      </div>

      <div>
        <label for="input_gender" class="area_inline">성별</label>
        <div id="input_gender" class="input_gender">
          <input type="radio" class="input_radio" v-model="gender" value="F"/> 여성
          <input type="radio" class="input_radio" v-model="gender" value="M"/> 남성
          <input type="radio" class="input_radio" v-model="gender" value="N"/> 언급하고 싶지 않습니다.
        </div>
      </div>

      <div>
        <label>생년월일</label>
        <div class="decor">
          <input type="date" id="birth" name="birth" v-model="birth"/>
          <!--  <datePicker input-class="datepicker" v-model="birth" :language="ko" :format="formatDate" @selected="checkedDate" :required="true"></datePicker>-->
        </div>
      </div>

      <!-- <div class="profile">
         <label class="area_inline">프로필사진</label>
         <input type="file" v-bind:class="{input_file:profileImg}" @change="selectProfileImg"/>

         <div v-if="profileImg">
           <img :src="profileImg"/>
           <p class="img_cancel" @click="deleteProgileImg">X</p>
         </div>
       </div>-->

      <div>
        <label for="input_bio">자기소개</label>
        <div class="decor">
          <textarea id="input_bio" class="input_bio" v-model="bio"/>
        </div>
      </div>

      <div>
        <label for="input_id">사용자 ID</label>
        <div class="decor">
          <input id="input_id" type="text" class="input_txt" v-model="id" readonly/>
        </div>
      </div>

      <div>
        <div id="input_password">
          <span><router-link :to="{name:'changePassword'}">비밀번호 수정하기</router-link></span>
        </div>
      </div>


      <div class="btn_save">
        <button type="button" class="btn_basic" @click="updateUserInfo">수정</button>
        <button type="button" class="btn_basic" @click="cancel">취소</button>
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
        id: '',
        name: '',
        email: '',
        gender: '',
        birth: '',
        bio: '',
        profileImg: '',
      }
    },
    mounted: function () {
      actions.getUserInfo(0, (data) => {
        const {id, name, email, gender, birth, bio, profileImg} = data;

        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.birth = birth;
        this.bio = bio;
        this.profileImg = profileImg;
      });
    },
    methods: {
      updateUserInfo: function () {
        const {id, name, email, gender, birth, bio, profileImg} = this;
        const userData = {id, name, email, gender, birth, bio, profileImg};

        actions.update(userData, (data) => {
          if (data) {
            alert("수정이 성공하였습니다.");
            this.$router.push({name: 'profile'});
          } else {
            alert("수정이 실패하였습니다.");
          }
        });
        //TODO 성공, 실패 여부에 따라 처리
      },
      cancel: function () {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .component_settings {
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
  .frm_settings p {
    font-size: 15px;
    font-weight: bold;
    margin: 0px;
    text-align: left;
  }
  .frm_settings .input_txt {
    width: 100%;
    height: 30px;
    font-size: 15px;
  }
  .frm_settings > div {
    margin-bottom: 17px;
    text-align: left;
  }
  .frm_settings label {
    font-size: 15px;
    font-weight: bold;
  }
  .component_settings a, a:link, a:visited {
    color: #0a2747;
  }
  .area_inline {
    float: left;
    margin-right: 10px;
  }
  .input_gender {
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
  .btn_save {
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
  .decor input, textarea {
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
    width: 150px;
    min-width: 100px;
    width: auto;
  }
  .input_bio {
    resize: none;
    height: 60px;
  }
</style>
