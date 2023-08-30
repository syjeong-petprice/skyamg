import { styled, keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import bgImg from "../../../images/resource/images/bg_lami2.jpg";
import stepOne from "../../../images/resource/images/스카이방사선실.jpeg";
import stepTwo from "../../../images/resource/images/스카이X-ray.jpeg";
import stepThree from "../../../images/resource/images/스카이진료중.jpeg";

function Subject2() {
  const [animate, setAnimate] = useState(false);
  const [show, setShow] = useState(true);
  const [windowWidth, setWindowWidth] = useState();
  const componentRef = useRef(null);

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

  useEffect(() => {
    if (windowWidth > 800) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [windowWidth]);

  // useEffect(() => {
  // 	const handleScreenWidth = () => {
  // 		if (window.innerWidth <= 690) {
  // 			setShow(false);
  // 		}
  // 	};

  // 	window.addEventListener('resize', handleScreenWidth);

  // 	return () => {
  // 		window.removeEventListener('resize', handleScreenWidth);
  // 	};
  // }, []);
  return (
    <SubjectContainer ref={componentRef}>
      <TextWrapper>
        <div 
        // className={animate ? "animate" : ""}
        >
          <p>SKY ANIMAL MEDICAL CENTER</p>
          <h2>
            SKY 동물메디컬센터의 <strong>최첨단 장비</strong>
          </h2>
        </div>
      </TextWrapper>
      <ImgWrapper>
        <div className={animate ? "innerWrapper animate" : "innerWrapper"}>
          <div className="innerImg1"></div>
          <div className="innerText1">
            <h4>Step 01</h4>
            <p>
              다양한 첨단 영상의학검사장비를 활용해 <br />
              <strong>세심한 환부 촬영</strong>
            </p>
          </div>
        </div>
        {show && (
          <div className={animate ? "innerWrapper animate" : "innerWrapper"}>
            <KeyboardArrowDownIcon
              style={{ color: "#fff", fontSize: "3rem", margin: 0 }}
            />
          </div>
        )}
        <div className={animate ? "innerWrapper animate" : "innerWrapper"}>
          <div className="innerImg2"></div>
          <div className="innerText2">
            <h4>Step 02</h4>
            <p>
              전공자에 의해 이뤄지는 <br /> <strong>정확한 판독</strong>
            </p>
          </div>
        </div>
        {show && (
          <div className={animate ? "innerWrapper animate" : "innerWrapper"}>
            <KeyboardArrowDownIcon
              style={{ color: "#fff", fontSize: "3rem", margin: 0 }}
            />
          </div>
        )}
        <div className={animate ? "innerWrapper animate" : "innerWrapper"}>
          <div className="innerImg3"></div>
          <div className="innerText3">
            <h4>Step 03</h4>
            <p>
              검사 결과를 바탕으로
              <br /> <strong>우리 가족 건강지키는 진료</strong>
            </p>
          </div>
        </div>
      </ImgWrapper>
      <SubTextWrapper>
        <p className={animate ? "animate" : ""}>
          영상진단과에서는 다양한 첨단 영상의학검사장비를 이용하여 질병을
          정확하게 진단하는 것을 목표로 하며, 모든 촬영과 판독이 전공자에 의해
          이루어 지며, 안전한 검사를 위한 전용 마취 장비 및 모니터링 장비가
          구비되어 있습니다.
        </p>
      </SubTextWrapper>
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
  background-image: url(${bgImg});
  background-size: cover;

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
  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 2.5rem;
      font-weight: normal;
      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
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
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
  @media screen and (max-width: 420px) {
    height: 70%;
  }

  .animate {
    animation: ${slideUp} 4s ease;
  }

  .innerWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #fff;

    @media screen and (max-width: 800px) {
      flex-direction: row;
    }

    h4 {
      font-size: 1.2rem;
      margin-bottom: 10px;
      opacity: 0.6;
    }

    .innerImg1 {
      width: 25vw;
      height: 65%;
      background-image: url(${stepOne});
      background-size: cover;
      @media screen and (max-width: 690px) {
        width: 40vw;
        height: 100%;
      }
    }
    .innerImg2 {
      width: 25vw;
      height: 65%;
      background-image: url(${stepTwo});
      background-size: cover;
      @media screen and (max-width: 690px) {
        width: 40vw;
        height: 100%;
      }
    }
    .innerImg3 {
      width: 25vw;
      height: 65%;
      background-image: url(${stepThree});
      background-size: cover;
      @media screen and (max-width: 690px) {
        width: 40vw;
        height: 100%;
      }
    }

    .innerText1 {
      width: 25vw;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #30536f;
      @media screen and (max-width: 800px) {
        width: 40vw;
        font-size: 0.9rem;
      }
    }
    .innerText2 {
      width: 25vw;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #324352;
      @media screen and (max-width: 800px) {
        width: 40vw;
        font-size: 0.9rem;
      }
    }
    .innerText3 {
      width: 25vw;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #2c3032;
      @media screen and (max-width: 800px) {
        width: 40vw;
        font-size: 0.9rem;
      }
    }
  }
`;

const SubTextWrapper = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5vw;
  color: #fff;

  @media screen and (max-width: 420px) {
    display: none;
  }

  .animate {
    animation: ${slideUp} 4s ease;
  }

  p {
    text-align: center;
    font-size: 1.4rem;

    @media screen and (max-width: 690px) {
      font-size: 1.1rem;
    }
  }
`;

export default Subject2;
