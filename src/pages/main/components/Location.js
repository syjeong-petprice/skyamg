import { styled } from 'styled-components';
import KakaoMap from '../../../components/KakaoMap';

function Location() {
	return (
		<LocationContainer>
			<h1>위치안내/연락처</h1>
			<KakaoMap />
		</LocationContainer>
	);
}

const LocationContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: olivedrab;

	* {
		margin: 0;
	}
`;

export default Location;
