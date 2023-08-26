import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgSky from '../../../images/resource/images/bg_Sky.png';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1,
};

function Member() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			// 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
			const midScreen = window.innerHeight * 1.2;

			// console.log('innerHeight : ', window.innerHeight);
			// console.log('scrollY : ', window.scrollY);
			// console.log('midScreen : ', midScreen);
			if (window.scrollY > midScreen) {
				setAnimate(true);
			} else {
				setAnimate(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			// 컴포넌트 언마운트 시 이벤트 리스너 제거
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<MemberContainer>
			<TitleWrapper>
				<div className={animate ? 'animate' : ''}>
					<h2>SKY의 자랑스런 얼굴들</h2>
					<p>
						우리 가족의 건강을 최우선으로 하며 믿음을 주는 SKY 동물 메디컬 센터
						의료진들입니다.
					</p>
				</div>
			</TitleWrapper>
			<SliderWrapper>
				<div className={animate ? 'animate' : ''}>
					<StyledSlider {...settings}>
						<div>
							<h3>1</h3>
						</div>
						<div>
							<h3>2</h3>
						</div>
						<div>
							<h3>3</h3>
						</div>
						<div>
							<h3>4</h3>
						</div>
						<div>
							<h3>5</h3>
						</div>
					</StyledSlider>
				</div>
			</SliderWrapper>
		</MemberContainer>
	);
}

const slideDown = keyframes`
    from {
        transform: translate(0, -50%);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translate(0, 50%);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const MemberContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-image: url(${bgSky});
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	* {
		margin: 0;
	}
`;

const TitleWrapper = styled.div`
	width: 100%;
	height: 30vh;

	.animate {
		animation: ${slideDown} 4s ease;
	}

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2 {
			color: #dabfa8;
			font-size: 3rem;
			text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
		}
		p {
			color: #fff;
			text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
		}
	}
`;

const StyledSlider = styled(Slider)`
	.slick-list {
		width: 65vw;
		height: 40vh;
		background-color: #f0f9ff;
	}
	.slick-prev:before,
	.slick-next:before {
		display: none;
	}
`;

const SliderWrapper = styled.div`
	.animate {
		animation: ${slideUp} 4s ease;
	}
`;

export default Member;
