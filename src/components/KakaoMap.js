import { useEffect } from "react";
const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    if (typeof window !== "undefined" && kakao) {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.454012, 126.707794),
        level: 3,
      };
      const markerPosition = new kakao.maps.LatLng(37.454012, 126.707794);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      const map = new kakao.maps.Map(container, options);
      marker.setMap(map);
    } else {
      console.error("Kakao Map API가 로드되지 않았습니다.");
    }
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </>
  );
}

export default KakaoMap;
