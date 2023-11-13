// import { styled } from 'styled-components';

// function Notice() {
// 	return (
// 		<NoticeContainer>
// 			<h1>공지사항</h1>
// 		</NoticeContainer>
// 	);
// }

// const NoticeContainer = styled.section`
// 	width: 100%;
// 	height: 92vh;
// 	background-color: goldenrod;

// 	* {
// 		margin: 0;
// 	}
// `;

// export default Notice;

import { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import imgOne from "../../../images/resource/images/스카이대기실.jpeg";
import imgTwo from "../../../images/resource/images/스카이입원실.jpeg";
import imgThree from "../../../images/resource/images/스카이입원실_2.jpeg";
import notice from "../../../config/notice";

// const skyInfo = [
//   {
//     id: 1,
//     img: imgOne,
//     name: "대기실",
//   },
//   {
//     id: 2,
//     img: imgTwo,
//     name: "강아지 치료실&입원실",
//   },
//   {
//     id: 3,
//     img: imgThree,
//     name: "고양이 치료실&입원실",
//   },
// ];

function Notice() {
  const handleClick = (e) => {
    console.log(e.target.name);
  };
  const handleChange = (e) => {
    console.log(e.target);
  };
  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    // nextArrow: (
    //   <StyledNextArrow onClick={handleClick} name="next">
    //     <div className="innerWrapper">
    //       <KeyboardArrowRightIcon
    //         style={{
    //           fontSize: "3rem",
    //           color: "#fff",
    //         }}
    //       />
    //     </div>
    //   </StyledNextArrow>
    // ),
    // prevArrow: (
    //   <StyledPrevArrow onClick={handleClick} name="prev">
    //     <div className="innerWrapper">
    //       <KeyboardArrowLeftIcon style={{ fontSize: "3rem", color: "#fff" }} />
    //     </div>
    //   </StyledPrevArrow>
    // ),
  };
  return (
    <PreviewContainer>
      <TextWrapper>
        <div className="titleWrapper">
          <h3>
            SKY's <span>News</span>
          </h3>
        </div>
        {/* <div className="contentWrapper">
          <p>
            깔끔하고 우아한 대리석 벽에 따뜻한 컬러의 조명을 더해주어 은은한
            아름다움과 고급스러움을 느끼실 수 있으며, 밝고 깨끗한 색상과
            유리벽을 이용해서 투명하고 청결한 병원 이미지를 표현했습니다.
            진료실의 유리벽은 은은한 그라데이션으로 처리하여 환자분이 보다
            편안하게 진료받으실 수 있습니다.
          </p>
        </div> */}
      </TextWrapper>
      <SlideWrapper>
        <div>
          {/* <StyledSlider onChange={handleChange} {...settings}>
            <div className="slideImg imgOne">
              <p>대기실</p>
            </div>
            <div className="slideImg imgTwo">
              <p>강아지 치료실&입원실</p>
            </div>
            <div className="slideImg imgThree">
              <p>고양이 치료실&입원실</p>
            </div>
          </StyledSlider> */}
          <StyledSlider {...settings}>
            {notice.map((notice) => (
              <div
                className="subjectSlide"
                key={notice.id}
                onClick={() => {
                  console.log(notice.id);
                }}
              >
                <div>
                  <img alt={notice.title} src={notice.img} />
                </div>
                <p className="title">{notice.title}</p>
                <p className="description">{notice.content}</p>
              </div>
            ))}
          </StyledSlider>
        </div>
      </SlideWrapper>
    </PreviewContainer>
  );
}

const imgZoomin = keyframes`
    from {
        scale: 1
    }
    to {
        scale: 1.2
    }
`;

const PreviewContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  * {
    margin: 0;
  }

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ffcfa0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

const TextWrapper = styled.div`
  width: 70vw;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  z-index: 99;

  @media screen and (max-width: 1290px) {
    flex-direction: column;
    justify-content: flex-end;
  }

  .titleWrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100%;
    @media screen and (max-width: 1290px) {
      width: 100%;
    }
    h3 {
      font-size: 2.5rem;
      font-weight: lighter;

      span {
        font-weight: bold;
      }

      @media screen and (max-width: 1290px) {
        font-size: 2rem;
      }

      @media screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 1.2rem;
      }
    }
  }
  .contentWrapper {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media screen and (max-width: 1290px) {
      width: 100%;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.8;
      @media screen and (max-width: 1290px) {
        padding: 0;
        margin-top: 30px;
      }
      @media screen and (max-width: 500px) {
        font-size: 0.8rem;
        margin: 0;
        height: 90%;
      }
      @media screen and (max-width: 400px) {
        margin: 0;
        height: 80%;
      }
    }
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 30%;
  /* background-color: yellowgreen; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledSlider = styled(Slider)`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  .subjectSlide {
    div {
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      overflow: hidden;

      img {
        max-width: 80%;
        height: 30vh;
        transition: ease;
        cursor: pointer;

        &:hover {
          scale: 1.2;
          animation: ${imgZoomin} 1s ease;
        }
        @media screen and (max-width: 800px) {
          /* width: 40vw; */
          height: 25vh;
        }
      }
    }
    .title {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 900;
      text-align: center;
      margin: 1rem;
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
    }
    .description {
      color: #fff;
      font-size: 0.9rem;
      font-weight: bold;
      text-align: center;
      text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.5);
    }
  }
  .slick-list {
    width: 85vw;
    height: fit-content;
    padding-top: 2rem;
    padding-bottom: 2rem;

    /* @media screen and (max-width: 690px) {
      height: 40vh;
    } */
  }
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;

const StyledNextArrow = styled.div`
  /* width: 50px; */
  /* height: 100%; */
  position: absolute;
  z-index: 99;
  /* top: 420px; */
  right: 30px;

  .innerWrapper {
    /* background-color: #2c3032; */
    width: 50px;
    height: 50px;
  }
`;
const StyledPrevArrow = styled.div`
  /* width: 150px;
	height: 50px; */
  position: absolute;
  z-index: 10;
  left: 0;
  /* top: 420px;
	left: 600px; */

  /* right: 300px; */
  /* @media screen and (max-width: 1280px) {
		left: 300px;
	}
	@media screen and (max-width: 960px) {
		left: 130px;
	}
	@media screen and (max-width: 740px) {
		left: 0;
	} */

  .innerWrapper {
    /* background-color: #30536f; */
    /* width: 550px;
		height: 50px; */

    /* @media screen and (max-width: 1280px) {
			width: 300px;
		}
		@media screen and (max-width: 960px) {
			width: 200px;
		} */
    /* @media screen and (max-width: 740px) {
			width: 520px;
		}
		@media screen and (max-width: 550px) {
			width: 380px;
		} */
  }
`;

export default Notice;
