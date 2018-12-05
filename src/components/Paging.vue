<template>
  <div class="paging">
    <span class="paging_btn" v-if="prevPage" @click="changePage(prevPage)"><</span>
    <span v-for="pageNumber in pageList" class="paging_btn" v-bind:class="{active : pageNumber == currentPage}" @click="changePage(pageNumber)">{{pageNumber}}</span>
    <span class="paging_btn" v-if="nextPage" @click="changePage(nextPage)">></span>
  </div>
</template>

<script>
  export default {
    name: "Paging",
    props: [
      'totalData', // 데이터 총 갯수
      'pageCount', // 페이지 그룹 페이지 갯수
      'dataPerPage' // 한 페이지에 보여질 데이터 갯수
    ],
    data() {
      return {
        pageList: [],
        prevPage: 0,
        nextPage: 0,
        currentPage: 1,
      }
    },
    mounted: function () {
      this.onPaging();
    },
    watch: {
      totalData: function (props, oldProps) {
        this.onPaging();
        this.changePage(1);
      }
    },
    methods: {
      onPaging: function () {
        const totalPage = Math.ceil(this.totalData / this.dataPerPage);
        const pageGroup = Math.ceil(this.currentPage / this.pageCount);

        const last = (this.pageCount * pageGroup) > totalPage ? totalPage : this.pageCount * pageGroup;
        const first = last < 5 ? 1 : last - (this.pageCount - 1);

        this.nextPage = (last == totalPage) ? 0 : last + 1;
        this.prevPage = first - 1;

        this.pageList = [];

        for (let i = first; i < last + 1; i++) {
          this.pageList.push(i);
        }
      },

      changePage: function (selectedPage) {
        this.currentPage = selectedPage;
        this.$listeners.onChange(selectedPage);
        this.onPaging(selectedPage);
      }
    }
  }
</script>

<style scoped>
  .paging {
    padding: 10px;
  }
  .paging_btn {
    background-color: #fff;
    border: 1px solid #c7cdcf;
    padding: 4px;
    margin: 2px;
  }
  .paging_btn.active {
    font-weight: bold;
  }
</style>
