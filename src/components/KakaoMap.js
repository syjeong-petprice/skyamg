import { useEffect } from "react";
const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.454233, 126.707068),
      level: 4,
    };
    const markerPosition = new kakao.maps.LatLng(37.454233, 126.707068);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    const map = new kakao.maps.Map(container, options);
    marker.setMap(map);
  }, []);

  return (
    <>
      <div id="map" style={{ width: "50%", height: "50%" }}></div>
    </>
  );
}

export default KakaoMap;
