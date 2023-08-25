import { styled } from 'styled-components';

function Notice() {
	return (
		<NoticeContainer>
			<h1>공지사항</h1>
		</NoticeContainer>
	);
}

const NoticeContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: goldenrod;

	* {
		margin: 0;
	}
`;

export default Notice;
