<template>
  <div class="explore">
    <result-container></result-container>
    <map-canvas></map-canvas>
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
      return {}
    },
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
