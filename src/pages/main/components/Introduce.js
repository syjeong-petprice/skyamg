import { styled } from 'styled-components';
import profileImg from '../../../images/resource/images/제목.png';
import univLogo from '../../../images/resource/images/충남대로고.png';

function Introduce() {
	return (
		<IntroduceContainer>
			<ImageWrapper>
				<img src={profileImg} alt="profile img" />
			</ImageWrapper>
			<TextWrapper>
				<div className="titleWrapper">
					<h2>안녕하세요.</h2>
					<h2>
						<strong>
							SKY 동물메디컬센터
							<br /> 대표원장 오이세입니다.
						</strong>
					</h2>
				</div>
				<div className="contentWrapper">
					<p>
						24시간 연중무휴로 공휴일, 명절 없이 한밤중이라도 걱정없이
						<br />
						진료받을 수 있도록 하는 진료시스템을 마련하고 있습니다.
					</p>
					<ul>
						<li>충남대학교 수의과대학 수의학과 졸업</li>
						<li>충남대학교 수의과대학 대학원 석사 졸업 (영상의학전공)</li>
						<li>충남대학교 수의과대학 대학원 박사과정 (영상의학전공)</li>
						<li>충남대학교 수의과대학 부속동물병원 진료수의사</li>
						<li>대전과학기술대학교 애완동물과 교수</li>
						<li>서울 충현동물종합병원 영상과장</li>
						<li>서울 충현동물종합병원 진료부장</li>
						<li>서울 충현동물종합병원 부원장</li>
						<li>현) 인천스카이동물의료센터 대표원장</li>
					</ul>
				</div>
			</TextWrapper>
		</IntroduceContainer>
	);
}

const IntroduceContainer = styled.section`
	width: 100%;
	height: 92vh;
	position: relative;
	display: flex;
	justify-content: space-between;
	background: url(${univLogo}) center no-repeat;
	background-size: 40%;

	@media screen and (max-width: 690px) {
		background-size: 90%;
		align-items: center;
	}

	* {
		margin: 0;
	}
`;

const TextWrapper = styled.div`
	padding: 10vh 15vw;

	.titleWrapper {
		h2 {
			font-size: 2rem;
			font-weight: normal;

			@media screen and (max-width: 690px) {
				font-size: 1.5rem;
			}
		}
	}
	.contentWrapper {
		p {
			margin: 35px 0;

			@media screen and (max-width: 690px) {
				font-size: 0.9rem;
			}
		}
		ul {
			li {
				list-style-type: none;
				position: relative;
				right: 35px;

				@media screen and (max-width: 690px) {
					font-size: 0.9rem;
				}

				&:before {
					content: '';
					display: inline-block;
					width: 3px;
					height: 9px;
					background: #3d81b8;
					transform: rotate(45deg);
					margin-right: 10px;
					vertical-align: super;
				}
			}
		}
	}
`;

const ImageWrapper = styled.div`
	width: 45%;
	height: 100%;
	position: absolute;
	right: 10vw;
	bottom: 0;
	display: flex;
	align-items: flex-end;

	@media screen and (max-width: 690px) {
		display: none;
	}

	img {
		width: 100%;
		height: auto;
	}
`;

export default Introduce;
