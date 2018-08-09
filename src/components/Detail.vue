<template>
  <div class="detail">
    <div class="basicInfo">
      <div class="infoTop">
        <div class="infoThumbnail"></div>

        <div class="placeDetail">
          <div class="tit">{{this.storeInfo.place_name}}</div>
          <div></div>
          <div class="locationEvaluation">{{this.storeInfo.category_name}}</div>
        </div>
      </div>

      <div class="basicDetails">
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
      <div class="commentsWrite">
        <textarea class="commentTextarea" placeholder="팁을 남겨주세요."></textarea>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'lodash';

  export default {
    name: "Detail",
    props: ["placeInfo",],
    data() {
      return {
        storeInfo: this.placeInfo ? this.placeInfo : '',
      }
    },
    mounted: function () {
      if (!this.storeInfo) {
        const {id, store} = this.$route.query;
        this.getStoreInfo(id, store)
      }
    },
    methods: {
      getStoreInfo: function (id, storeName) {
        axios.get('http://break.api.dev.9rum.cc/maps/place', {
          params: {
            query: `${storeName}`
          }
        }).then(res => {
          if (res) {
            this.storeInfo = _.head(_.filter(res.data.documents, {id: id}));
          }
        }).catch(error => {
          console.log(error)
        })
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
  .basicInfo {
    position: relative;
    border: 1px solid #ebebeb;
    background: #fff;
  }
  .infoThumbnail {
    position: relative;
    min-height: 144px;
    margin: -1px -1px 0;
    background: url(https://i.ytimg.com/vi/Q-57y7KQUQc/maxresdefault.jpg) no-repeat;
    /*background-color: #FFFFFF;*/
  }
  .placeDetail {
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
  .placeDetail .tit {
    padding: 2px 33px 0;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: -2px;
    font-weight: bold;
  }
  .basicDetails {
    position: relative;
    padding: 25px 79px 40px;
  }
  .locationEvaluation {
    height: 30px;
    padding-top: 8px;
    text-align: center;
  }
  .basicDetails .tit {
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
  .commentTextarea {
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
  .commentsWrite {
    margin-top: 11px;
    border: 1px solid #ddd;
  }
  textarea:focus {
    outline: none;
  }
</style>
