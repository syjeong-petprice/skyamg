import { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import bgImg from '../../../images/resource/images/스카이초음파실.jpeg';

function Subject() {
	const [animate, setAnimate] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			// 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
			const midScreen = window.innerHeight / 1.3;

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
		<SubjectContainer>
			<TitleWrapper>
				<div className={animate ? 'innerWrapper animate' : ''}>
					<h2>01</h2>
					<p>눈으로 보는 정밀검진</p>
					<h3>
						<strong>최첨단</strong> 영상의학과
					</h3>
				</div>
			</TitleWrapper>
			<StepWrapper>
				<div className={animate ? 'innerWrapper animate' : ''}>
					<h3>01</h3>
					<p>
						접수부터 순조롭게 이어지는
						<br />
						빠르고 정확한 촬영
					</p>
					<p>신속 정확한 촬영</p>
				</div>
				<div className={animate ? 'innerWrapper animate' : ''}>
					<h3>02</h3>
					<p>
						전공자에 의해 내려지는
						<br />
						신중하고 믿을 수 있는 판단
					</p>
					<p>신뢰할 수 있는 진단</p>
				</div>
				<div className={animate ? 'innerWrapper animate' : ''}>
					<h3>03</h3>
					<p>
						전용 마취 및 모니터링 장비로
						<br />
						다칠 일 없이 안전한 검사
					</p>
					<p>안전한 검사</p>
				</div>
			</StepWrapper>
		</SubjectContainer>
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

const SubjectContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	@media screen and (max-width: 400px) {
		padding: 30px 0;
	}

	* {
		margin: 0;
	}
`;

const TitleWrapper = styled.div`
	width: 100%;
	height: 50%;
	color: #fff;

	.innerWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		h2 {
			font-size: 6rem;
			@media screen and (max-width: 690px) {
				font-size: 4rem;
			}
		}
		h3 {
			font-size: 3rem;
			font-weight: lighter;
			@media screen and (max-width: 690px) {
				font-size: 2rem;
			}
		}
		h3 strong {
			border-bottom: 5px solid currentColor;
			text-decoration: none; /* 기존 밑줄 제거 */
			padding-bottom: 3px; /* 3px는 텍스트와 밑줄 사이의 거리입니다 */
		}

		p {
			font-size: 1.5rem;
			font-weight: normal;
		}
	}

	.animate {
		animation: ${slideDown} 4s ease;
	}
`;

const StepWrapper = styled.div`
	width: 100%;
	height: 50;
	display: flex;
	justify-content: space-around;
	color: #fff;

	@media screen and (max-width: 600px) {
		flex-direction: column;
	}

	.innerWrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		h3 {
			font-size: 3rem;
			@media screen and (max-width: 600px) {
				font-size: 2rem;
			}
		}
		p {
			text-align: center;
			margin-bottom: 20px;
			@media screen and (max-width: 600px) {
				font-size: 0.9rem;
			}
		}
	}
	.animate {
		animation: ${slideUp} 4s ease;
	}
`;

export default Subject;