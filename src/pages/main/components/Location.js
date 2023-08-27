import { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import KakaoMap from '../../../components/KakaoMap';
import skyBuilding from '../../../images/resource/images/스카이야경.jpeg';

function Location() {
	const [animate, setAnimate] = useState(false);
	return (
		<LocationContainer>
			<TextWrapper>
				<div
					className={animate ? 'locationWrapper animate' : 'locationWrapper'}
				>
					<div className="addrWrapper">
						<h3>오시는 길</h3>
						<p>
							인천광역시 남동구 남동대로 799번길 34 구월지웰시티푸르지오 C동 3층
						</p>
					</div>
					<div className="phoneWrapper">
						<h3>연락처</h3>
						<p>032-715-7959</p>
					</div>
				</div>
				<div className="imgWrapper"></div>
			</TextWrapper>
			<KakaoMap />
		</LocationContainer>
	);
}

const LocationContainer = styled.section`
	width: 100%;
	height: 92vh;
	display: flex;

	* {
		margin: 0;
	}
`;

const TextWrapper = styled.div`
	width: 50%;
	height: 100%;

	.locationWrapper {
		width: 100%;
		height: 50%;

		.addrWrapper {
			margin-bottom: 25px;
		}

		h3 {
			font-size: 2rem;
		}
		p {
			font-size: 1.5rem;
		}
	}

	.imgWrapper {
		margin: 0;
		width: 100%;
		height: 50%;
		background-image: url(${skyBuilding});
		background-repeat: no-repeat;
		background-size: cover;
		/* background-position: 0 -110px; */
	}
`;

export default Location;
