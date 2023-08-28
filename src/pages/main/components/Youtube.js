import { styled, keyframes } from 'styled-components';
import imgOne from '../../../images/resource/youtube/1.png';
import imgTwo from '../../../images/resource/youtube/2.png';
import imgThree from '../../../images/resource/youtube/3.png';
import imgFour from '../../../images/resource/youtube/4.png';
import youtubeLogo from '../../../images/resource/youtube/youtubelogo.png';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const youtubeInfo = [
	{
		id: 1,
		title: '강아지&고양이 가루약 먹이는 방법',
		code: 'Yx4FOQ47flQ?si=BcDTkFl_2IYDTW_a',
		img: imgOne,
	},
	{
		id: 2,
		title: '인천동물병원 MRI검사 인천스카이동물메디컬센터',
		code: 'jfWjvgYb4-g?si=GaFS7ktQCrRRE1TO',
		img: imgTwo,
	},
	{
		id: 3,
		title: '닥스훈트 디스크 MRI검사 디스크 수술 인천동물병원',
		code: 'DtuyDsVEUcQ?si=A2PN1e9qAECWC8So',
		img: imgThree,
	},
	{
		id: 4,
		title: '부평스카이동물의료센터의 수술 후 물리치료 모습',
		code: 'noDZFjR6-Mw?si=OiAlp62NLDvAi8Xj',
		img: imgFour,
	},
];

function Youtube() {
	const [title, setTitle] = useState('Yx4FOQ47flQ?si=BcDTkFl_2IYDTW_a');

	return (
		<YoutubeContainer>
			<EmbedWrapper>
				<div className="youtubeWrapper">
					<iframe
						width="600"
						height="380"
						src={`https://www.youtube.com/embed/${title}`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
				<div className="textWrapper">
					<div className="heading">
						<h3>SKY동물메디컬센터</h3>
						<div>
							<img src={youtubeLogo} alt="youtube logo" />
						</div>
					</div>
					{/* <div className="content">
						<h4>최신형 MRI 장비 도입! 인천스카이메디컬</h4>
						<p>SKY동물메디컬센터를 구독하고 최신 정보를 받아보세요.</p>
					</div> */}
					<div>
						<Link to="https://www.youtube.com/@skyskyamg8351">
							<Button variant="contained" color="primary">
								채널 바로가기
							</Button>
						</Link>
					</div>
				</div>
			</EmbedWrapper>
			<ThumbnailWrapper>
				{youtubeInfo.map((item) => (
					<div className="imgWrapper" key={item.id}>
						<div>
							<img
								onClick={() => setTitle(item.code)}
								src={item.img}
								alt={item.title}
								value={item.code}
								style={{
									border: title === item.code ? '3px solid #fc1c00' : 'none',
								}}
							/>
						</div>
						<p>{item.title}</p>
					</div>
				))}
			</ThumbnailWrapper>
		</YoutubeContainer>
	);
}

const YoutubeContainer = styled.section`
	width: 100%;
	height: 92vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: whitesmoke;

	* {
		margin: 0;
	}
`;

const EmbedWrapper = styled.div`
	width: 80vw;
	height: 70%;
	display: flex;
	/* flex-direction: column; */
	justify-content: space-around;
	align-items: center;

	@media screen and (max-width: 1060px) {
		flex-direction: column;
	}

	.youtubeWrapper {
		iframe {
			border-radius: 20px;
			@media screen and (max-width: 1050px) {
				width: 500px;
				height: 300px;
			}
			@media screen and (max-width: 635px) {
				width: 480px;
				height: 290px;
			}
			@media screen and (max-width: 520px) {
				width: 400px;
				height: 240px;
			}

			@media screen and (max-width: 425px) {
				width: 375px;
				height: 210px;
			}
		}
	}
	.textWrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.heading {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-bottom: 30px;

			@media screen and (max-width: 1060px) {
				flex-direction: row;
			}
			@media screen and (max-width: 440px) {
				flex-direction: column;
			}

			h3 {
				font-size: 1.5rem;
				@media screen and (max-width: 440px) {
					font-size: 1.2rem;
				}
			}

			div {
				width: 150px;
				height: 50px;
				img {
					width: 100%;
					height: auto;
				}
			}
		}
		.content {
			margin-bottom: 30px;
		}
	}
`;

const ThumbnailWrapper = styled.div`
	width: 100%;
	height: 30%;
	background-color: #30536f;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	.imgWrapper {
		width: 20%;
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;

		img {
			width: 100%;
			height: auto;
		}
		p {
			height: 50px;
			color: #fff;
			font-size: 0.9rem;
			opacity: 0.8;
		}
	}
`;

export default Youtube;
