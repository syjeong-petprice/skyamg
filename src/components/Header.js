import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../images/common/toplogo_w.png';
import MenuIcon from '@mui/icons-material/Menu';
import Modal from './Modal';
import { useState } from 'react';

function Header() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(!open);
	};

	return (
		<StyledHeader>
			<StyledDiv>
				<Link to="/">
					<div>
						<img src={logoImg} alt="logo" />
					</div>
				</Link>
			</StyledDiv>
			<StyledUl>
				<li>
					<StyledLink to="/one">one</StyledLink>
				</li>
				<li>
					<StyledLink to="/two">two</StyledLink>
				</li>
				<li>
					<StyledLink to="/three">three</StyledLink>
				</li>
				<li>
					<StyledLink to="/four">four</StyledLink>
				</li>
				<li>
					<StyledLink to="/five">five</StyledLink>
				</li>
			</StyledUl>
			<StyledIconWrappr onClick={handleOpen}>
				<MenuIcon />
			</StyledIconWrappr>
			<Modal open={open} handleOpen={handleOpen} />
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	width: 100%;
	height: 8vh;
	background-color: #101010;
	display: flex;
	justify-content: center;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 999;
	opacity: 0.85;
	/* padding: 0 300px; */
`;

const StyledDiv = styled.div`
	height: 100%;
	position: absolute;
	display: flex;
	align-items: center;
	left: 15px;

	div {
		max-width: 150px;
		height: 100%;
		display: flex;
		align-items: center;
		img {
			width: 100%;
			height: auto;
		}
	}
`;

const StyledUl = styled.ul`
	width: 100%;
	height: 100%;
	list-style-type: none;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0 10vw;

	li {
		margin-right: 5vw;
	}
	@media screen and (max-width: 690px) {
		display: none;
	}
`;

const StyledLink = styled(Link)`
	color: #999;
	text-decoration: none;

	&:hover {
		color: #dabfa8;
	}
`;

const StyledIconWrappr = styled.div`
	position: absolute;
	right: 15px;
	color: #999;
	cursor: pointer;
	display: none;

	&:hover {
		color: #dabfa8;
	}

	@media screen and (max-width: 690px) {
		display: block;
	}
`;

export default Header;
