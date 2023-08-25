import { styled } from 'styled-components';

function Youtube() {
	return (
		<YoutubeContainer>
			<h1>유튜브</h1>
		</YoutubeContainer>
	);
}

const YoutubeContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: whitesmoke;

	* {
		margin: 0;
	}
`;

export default Youtube;
