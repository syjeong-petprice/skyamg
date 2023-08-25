import { styled } from 'styled-components';

function Equip() {
	return (
		<EquipContainer>
			<h1>장비소개</h1>
		</EquipContainer>
	);
}

const EquipContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: blueviolet;

	* {
		margin: 0;
	}
`;

export default Equip;
