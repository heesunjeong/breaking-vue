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
        position: ''
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

      // 지도 범위 정보
      this.bounds = new daum.maps.LatLngBounds();

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
          if(this.selectedMarker !== '') {
            this.selectedMarker.close();
          }

          const {address_name, place_name, id, x, y} = this.results[val];
          const position = new daum.maps.LatLng(y, x);

          this.selectedMarker = new daum.maps.InfoWindow({content: `<div class="markerInfo">${val + 1}. ${place_name}</div>`});
          this.moveCenter(position)
          this.selectedMarker.open(this.map, this.markers[val]);
        }
      },
      results: function (val) {
        // 기존 마커 제거
        if (this.markers.length) {
          this.markers.map(res => res.setMap(null));
          this.markers = [];
        }

        if (val.length) {
          // 마커 생성, 지도에 표시
          val.map((res, idx) => {
            let position = new daum.maps.LatLng(res.y, res.x);
            let marker = new daum.maps.Marker({map: this.map, position: position});
            let infoWindow = new daum.maps.InfoWindow({content: `<div class="markerInfo">${idx + 1}. ${res.place_name}</div>`});

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
        const {id, place_name, road_address_name} = res;

        return () => {
          console.log(place_name, road_address_name, id)
        }
      }

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
</style>
