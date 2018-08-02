<template>
  <div class="explore">
    <result-container @mouseover="onMouseOver" @mouseleave="onMouseLeave"></result-container>
    <map-canvas v-bind:selected="selectedStore"></map-canvas>
  </div>

</template>

<script>
  import ResultContainer from './ResultContainer.vue';
  import MapCanvas from './MapCanvas.vue';

  export default {
    name: "explore",
    components: {
      'result-container': ResultContainer,
      'map-canvas': MapCanvas
    },
    data() {
      return {
        selectedStore: ''
      }
    },
    methods: {
      onMouseOver: function (selectedIdx) {
        this.selectedStore = selectedIdx;
      },
      onMouseLeave: function() {
        this.selectedStore = '';
      }

    }
  }
</script>

<style scoped>
  .explore {
    left: 0;
    width: 100%;
    border: none;
    min-width: 960px;
  }
</style>
