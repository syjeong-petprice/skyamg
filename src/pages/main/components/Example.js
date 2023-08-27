import { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function CustomTabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

CustomTabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

function Example() {
	const [animate, setAnimate] = useState(false);
	const [show, setShow] = useState(true);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			// 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
			const midScreen = window.innerHeight * 4.4;

			// console.log('innerHeight : ', window.innerHeight);
			// console.log('scrollY : ', window.scrollY);
			// console.log('midScreen : ', midScreen);
			if (window.scrollY > midScreen) {
				setAnimate(true);
			} else {
				setAnimate(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			// 컴포넌트 언마운트 시 이벤트 리스너 제거
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleScreenWidth = () => {
			if (window.innerWidth <= 690) {
				setShow(false);
			}
		};

		window.addEventListener('resize', handleScreenWidth);

		return () => {
			window.removeEventListener('resize', handleScreenWidth);
		};
	}, []);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<ExampleContainer>
			<TextWrapper>
				<div className={animate ? 'animate' : ''}>
					<p>SKY ANIMAL MEDICAL CENTER</p>
					<h2>
						영상의학과 <strong>실제 진료 사례</strong>
					</h2>
				</div>
			</TextWrapper>
			<ImgWrapper>
				<div className={animate ? 'animate' : ''}>
					<Box sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="basic tabs example"
								centered
							>
								<Tab label="척수 MRI" {...a11yProps(0)} />
								<Tab label="두개골 MRI" {...a11yProps(1)} />
								<Tab label="척추 X-ray" {...a11yProps(2)} />
								<Tab label="복부 X-ray" {...a11yProps(2)} />
								<Tab label="슬개골 X-ray" {...a11yProps(2)} />
							</Tabs>
						</Box>
						<CustomTabPanel value={value} index={0}>
							<div className="tabImg"></div>
						</CustomTabPanel>
						<CustomTabPanel value={value} index={1}>
							<div className="tabImg"></div>
						</CustomTabPanel>
						<CustomTabPanel value={value} index={2}>
							<div className="tabImg"></div>
						</CustomTabPanel>
						<CustomTabPanel value={value} index={3}>
							<div className="tabImg"></div>
						</CustomTabPanel>
						<CustomTabPanel value={value} index={4}>
							<div className="tabImg"></div>
						</CustomTabPanel>
					</Box>
				</div>
			</ImgWrapper>
		</ExampleContainer>
	);
}

const slideDown = keyframes`
    from {
        transform: translate(0, -50%);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translate(0, 50%);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const ExampleContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: #fff;

	* {
		margin: 0;
	}
`;

const TextWrapper = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #403631;

	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h2 {
			font-size: 2.5rem;
			font-weight: normal;
			@media screen and (max-width: 690px) {
				font-size: 2rem;
			}
		}
		p {
			font-weight: bold;
			font-size: 0.9rem;
			opacity: 0.6;
		}
	}

	.animate {
		animation: ${slideDown} 4s ease;
	}
`;

const ImgWrapper = styled.div`
	.animate {
		animation: ${slideUp} 4s ease;
	}

	.tabImg {
		width: 100%;
		height: 400px;
		background-color: tomato;
	}
`;
export default Example;
