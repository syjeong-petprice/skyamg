import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Slider from 'react-slick';
import bgImg1 from '../../../images/resource/images/portfolio_053945.png';
import bgImg2 from '../../../images/resource/images/portfolio_062119.jpg';
import bgImg3 from '../../../images/resource/images/portfolio_080228.jpg';

function Preview() {
	const handleClick = (e) => {
		console.log(e.target.name);
	};
	const handleChange = (e) => {
		console.log(e.target);
	};
	const settings = {
		dots: false,
		arrows: false,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};
	return (
		<PreviewContainer>
			<SlideWrapper>
				<div>
					<StyledSlider onChange={handleChange} {...settings}>
						<div className="slideImg imgOne">
							<div>
								<p>
									하루 <strong>24시간,</strong>
									1년 <strong>365일,</strong>
								</p>
								<p>
									당신 곁엔 <strong>SKY 동물메디컬센터</strong>
								</p>
								<div>
									<p>어디서든 방문하는</p>
									<p>
										<strong>각 지역 최대의 동물병원</strong>
									</p>
								</div>
							</div>
						</div>
						<div className="slideImg imgTwo">
							<div>
								<div>
									<span>최고의 의료진과 함께하는</span>
								</div>
								<div>
									<p>
										<strong>어디서도 볼 수 없는, 초특급 의료진!</strong>
									</p>
									<p>수의사들도 추천하는 동물병원!</p>
								</div>
							</div>
						</div>
						<div className="slideImg imgThree">
							<div>
								<div>
									<span>
										<strong>최첨단 시스템 도입</strong>
									</span>
								</div>
								<div>
									<span>
										<p>
											<strong>차별화되고 특화된 전문진료로,</strong>
										</p>
										<p>우리 가족의 건강한 행복을 약속합니다.</p>
									</span>
								</div>
							</div>
						</div>
					</StyledSlider>
				</div>
			</SlideWrapper>
		</PreviewContainer>
	);
}

const PreviewContainer = styled.section`
	width: 100%;
	height: 92vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	* {
		margin: 0;
	}
`;

const SlideWrapper = styled.div`
	width: 100%;
	height: 55%;
	/* background-color: yellowgreen; */
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledSlider = styled(Slider)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;

	/* 기본 스타일 */
	.slick-slide {
		transition: transform 3s ease;
		transform: scale(0.9);
		opacity: 0.6;
	}

	/* 활성화된 슬라이드에 대한 스타일 */
	.slick-slide.slick-active {
		transform: scale(1);
		opacity: 1;
		animation: fadeInAnimation 3s forwards;
	}

	@keyframes fadeInAnimation {
		from {
			opacity: 0.6;
			scale: 1.2;
		}
		to {
			opacity: 1;
			scale: 1;
		}
	}

	.slick-list {
		position: relative;
		z-index: 2;
		width: 99.2vw;
		height: 92vh;

		@media screen and (max-width: 1700px) {
			width: 99.1vw;
		}
		@media screen and (max-width: 1560px) {
			width: 99vw;
		}
		@media screen and (max-width: 1400px) {
			width: 98.9vw;
		}
		@media screen and (max-width: 1275px) {
			width: 98.8vw;
		}
		@media screen and (max-width: 1168px) {
			width: 98.7vw;
		}
		@media screen and (max-width: 1077px) {
			width: 98.6vw;
		}
		@media screen and (max-width: 1000px) {
			width: 98.5vw;
		}
		@media screen and (max-width: 935px) {
			width: 98.4vw;
		}
		@media screen and (max-width: 874px) {
			width: 98.3vw;
		}
		@media screen and (max-width: 825px) {
			width: 98.2vw;
		}
		@media screen and (max-width: 778px) {
			width: 98.1vw;
		}
		@media screen and (max-width: 738px) {
			width: 98vw;
		}
		@media screen and (max-width: 699px) {
			width: 97.9vw;
		}
		@media screen and (max-width: 667px) {
			width: 97.8vw;
		}
		@media screen and (max-width: 637px) {
			width: 97.7vw;
		}
		@media screen and (max-width: 609px) {
			width: 97.6vw;
		}
		@media screen and (max-width: 583px) {
			width: 97.5vw;
		}
		@media screen and (max-width: 560px) {
			width: 97.4vw;
		}
		@media screen and (max-width: 400px) {
			width: 96.4vw;
		}
		@media screen and (max-width: 394px) {
			width: 96.1vw;
		}

		div {
			/* background-color: palegoldenrod; */
			width: 100%;
			height: 100%;
		}

		.slideImg {
			p {
				margin-top: 30px;
				color: #fff;
				font-size: 1.2rem;
				font-weight: bold;
				text-align: center;
				text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
			}
		}

		.imgOne {
			background-image: url(${bgImg1});
			background-size: cover;
			background-position: center;
		}
		.imgTwo {
			background-image: url(${bgImg2});
			background-size: cover;
			background-position: center;
		}
		.imgThree {
			background-image: url(${bgImg3});
			background-size: cover;
			background-position: center;
		}
	}

	.slick-prev {
		/* position: absolute; */
		/* z-index: 10;
		bottom: 0;
		left: 80%; */
		&:before {
			display: none;
		}
	}
	.slick-next {
		/* position: absolute;
		z-index: 10;
		bottom: 0;
		right: 0; */
		&:before {
			display: none;
		}
	}
`;

export default Preview;
