import { styled } from 'styled-components';
import logoImg from '../images/common/toplogo_w.png';

function Footer() {
	return (
		<FooterContainer>
			<InfoWrapper>
				<div className="infoOne">
					<p>병원명: SKY 동물메디컬센터</p>
					<div className="separator"></div>
					<p>대표자: 오이세</p>
					<div className="separator"></div>

					<p>사업자번호: 628-02-02246</p>
				</div>
				<div className="infoTwo">
					<p>T. 032-715-7959</p>
					<div className="separator"></div>
					<p>인천광역시 남동구 남동대로 799번길 34</p>
				</div>
				<div className="infoThree">
					<p>Copyright ⓒ 2023.</p>
					<p>SKY Animal Medical Center All Rights Reserved.</p>
				</div>
			</InfoWrapper>
			{/* <SnsWrapper></SnsWrapper> */}
			<ContactWrapper>
				<div className="logoWrapper">
					<img src={logoImg} alt="logo" />
				</div>
			</ContactWrapper>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	width: 100%;
	height: 100%;
	padding-top: 1rem;
	background-color: #262626;
	padding: 20px 30px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 640px) {
		padding: 0;
		flex-direction: column;
	}

	* {
		margin: 0;
	}
`;

const InfoWrapper = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: 0.8rem;
	opacity: 0.7;
	color: #fff;

	@media screen and (max-width: 640px) {
		width: 100%;
		align-items: center;
		padding-top: 20px;
	}
	@media screen and (max-width: 420px) {
		align-items: flex-start;
		padding-left: 30px;
	}

	.infoOne,
	.infoTwo,
	.infoThree {
		display: flex;
		@media screen and (max-width: 420px) {
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			.separator {
				display: none;
			}
		}

		.separator {
			width: 1px;
			height: 17px;
			background-color: #fff;
			opacity: 0.4;
			margin: 0 10px;
		}
	}
`;
const SnsWrapper = styled.div`
	width: 30%;
`;
const ContactWrapper = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	@media screen and (max-width: 640px) {
		width: 100%;
		justify-content: center;
	}

	.logoWrapper {
		width: 200px;
		height: 80px;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		img {
			width: 100%;
			height: auto;
		}
	}
`;

export default Footer;
