<template>
  <div class="mapView">
    <div id="mapCanvas" class="mapCanvas">Map Canvas</div>
  </div>
</template>

<script>
  export default {
    name: "map-canvas",
    props: ['selected'],
    data() {
      return {
        map: '',
        markers: [],
        selectedMarker: '',
      }
    },
    mounted: function () {
      const el = document.getElementById('mapCanvas');
      const options = {
        center: new daum.maps.LatLng(37.4006710845072, 127.109289943144),
        level: 3
      };

      // 지도 생성
      this.map = new daum.maps.Map(el, options);
      this.renderMarker(this.results)
    },
    computed: {
      results: function () {
        return this.$store.state.searchResult;
      }
    },
    watch: {
      selected: function (val) {
        // 검색 결과목록 mouseover, mouseleave event
        if (val === '') {
          this.selectedMarker.close();

        } else {
          const {place_name, road_address_name, x, y} = this.results[val];
          const position = new daum.maps.LatLng(y, x);

          if (this.selectedMarker !== '') {
            this.selectedMarker.close();
          }

          this.selectedMarker = new daum.maps.InfoWindow({content: `<div class="markerInfo"><div>${val + 1}. ${place_name}</div><div style="font-size: 13px;">${road_address_name}</div></div>`});
          this.moveCenter(position);

          this.selectedMarker.open(this.map, this.markers[val]);
        }
      },
      results: function (val) {
        // 기존 마커 제거
        if (this.markers.length) {
          this.markers.map(res => res.setMap(null));
          this.markers = [];
        }

        this.renderMarker(val);
      }
    },
    methods: {
      moveCenter: function (position) {
        this.map.panTo(position);
      },
      makeOverListener: function (map, marker, infoWindow) {
        return () => {
          infoWindow.open(map, marker);
        };
      },
      makeOutListener: function (infoWindow) {
        return () => {
          infoWindow.close();
        };
      },
      clickMarker: function (res) {
        return () => {
          this.$router.push({name: 'detail', q: {store: encodeURI(res.place_name)}, params: {placeInfo: res}});
        }
      },
      renderMarker(placeList) {
        if (placeList.length) {
          // 마커 생성, 지도에 표시
          placeList.map((res, idx) => {
            const {place_name, road_address_name, x, y} = res;
            let position = new daum.maps.LatLng(y, x);
            let marker = new daum.maps.Marker({map: this.map, position: position});
            let infoWindow = new daum.maps.InfoWindow({content: `<div class="markerInfo"><div>${idx + 1}. ${place_name}</div><div style="font-size: 13px;">${road_address_name}</div></div>`});

            this.markers.push(marker);

            // add marker mouseover, mouseout, click event
            daum.maps.event.addListener(marker, 'mouseover', this.makeOverListener(this.map, marker, infoWindow));
            daum.maps.event.addListener(marker, 'mouseout', this.makeOutListener(infoWindow));
            daum.maps.event.addListener(marker, 'click', this.clickMarker(res));

            if (idx === 0) {
              this.moveCenter(position)
            }
          })
        }
      },

    }
  }

</script>

<style scoped>
  .mapView {
    bottom: 0;
    left: 500px;
    position: fixed;
    right: 0;
    top: 60px;
    z-index: 1;
    width: 100%;
  }
  .mapView .mapCanvas {
    position: relative;
    height: 100%;
    overflow: hidden;
  }

  .markerInfo .marker_address {
    font-size: 13px;
  }
</style>
