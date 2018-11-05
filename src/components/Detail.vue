<template>
  <div class="detail">
    <div class="basic_info">
      <div class="info_top">
        <div class="info_thumbnail"></div>

        <div class="place_detail">
          <div class="tit">{{this.storeInfo.place_name}}</div>
          <div></div>
          <div class="location_evaluation">{{this.storeInfo.category_name}}</div>
        </div>
      </div>

      <div class="basic_details">
        <h3 class="tit">상세정보</h3>
        <div v-if="this.storeInfo.road_address_name">{{this.storeInfo.road_address_name}}</div>
        <div v-if="this.storeInfo.address_name">{{this.storeInfo.address_name}}</div>
        <div v-if="this.storeInfo.phone">전화번호: {{this.storeInfo.phone}}</div>
      </div>
    </div>

    <div class="cont_photo">
      <h3 class="tit">사진</h3>
    </div>

    <div class="comments">
      <h3 class="tit">팁 및 리뷰</h3>
      <div class="comments_write">
        <textarea class="comment_textarea" placeholder="팁을 남겨주세요." v-model="review"></textarea>
        <button @click="onClick()">등록</button>
      </div>

      <div class="evaluation_review">
        <ul class="review_list">
          <li v-for="(review, idx) in loadReview">
            <div class="review_photo"></div>
            <div class="review_comment">
              <p class="txt_comment">{{review.contents}}</p>
            </div>
            <div class="review_info">
              <span class="user_name">{{review.userId}}</span>
              <span class="time_write">{{review.mod_at}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import _ from 'lodash';
  import * as actions from '../actions/storeActions';

  export default {
    name: "Detail",
    props: ["placeInfo",],
    data() {
      return {
        storeInfo: this.placeInfo ? this.placeInfo : '',
        review: '',
        loadReview: ''
      }
    },
    mounted: function () {
      const {id, store} = this.$route.query;

      if (!this.storeInfo) {
        this.getStoreInfo(id, store)
      }

      this.getReviewInfo(id);
    },
    methods: {
      getStoreInfo: function (id, storeName) {
        actions.getStoreInfo(storeName)
          .then(res => this.storeInfo = _.head(_.filter(res, {id: id})))
      },
      getReviewInfo: function (id) {
        actions.getReviewInfo(id)
          .then(res => this.loadReview = res);
      },
      onClick: function () {
        const {id} = this.storeInfo;

        if (!this.review.replace(/\s|　/gi, '')) {
          alert("리뷰 내용을 입력해주세요.")
          return;
        }

        actions.saveReview(id, this.review)
          .then(res => res ? this.onSuccessSave() : this.$router.push({name: 'login'}));
      },
      onSuccessSave: function () {
        this.getReviewInfo(this.storeInfo.id);
        this.review = '';
      }
    },
  }
</script>

<style scoped>
  .detail {
    width: 800px;
    padding-top: 35px;
    margin: 0 auto;
    text-align: left;
  }
  .basic_info {
    position: relative;
    border: 1px solid #ebebeb;
    background: #fff;
  }
  .info_thumbnail {
    position: relative;
    min-height: 144px;
    margin: -1px -1px 0;
    background: url(https://i.ytimg.com/vi/Q-57y7KQUQc/maxresdefault.jpg) no-repeat;
    /*background-color: #FFFFFF;*/
  }
  .place_detail {
    position: relative;
    z-index: 10;
    width: 744px;
    padding-bottom: 4px;
    margin: -64px auto 0;
    /*background: url(//t1.daumcdn.net/localimg/localimages/07/2017/pc/bg_shadow_bottom.png) no-repeat 0 100%;*/
    background-color: #FFFFFF;
    text-align: center;
    box-shadow: 3px 3px #f3f3f3;
  }
  .place_detail .tit {
    padding: 2px 33px 0;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -2px;
    font-weight: bold;
  }
  .basic_details {
    position: relative;
    padding: 25px 79px 40px;
  }
  .location_evaluation {
    height: 30px;
    padding-top: 8px;
    text-align: center;
  }
  .basic_details .tit {
    /*    height: 23px;
        padding: 10px 0 0;
        font-size: 17px;
        letter-spacing: -2px;
        line-height: 24px;
        padding-bottom: 17px;
        font-weight: 700;*/
  }
  .cont_photo {
    padding: 36px 79px 35px;
    margin-top: 10px;
    border: 1px solid #eaeaea;
    background: #fff;
    padding-bottom: 49px;
  }
  .comments {
    padding: 35px 79px 25px;
    padding: 29px 79px 31px;
    margin-top: 10px;
    border: 1px solid #eaeaea;
    background: #fff;
  }
  .comment_textarea {
    overflow: visible;
    width: 595px;
    height: 44px;
    padding: 14px 23px 9px 20px;
    line-height: 22px;
    border: 0 none;
    color: #444;
    resize: none;
    -webkit-appearance: none;
  }
  .comments_write {
    margin-top: 11px;
    border: 1px solid #ddd;
  }
  textarea:focus {
    outline: none;
  }
  .evaluation_review {
    padding-top: 5px;
  }
  .review_comment {
    overflow: hidden;
    padding: 9px 12px 0 0;
  }
  .review_list {
    list-style: none;
  }
  .txt_comment {
    line-height: 22px;
    color: #444;
    word-break: break-all;
  }
  .evaluation_review .review_info {
    overflow: hidden;
    height: 20px;
    padding: 8px 0 0 2px;
    font-size: 13px;
  }
</style>
