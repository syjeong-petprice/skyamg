import { styled } from 'styled-components';

function Subject3() {
	return (
		<SubjectContainer>
			<h1>과목소개3</h1>
		</SubjectContainer>
	);
}

const SubjectContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: darkkhaki;

	* {
		margin: 0;
	}
`;

export default Subject3;
