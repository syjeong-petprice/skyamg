import { styled } from 'styled-components';

function Member() {
	return (
		<MemberContainer>
			<h1>수의사소개</h1>
		</MemberContainer>
	);
}

const MemberContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: burlywood;

	* {
		margin: 0;
	}
`;

export default Member;
