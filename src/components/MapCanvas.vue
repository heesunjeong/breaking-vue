<template>
  <div class="mapView">
    <div class="mapCanvas">Map Canvas</div>
  </div>
</template>

<script>
  export default {
    name: "map-canvas",
  }

</script>

<style scoped>
  .mapView {
    bottom: 0;
    left: 646px;
    position: fixed;
    right: 0;
    top: 60px;
    z-index: 1;
  }
  .mapView .mapCanvas {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
</style>
