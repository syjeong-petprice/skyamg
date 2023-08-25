import { styled } from 'styled-components';

function Subject() {
	return (
		<SubjectContainer>
			<h1>과목소개</h1>
		</SubjectContainer>
	);
}

const SubjectContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: yellowgreen;

	* {
		margin: 0;
	}
`;

export default Subject;
