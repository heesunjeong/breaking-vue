<template>
  <div class="userProfile">
    <div v-if="!!userInfo" class="userInfo">

      <div class="profilePic">
        <!--TODO 프로필 이미지-->
        <img src="https://search.pstatic.net/common?type=a&size=120x150&quality=95&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fpeople%2Fportrait%2F201810%2F20181008144818672.jpg"
             class="prof_image"/>
      </div>

      <div class="userStat">
        <div class="userName">
          <h1 class="name">{{shortening(userInfo.name, 5)}} 님</h1>

          <span v-if="!!amI">
            <span class="name_side editProfileLink">
              <router-link :to="{name: 'settings'}">프로필 수정</router-link>
            </span>
            <span class="name_side logout">
              <span @click="onLogout">로그아웃</span>
            </span>
          </span>

        </div>
        <div>{{userInfo.bio}}</div>
      </div>

    </div>

    <div class="review_list">
      <div class="review_header">{{shortening(userInfo.name, 5)}} 님의 리뷰
      </div>

      <div v-if="!!reviews" class="review_container">
        <div v-for="(review, idx) in reviews" v-if="idx < 3" class="review_card">
          <div class="review_photo"></div>
          <div class="review_contents">"{{shortening(review.contents, 100)}}"</div>
          <div class="review_user">{{shortening(review.author.name, 5)}} / {{review.mod_at.split(" ")[0]}}</div>
          <div class="review_store">{{review.storeId}}</div>
        </div>
      </div>

      <div v-else></div>

    </div>

  </div>

</template>

<script>
  import * as Utils from '../utils/utils'
  import * as userActions from '../actions/userActions'
  import * as reviewActions from '../actions/reviewActions'

  export default {
    name: "Profile",
    data() {
      return {
        amI: true,
        userInfo: '',
        reviews: '',
      }
    },
    mounted: function () {
      this.getProfileInfo();
    },
    beforeRouteUpdate: function (to, from, next) {
      console.log("-0--", to.query, from.query)
      if (to.query !== from.query) {
        next();
        this.getProfileInfo();
      }
    },
    methods: {
      onLogout: function () {
        userActions.logout(this.$router);
      },
      shortening: function (str, length) {
        return !str ? '' : `${str.substr(0, length)} ${str.length > length ? '...' : ''}`;
      },
      getProfileInfo: function () {
        const userParam = this.$route.query.u;

        if (!!userParam && Utils.getUserId() !== userParam) {
          this.amI = false;
        }

        userActions.getUserInfo(this.amI ? 0 : this.$route.query.u)
          .then(userData => {
            this.userInfo = userData;

            if (userData) {
              reviewActions.getReviewByAuthor(userData.id)
                .then(reviewData => {
                  this.reviews = reviewData;
                })
            }
          });
      }
    }
  }
</script>

<style scoped>
  a, a:link, a:visited {
    color: #000;
  }
  .userInfo {
    width: 100%;
    margin: 20px 0;
    background-color: #fff;
    padding: 20px 0 20px 0;
  }
  .profilePic {
    margin-right: 20px;
    display: inline-block;
  }
  .userStat {
    display: inline-block;
    vertical-align: top;
  }
  .userStat .userName {
    margin-bottom: 10px;
  }
  .userStat .userName .name {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
  }
  .userStat .userName .name_side {
    position: relative;
    top: -4px;
    margin-left: 10px;
  }
  .review_list {
    margin-top: 20px;
  }
  .review_list .review_header {
    height: 46px;
    margin-bottom: 10px;
    position: relative;
    display: inline-block;
    margin-top: 15px;
    font-size: 21px;
    color: #4e595d;
  }
  .review_list .review_card {
    -moz-box-shadow: #c7cdcf 0 1px 0 0;
    -webkit-box-shadow: #c7cdcf 0 1px 0 0;
    box-shadow: #c7cdcf 0 1px 0 0;
    display: inline-block;
    width: 340px;
    margin-bottom: 10px;
    border-radius: 3px;
    height: 470px;
    background-color: #fff;
    vertical-align: top;
    margin-left: 10px;
  }
  .review_list .review_photo {
    cursor: pointer;
    display: block;
    height: 170px;
    position: relative;
    background-color: #c7cdcf;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .review_list .review_contents {
    padding: 20px;
    height: 153px;
    font-size: 17px;
    line-height: 26px;
    font-weight: 300;
    word-wrap: break-word;
    text-align: left;
  }
  .review_list .review_user {
    border-bottom: 1px solid #efeff4;
    color: #c7cdcf;
    font-size: 13px;
    height: 40px;
    padding: 0 20px;
    vertical-align: middle;
  }
  .review_list .review_store {
    padding: 10px 20px 10px 20px;
    font-size: 16px;
    color: #2d5be3;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .prof_image {
    -webkit-mask-size: 100%;
    cursor: pointer;
    height: 131px;
    width: 130px;
  }
</style>
