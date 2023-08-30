import { styled, keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import subjectList from "../../../config/subjectInfo";
import bgImg from "../../../images/resource/images/전문진료과목_bg.jpeg";
import { useNavigate } from "react-router-dom";

function SubjectAll() {
  const [animate, setAnimate] = useState(false);
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const [selectedSubject, setSelectedSubject] = useState(); // 클릭한 Subject
  const componentRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // 윈도우 리사이즈 이벤트 리스너 추가
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 800) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      //   const midScreen = window.innerHeight * 3.2;
      const componentTop = componentRef.current.getBoundingClientRect().top;

      // console.log('innerHeight : ', window.innerHeight);
      // console.log('scrollY : ', window.scrollY);
      // console.log('midScreen : ', midScreen);
      if (componentTop < (window.innerHeight * 2) / 3) {
        setAnimate(true);
      } 
      // else {
      //   setAnimate(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const clickHandler = (id) => {
    navigate(`/skyamg/subject/${id}`);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 오토플레이 간격을 조절할 수 있습니다.
    pauseOnHover: true,
  };
  return (
    <SubjectContainer ref={componentRef}>
      <TextWrapper>
        <div className={animate ? "animate" : ""}>
          {/* <p>SKY ANIMAL MEDICAL CENTER</p> */}
          <h2>
            SKY 동물메디컬센터의 {show && <br />} <strong>전문진료과목</strong>
          </h2>
        </div>
      </TextWrapper>
      <SliderWrapper>
        <div className={animate ? "animate" : ""}>
          <StyledSlider {...settings}>
            {subjectList.map((subject) => (
              <div
                className="subjectSlide"
                key={subject.id}
                onClick={() => {
                  console.log(subject.id);
                  clickHandler(subject.id);
                }}
              >
                <div>
                  <img alt={subject.title} src={subject.primaryImg} />
                </div>
                <p className="title">{subject.title}</p>
                <p className="description">{subject.customDescription}</p>
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
  height: fit-content;
  padding: 5rem;
  /* background-color: #89cff0; */
  /* background: linear-gradient(to bottom, #bcd4e6, #6ca0dc); */
  background-image: url(${bgImg});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  * {
    margin: 0;
  }

  /* &::before {
    content: "";
    display: block;
    width: 100%;
    height: 68%;
    background: #e9e9e9;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  } */
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
      /* height: 200px; */
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
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

const SliderWrapper = styled.div`
  width: 100%;
  height: 55%;
  /* background-color: yellowgreen; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .animate {
    animation: ${slideUp} 4s ease;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2.5rem;
      font-weight: 600;
      text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
      text-align: center;

      @media screen and (max-width: 800px) {
        font-size: 1.3rem;
      }
      strong {
        font-weight: 900;
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

export default SubjectAll;
