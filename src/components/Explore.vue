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
    components: {ResultContainer, MapCanvas},
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
  .explore {
    left: 0;
    width: 100%;
    position: fixed;
    border: none;
    min-width: 960px;
  }
</style>
