<template>
  <div class="detail">
    <div class="basic_info">
      <div class="info_top">
        <div class="info_thumbnail"></div>

        <div class="place_detail">
          <div class="tit">{{this.storeInfo.name}}</div>
          <div></div>
          <div class="location_evaluation">{{this.storeInfo.category}}</div>
        </div>
      </div>

      <div class="basic_details">
        <h3 class="tit">상세정보</h3>
        <div v-if="this.storeInfo.road_address_name">{{this.storeInfo.address}}</div>
        <div v-if="this.storeInfo.address_name">{{this.storeInfo.address}}</div>
        <div v-if="this.storeInfo.phone">전화번호: {{this.storeInfo.phone}}</div>
      </div>
    </div>

    <div class="cont_photo">
      <h3 class="tit">사진</h3>
    </div>

    <div class="comments">
      <h3 class="tit">팁 및 리뷰</h3>
      <div class="comments_write">
        <textarea class="comment_textarea" placeholder="이 장소에 관한 팁을 남겨주세요." v-model="writingReview" @keyup="validateTextLength()"></textarea>
        <div class="submit_review">
          <span class="num_letter txt_len_warp">
            <span class="txt_len">{{this.writingReview.length}}</span><span class="num_total"> / 200</span></span>
          <button class="btn_review" @click="saveReview()">등록</button>
        </div>
      </div>

      <div class="reviews">
        <ul class="review_list">
          <li class="review" v-for="(review, idx) in roadReviewList">
            <div class="review_photo"></div>

            <div class="review_comment">
              <span v-if="editing === idx" class="edit_comment">
                <textarea class="edit_comment_textarea" v-model="editingReview" @keyup="validateTextLength()"></textarea>
                <button class="btn_edit_review" @click="editReview(idx, review)">수정</button>
              </span>
              <span v-else class="txt_comment">{{review.contents}}</span>
            </div>

            <div class="review_info">
              <span class="user_name"><router-link :to="{name: 'profile', query: {u : review.author.id}}">{{review.author.name}}</router-link></span>
              <span class="time_write">{{review.mod_at}}</span>
              <span v-if="!!myId && review.author.id === myId" class="btn_edit">
                <span v-if="editing === idx" @click="cancelEditing()">취소</span>
                <span v-else>
                  <span @click="onClickEdit(idx, review.contents)">수정</span> /
                  <span @click="deleteReview(review.id)">삭제</span>
                </span>
              </span>

            </div>
          </li>

          <Paging v-if="totalCount" :totalData="totalCount" :pageCount="5" :dataPerPage="5" @onChange="changePages"/>

        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import _ from 'lodash';
  import * as reviewActions from '../actions/reviewActions';
  import * as storeActions from '../actions/storeActions';
  import * as utils from '../utils/utils'
  import Paging from "./Paging";

  export default {
    name: "Detail",
    components: {Paging},
    props: ["placeInfo",],
    data() {
      return {
        writingReview: '',
        roadReviewList: '',
        editingReview: '',
        storeInfo: this.placeInfo || '',
        myId: utils.getUserId(),
        editing: false,
        totalCount: 0
      }
    },

    mounted: function () {
      if (!this.storeInfo) {
        this.getStoreInfo();
      } else {
        this.parsingPlaceData(this.storeInfo);
      }

      this.getCountReview();
      this.getReviewInfo();
    },

    methods: {
      getStoreInfo: function () {
        const {id} = this.$route.query;

        storeActions.getStoreInfo(id, (data) => this.storeInfo = data);
      },

      getReviewInfo: function (page) {

        //TODO Count가 0일때는 리뷰 리스트 부르지 않게

        const {id} = this.$route.query;
        reviewActions.getReviewInfo(id, !page ? 0 : page - 1, 5, (data) => this.roadReviewList = data);

      },

      getCountReview: function () {
        const {id} = this.$route.query;

        reviewActions.getCountReview(id, (data) => this.totalCount = data);
      },

      saveReview: function () {
        const {storeKey} = this.storeInfo;

        if (!this.writingReview.replace(/\s|　/gi, '')) {
          alert("리뷰 내용을 입력해주세요.");
          return;
        }

        reviewActions.saveReview(storeKey, this.writingReview, () => this.onSuccessSave());
      },

      editReview: function (idx, originalReview) {
        originalReview.contents = this.editingReview;
        reviewActions.editReview(originalReview);

        this.editing = false;
        this.editingReview = '';
      },

      deleteReview: function (reviewId) {
        reviewActions.deleteReview(reviewId, (data) => data ? this.onSuccessSave() : alert('리뷰 삭제에 실패하였습니다.\n잠시 후 다시 시도해주세요.'));
      },

      cancelEditing: function () {
        this.editing = false;
      },

      onSuccessSave: function () {
        this.getCountReview();
        //this.getReviewInfo();
        this.writingReview = '';
      },

      onClickEdit: function (idx, review) {
        this.editingReview = review;
        this.editing = idx;
      },

      validateTextLength: function () {
        if (this.writingReview.length > 200) {
          this.writingReview = this.writingReview.substr(0, 200);
          alert("리뷰는 200자까지 입력할 수 있어요.");
        }
      },

      changePages: function (page) {
        this.getReviewInfo(page);
      },

      parsingPlaceData: function (store) {
        const {address_name, category_name, id, place_name, phone, x, y} = store;

        this.storeInfo = {
          address: address_name,
          category: category_name,
          name: place_name,
          storeKey: id,
          phone,
          x,
          y,
        }
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
  .edit_comment_textarea {
    overflow: visible;
    border: 1px solid #ddd;
    width: 540px;
    height: 26px;
    line-height: 13px;
    resize: none;
    margin-right: 2px;
  }
  .btn_edit_review {
    position: absolute;
    width: 60px;
    height: 32px;
    border: 1px solid #ddd;
  }
  .comments_write {
    margin-top: 11px;
    border: 1px solid #ddd;
  }
  textarea:focus {
    outline: none;
  }
  .reviews {
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
  .reviews .review_info {
    overflow: hidden;
    height: 20px;
    padding: 8px 0 0 2px;
    font-size: 13px;
  }
  .comments .submit_review {
    position: relative;
    width: 541px;
    height: 40px;
    padding: 0 77px 0 20px;
    border-top: 1px solid #e2e2e2;
  }
  .comments .btn_review {
    position: absolute;
    top: -1px;
    right: -1px;
    width: 78px;
    height: 42px;
    padding-bottom: 1px;
    color: #fff;
    background: #0a2847;
  }
  .comments .num_letter {
    float: right;
    height: 15px;
    padding: 13px 20px 0 0;
    font-size: 13px;
    font-family: Arial, sans-serif;
    line-height: 15px;
    letter-spacing: 0;
  }
  .comments .num_total {
    color: #888;
  }
  .btn_edit {
    float: right;
    margin: 0;
    padding-top: 3px;
    font-size: 11px;
  }
  .reviews .review {
    margin-bottom: 15px;
  }
  .detail a, a:link, a:visited {
    color: #000;
  }
</style>
