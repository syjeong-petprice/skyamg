import { styled, keyframes } from 'styled-components';
import KakaoMap from '../../../components/KakaoMap';

function Location() {
	return (
		<LocationContainer>
			<TextWrapper />
			<KakaoMap />
		</LocationContainer>
	);
}

const LocationContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: olivedrab;
	display: flex;

	* {
		margin: 0;
	}
`;

const TextWrapper = styled.div`
	width: 50%;
	height: 100%;
`;

export default Location;
