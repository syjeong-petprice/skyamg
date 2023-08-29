import { styled } from 'styled-components';
import icons from '../images/resource/images/ico_quick.png';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function Links() {
	return (
		<LinkContainer>
			<ul>
				<li className="kakao">
					<a href="/"></a>
				</li>
				<li className="notice">
					<a href="/"></a>
				</li>
				<li className="insta">
					<a href="/"></a>
				</li>
				<li className="tube">
					<a href="/"></a>
				</li>
				<li className="naver">
					<a href="/"></a>
				</li>
				<li className="location">
					<a href="/"></a>
				</li>
				<li className="time">
					<a href="/"></a>
				</li>
				<li className="top">
					<a href="/">
						<KeyboardDoubleArrowUpIcon style={{ color: '#fff' }} />
					</a>
				</li>
			</ul>
		</LinkContainer>
	);
}

const LinkContainer = styled.nav`
	width: 40px;
	position: fixed;
	top: 50%;
	right: 60px;
	transform: translateY(-50%);
	z-index: 1000;

	ul {
		li {
			list-style: none;
			text-align: left;
			margin-bottom: 10px;
		}
	}

	.kakao {
		a {
			position: relative;
			display: block;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(242, 238, 230, 0.7);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
			&::before {
				content: '';
				display: block;
				width: 35px;
				height: 32px;
				background: url(${icons}) 0 0 no-repeat;
				background-size: 207px 50px;
				background-position: 6px 8px;
			}
		}
	}
	.notice {
		a {
			position: relative;
			display: block;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(242, 238, 230, 0.7);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
			&::before {
				content: '';
				display: block;
				width: 32px;
				height: 32px;
				background: url(${icons}) 0 0 no-repeat;
				background-size: 228px 49px;
				background-position: -31px 6px;
			}
		}
	}
	.insta {
		a {
			position: relative;
			display: block;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(242, 238, 230, 0.7);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
			&::before {
				content: '';
				display: block;
				width: 37px;
				height: 35px;
				background: url(${icons}) 0 0 no-repeat;
				background-size: 225px 55px;
				background-position: -60px 6px;
			}
		}
	}
	.tube {
		a {
			position: relative;
			display: block;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(242, 238, 230, 0.7);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
			&::before {
				content: '';
				display: block;
				width: 37px;
				height: 35px;
				background: url(${icons}) 0 0 no-repeat;
				background-size: 240px 58px;
				background-position: -99px 6px;
			}
		}
	}
	.naver {
		a {
			position: relative;
			display: block;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(242, 238, 230, 0.7);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
			&::before {
				content: '';
				display: block;
				width: 35px;
				height: 36px;
				background: url(${icons}) 0 0 no-repeat;
				background-size: 235px 56px;
				background-position: -129px 6px;
			}
		}
	}
	.location {
		a {
			position: relative;
			display: block;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(242, 238, 230, 0.7);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
			&::before {
				content: '';
				display: block;
				width: 35px;
				height: 40px;
				background: url(${icons}) 0 0 no-repeat;
				background-size: 250px 62px;
				background-position: -170px 4px;
			}
		}
	}

	.top {
		a {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 40px;
			height: 40px;
			font-size: 0;
			color: transparent;
			line-height: 0;
			/* padding: 10px; */
			border-radius: 100%;
			background: rgba(0, 0, 0, 0.6);
			transition: all 0.5s;
			text-align: center;
			&:visited {
				text-decoration: none;
			}
		}
	}
`;

export default Links;
