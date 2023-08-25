import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
	height: '60%',
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function TransitionsModal(props) {
	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={props.open}
				onClose={props.handleOpen}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<Fade in={props.open}>
					<Box sx={style}>
						<StyledUl>
							<li>
								<StyledLink to="/one" onClick={props.handleOpen}>
									one
								</StyledLink>
							</li>
							<li>
								<StyledLink to="/two" onClick={props.handleOpen}>
									two
								</StyledLink>
							</li>
							<li>
								<StyledLink to="/three" onClick={props.handleOpen}>
									three
								</StyledLink>
							</li>
							<li>
								<StyledLink to="/four" onClick={props.handleOpen}>
									four
								</StyledLink>
							</li>
							<li>
								<StyledLink to="/five" onClick={props.handleOpen}>
									five
								</StyledLink>
							</li>
						</StyledUl>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}

const StyledUl = styled.ul`
	width: 100%;
	height: 100%;
	list-style-type: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: 0;

	li {
		margin-right: 5vw;
	}
`;

const StyledLink = styled(Link)`
	color: #999;
	text-decoration: none;

	&:hover {
		color: #dabfa8;
	}
`;
