import { styled } from 'styled-components';

function Location() {
	return (
		<LocationContainer>
			<h1>위치안내/연락처</h1>
		</LocationContainer>
	);
}

const LocationContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: olivedrab;

	* {
		margin: 0;
	}
`;

export default Location;
