import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { styled, keyframes } from 'styled-components';

import bgImg1 from '../../../images/resource/images/portfolio_053945.png';
import bgImg2 from '../../../images/resource/images/portfolio_062119.jpg(062119).jpg';
import bgImg3 from '../../../images/resource/images/portfolio_080228.jpg';

function Slider() {
	return (
		<StyledSwiper
			spaceBetween={0}
			slidesPerView={1}
			effect={'fade'}
			autoplay={{
				delay: 5000,
				disableOnInteraction: true,
			}}
			loop={true}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			modules={[Autoplay, EffectFade, Navigation, Pagination]}
		>
			<StyledSlideWrapper>
				<img alt="bg img 1" src={bgImg1} />
			</StyledSlideWrapper>
			<StyledSlideWrapper>
				<img alt="bg img 2" src={bgImg2} />
			</StyledSlideWrapper>
			<StyledSlideWrapper>
				<img alt="bg img 3" src={bgImg3} />
			</StyledSlideWrapper>
		</StyledSwiper>
	);
}
const zoomOutImg = keyframes`
		0% {
			scale: 1.5;
		}
		100% {
			scale: 1;
		}
	
`;

const StyledSwiper = styled(Swiper)`
	.swiper-slide-active img {
		animation: ${zoomOutImg} 5s ease-in-out;
	}

	@media screen and (min-width: 1280px) {
		height: 92vh;
	}
`;
const StyledSlideWrapper = styled(SwiperSlide)`
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: auto;
		scale: 1;
	}
`;

export default Slider;
