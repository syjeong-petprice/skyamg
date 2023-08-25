import { styled } from 'styled-components';

function Footer() {
	return (
		<FooterContainer>
			<h1>푸터</h1>
		</FooterContainer>
	);
}

const FooterContainer = styled.footer`
	width: 100%;
	height: 20vh;
	background-color: darkcyan;

	* {
		margin: 0;
	}
`;

export default Footer;
