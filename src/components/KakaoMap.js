import { useEffect } from 'react';
const { kakao } = window;

function KakaoMap() {
	useEffect(() => {
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(126.707068, 37.454233),
			level: 3,
		};
		const map = new kakao.maps.Map(container, options);
	}, []);

	return <div id="map" style={{ width: '500px', height: '500px' }}></div>;
}

export default KakaoMap;
