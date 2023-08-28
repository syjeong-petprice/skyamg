import { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import KakaoMap from '../../../components/KakaoMap';
import skyBuilding from '../../../images/resource/images/스카이야경2.jpg';

function Location() {
	const [animate, setAnimate] = useState(false);
	return (
		<LocationContainer>
			<TextWrapper>
				<div
					className={animate ? 'locationWrapper animate' : 'locationWrapper'}
				>
					<div className="addrWrapper">
						<div className="heading">
							<h3>Contact</h3>
						</div>
						<p>
							인천광역시 남동구 남동대로 799번길 34
							<br /> 구월지웰시티푸르지오 C동 3층
						</p>
						<p className="phone">☎️ 032-715-7959</p>
					</div>
					<div className="parkWrapper">
						<div className="heading">
							<h3>주차안내</h3>
						</div>
						<p>어디어디에 주차하시면 됩니다.</p>
					</div>
				</div>
			</TextWrapper>
			<MapWrapper>
				<div className="contactWrapper">
					<div className="innerWrapper">
						<KakaoMap />
					</div>
				</div>
			</MapWrapper>
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

	.heading {
		padding-left: 30px;
		margin-top: 35px;
		h3 {
			font-size: 1.8rem;
		}
	}
	p {
		font-size: 1.2rem;
		padding-left: 30px;
	}

	@media screen and (max-width: 690px) {
		flex-direction: column;
	}
`;

const TextWrapper = styled.div`
	width: 50%;
	height: 100%;

	@media screen and (max-width: 690px) {
		width: 100%;
		height: 50%;
	}

	.locationWrapper {
		width: 100%;
		height: 100%;
		background-color: #2963a3;
		color: #fff;
		background-image: url(${skyBuilding});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
	/* .imgWrapper {
		margin: 0;
		width: 100%;
		height: 50%;
		background-image: url(${skyBuilding});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		@media screen and (max-width: 550px) {
			display: none;
		}
	} */
`;

const MapWrapper = styled.div`
	width: 50%;
	height: 100%;
	@media screen and (max-width: 690px) {
		width: 100%;
		height: 50%;
	}

	.contactWrapper {
		width: 100%;
		height: 100%;
		background-color: #fffccb;

		.innerWrapper {
			width: 100%;
			height: 100%;

			@media screen and (max-width: 690px) {
				height: 100%;
			}
		}
	}
`;

export default Location;
