import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import bgSky from '../../../images/resource/images/bg_Sky.png';

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
		</MemberContainer>
	);
}

const MemberContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-image: url(${bgSky});
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;

	* {
		margin: 0;
	}
`;

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

export default Member;
