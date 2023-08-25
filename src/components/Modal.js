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
	boxShadow: 24,
	p: 4,
	backgroundColor: '#101010',
	borderRadius: '15px',
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
					<Box sx={style} style={{ opacity: 0.9 }}>
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
	display: inline-block;
	position: relative;
	padding-bottom: 2px;

	&::before {
		content: ''; /* 가상 요소의 내용을 비워 둡니다 */
		position: absolute; /* 부모 요소인 .text를 기준으로 위치를 설정합니다 */
		bottom: 0; /* 밑줄을 텍스트의 바닥에 맞춥니다 */
		left: 0; /* 시작 위치를 왼쪽 끝으로 설정합니다 */
		width: 0; /* 초기 밑줄의 너비는 0입니다 */
		height: 1px; /* 밑줄의 높이를 설정합니다 */
		background-color: #dabfa8; /* 밑줄의 색상을 설정합니다 */
		transition: width 0.3s ease; /* 밑줄의 너비가 변할 때의 애니메이션 효과를 설정합니다 */
	}

	&:hover {
		color: #dabfa8;
	}
	&:hover::before {
		width: 100%; /* 마우스를 올렸을 때 밑줄의 너비를 100%로 만듭니다 */
	}
`;
