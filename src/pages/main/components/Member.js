import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgSky from '../../../images/resource/images/bg_Sky.png';
import vet1 from '../../../images/vet/doc_cheonwoojin.jpg';
import vet2 from '../../../images/vet/doc_oise.png';
import vet3 from '../../../images/vet/doc_moonjongsun.png';
import vet4 from '../../../images/vet/doc_jeongdaseul.png';
import vet5 from '../../../images/vet/doc_kimdohee.png';
import vet6 from '../../../images/vet/doc_choidongjun.png';
import vet7 from '../../../images/vet/doc_parksulki.png';
import vet8 from '../../../images/vet/doc_parkjoohyang.png';
import vet9 from '../../../images/vet/doc_choiyujin.png';
import vet10 from '../../../images/vet/doc_jeongtaegyu.png';
import vet11 from '../../../images/vet/doc_yoongihong.png';
import vet12 from '../../../images/vet/doc_jangminhyuk.png';
import vet13 from '../../../images/vet/doc_leesunback.png';
import vet14 from '../../../images/vet/doc_seoseungwon.png';
import vet15 from '../../../images/vet/doc_songjaeseong.png';

const vetInfo = [
	{
		id: 1,
		position: '대표원장',
		name: '천우진',
		img: vet1,
	},
	{
		id: 2,
		position: '대표원장',
		name: '오이세',
		img: vet2,
	},
	{
		id: 3,
		position: '원장',
		name: '문종선',
		img: vet3,
	},
	{
		id: 4,
		position: '부원장',
		name: '정다슬',
		img: vet4,
	},
	{
		id: 5,
		position: '외과과장',
		name: '김도희',
		img: vet5,
	},
	{
		id: 6,
		position: '외과과장',
		name: '최동준',
		img: vet6,
	},
	{
		id: 7,
		position: '내과과장',
		name: '박설기',
		img: vet7,
	},
	{
		id: 8,
		position: '영상의학과장',
		name: '박주향',
		img: vet8,
	},
	{
		id: 9,
		position: '진료과장',
		name: '최유진',
		img: vet9,
	},
	{
		id: 10,
		position: '한방응급의학과장',
		name: '정태규',
		img: vet10,
	},
	{
		id: 11,
		position: '진료수의사',
		name: '윤기홍',
		img: vet11,
	},
	{
		id: 12,
		position: '진료수의사',
		name: '장민혁',
		img: vet12,
	},
	{
		id: 13,
		position: '진료수의사',
		name: '이선백',
		img: vet13,
	},
	{
		id: 14,
		position: '진료수의사',
		name: '서승원',
		img: vet14,
	},
	{
		id: 15,
		position: '진료수의사',
		name: '송재성',
		img: vet15,
	},
];

function Member() {
	const [animate, setAnimate] = useState(false);
	const [show, setShow] = useState(5);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: show,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000, // 오토플레이 간격을 조절할 수 있습니다.
		pauseOnHover: true,
	};
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

	useEffect(() => {
		const handleScreenWidth = () => {
			if (window.innerWidth > 1180) {
				setShow(5);
			}
			if (window.innerWidth < 1180) {
				setShow(4);
			}
			if (window.innerWidth < 1040) {
				setShow(3);
			}
			if (window.innerWidth < 500) {
				setShow(2);
			}
		};

		window.addEventListener('resize', handleScreenWidth);

		return () => {
			window.removeEventListener('resize', handleScreenWidth);
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
						{vetInfo.map((vet) => (
							<div className="vetProfile" key={vet.id}>
								<div>
									<img alt={vet.name} src={vet.img} />
								</div>
								<p>
									{vet.position} {vet.name}
								</p>
							</div>
						))}
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
	.vetProfile {
		div {
			width: 100%;
			height: 100%;

			img {
				width: 100%;
				height: auto;
			}
		}
		p {
			color: #fff;
			font-size: 0.8rem;
			font-weight: bold;
			text-align: center;
		}
	}
	.slick-list {
		width: 85vw;
		height: 45vh;
		/* background-color: #f0f9ff; */

		@media screen and (max-width: 690px) {
			height: 30vh;
		}
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
