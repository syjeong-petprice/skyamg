import { styled, keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import subjectList from '../../../config/subjectInfo';

function SubjectAll() {
	const [animate, setAnimate] = useState(false);
	const [show, setShow] = useState(5);
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000, // 오토플레이 간격을 조절할 수 있습니다.
		pauseOnHover: true,
	};
	return (
		<SubjectContainer>
			<SliderWrapper>
				<div className={animate ? 'animate' : ''}>
					<StyledSlider {...settings}>
						{subjectList.map((subject) => (
							<div className="subjectSlide" key={subject.id}>
								<div>
									<img alt={subject.title} src={subject.primaryImg} />
								</div>
								<p>{subject.title}</p>
							</div>
						))}
					</StyledSlider>
				</div>
			</SliderWrapper>
		</SubjectContainer>
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
const imgZoomin = keyframes`
    from {
        scale: 1
    }
    to {
        scale: 1.2
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

const SubjectContainer = styled.section`
	width: 100%;
	height: 92vh;
	background-color: goldenrod;

	* {
		margin: 0;
	}
`;

const StyledSlider = styled(Slider)`
	.subjectSlide {
		div {
			width: 100%;
			height: 100%;
			/* height: 200px; */
			overflow: hidden;

			img {
				width: auto;
				height: 100%;
				transition: ease;
				cursor: pointer;

				&:hover {
					scale: 1.2;
					animation: ${imgZoomin} 1s ease;
				}
			}
		}
		p {
			color: #fff;
			font-size: 0.9rem;
			font-weight: bold;
			text-align: center;
			text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
		}
	}
	.slick-list {
		width: 85vw;
		height: 55vh;

		@media screen and (max-width: 690px) {
			height: 40vh;
		}
	}
	.slick-prev:before,
	.slick-next:before {
		display: none;
	}
`;

const SliderWrapper = styled.div`
	.animate {
		animation: ${slideUp} 4s ease;
	}
`;

export default SubjectAll;
