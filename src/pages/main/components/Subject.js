import { styled } from 'styled-components';
import bgImg from '../../../images/resource/images/스카이초음파실.jpeg';

function Subject() {
	return (
		<SubjectContainer>
			<TitleWrapper>
				<h2>01</h2>
				<p>눈으로 보는 정밀검진</p>
				<h3>
					<strong>최첨단</strong> 영상의학과
				</h3>
			</TitleWrapper>
			<StepWrapper>
				<div className="innerWrapper">
					<h3>01</h3>
					<p>
						접수부터 순조롭게 이어지는
						<br />
						빠르고 정확한
						<br />
						촬영
					</p>
					<p>신속 정확한 촬영</p>
				</div>
				<div className="innerWrapper">
					<h3>02</h3>
					<p>
						전공자에 의해 내려지는
						<br />
						신중하고 믿을 수 있는
						<br />
						판단
					</p>
					<p>신뢰할 수 있는 진단</p>
				</div>
				<div className="innerWrapper">
					<h3>03</h3>
					<p>
						전용 마취 및 모니터링 장비로
						<br />
						다칠 일 없이 안전한
						<br />
						검사
					</p>
					<p>안전한 검사</p>
				</div>
			</StepWrapper>
		</SubjectContainer>
	);
}

const SubjectContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-image: url(${bgImg});
	background-repeat: no-repeat;
	background-size: cover;

	* {
		margin: 0;
	}
`;

const TitleWrapper = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
`;

const StepWrapper = styled.div`
	width: 100%;
	height: 50;
	display: flex;
	justify-content: space-around;
	color: #fff;
`;

export default Subject;
