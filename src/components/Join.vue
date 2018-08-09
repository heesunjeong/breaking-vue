<template>
  <div class="component_join">
    <h1>우리 함께 맛집 뿌시러 가요 :)</h1>

    <form class="frm_join" @submit="validJoin">
      <div>
        <p>이메일</p>
        <input type="text" class="input_txt" v-model="email"/>
      </div>

      <div>
        <p>비밀번호</p>
        <input type="password" class="input_txt" v-model="passwd"/>
      </div>

      <div>
        <p>비밀번호 확인</p>
        <input type="password" class="input_txt" v-model="confirmPasswd"/>
      </div>

      <div>
        <p>이름</p>
        <input type="text" class="input_txt" v-model="userName"/>
      </div>

      <div>
        <p class="area_inline">성별</p>
        <div>
          <input type="radio" class="input_radio" v-model="gender" value="F"/> 여성
          <input type="radio" class="input_radio" v-model="gender" value="M"/> 남성
          <input type="radio" class="input_radio" v-model="gender" value="N"/> 언급하고 싶지 않습니다.
        </div>
      </div>

      <div>
        <p>생년월일</p>
        <input type="text" class="input_txt" v-model="birth"/>
      </div>

      <div class="profile">
        <p class="area_inline">프로필사진</p>
        <input type="text" class="input_txt" readonly/>
        <button type="button" class="btn_basic" @click="selectProfileImg">파일선택</button>
      </div>

      <div>
        <button type="submit" class="btn_basic">등록</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Join",
    data() {
      return {
        email: '', passwd: '', confirmPasswd: '', userName: '', gender: 'N', birth: ''
      }
    },
    methods: {
      validJoin: function(){
        alert("개발중 '-'");
      },
      selectProfileImg: function(){
        alert("개발중 '-'");
      }
    }
  }
</script>

<style scoped>
  .frm_join {
    width: 60%;
    margin: auto;
  }

  .frm_join p {
    font-size: 15px;
    font-weight: bold;
    margin: 0px;
    text-align: left;
  }

  .frm_join .input_txt {
    width: 400px;
    height: 30px;
    font-size: 15px;
  }

  .component_join {
    width: 40%;
    margin: auto;
    margin-top: 100px;
    border: 3px solid #0c2946;
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
</style>
