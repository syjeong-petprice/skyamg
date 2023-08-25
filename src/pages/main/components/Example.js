import { styled } from 'styled-components';

function Example() {
	return (
		<ExampleContainer>
			<h1>사례소개</h1>
		</ExampleContainer>
	);
}

const ExampleContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: tomato;

	* {
		margin: 0;
	}
`;

export default Example;
