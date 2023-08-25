import { styled } from 'styled-components';

function Subject2() {
	return (
		<SubjectContainer>
			<h1>과목소개2</h1>
		</SubjectContainer>
	);
}

const SubjectContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: blanchedalmond;

	* {
		margin: 0;
	}
`;

export default Subject2;
