import { styled } from 'styled-components';

function Preview() {
	return (
		<PreviewContainer>
			<h1>시설안내</h1>
		</PreviewContainer>
	);
}

const PreviewContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: darkmagenta;

	* {
		margin: 0;
	}
`;

export default Preview;
