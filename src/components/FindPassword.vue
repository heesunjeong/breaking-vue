<template>
  <div class="container">
    <div class="find_password">
      <h2>비밀번호 찾기</h2>
      <p>새로운 비밀번호를 이메일로 보내드립니다. 이메일 주소를 입력하십시오.</p>
      <hr>
      <div class="email_form">
        <label for="email">이메일주소:</label>
        <input id="email" type="text" name="email" class="formStyle" value="">
        <div>
          <input type="submit" class="greenButton" tabindex="5" value="제출">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "FindPassword"
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
