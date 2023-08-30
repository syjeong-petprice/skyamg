import { useState, useEffect, useRef } from "react";
import { styled, keyframes } from "styled-components";
import KakaoMap from "../../../components/KakaoMap";
import skyBuilding from "../../../images/resource/images/스카이야경2.jpg";

function Location() {
  const [animate, setAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const componentRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      // 예시: 화면의 중간에 도달했을 때 애니메이션을 실행하려면
      // const midScreen = window.innerHeight * 6.2;
      const componentTop = componentRef.current.getBoundingClientRect().top;

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
  return (
    <LocationContainer ref={componentRef}>
      <TextWrapper>
        <div
          className={animate ? "locationWrapper animate" : "locationWrapper"}
        >
          <div className="addrWrapper">
            <div className="heading">
              <h3>Contact</h3>
            </div>
            <p>
              인천광역시 남동구 남동대로 799번길 34
              <br /> 구월지웰시티푸르지오 C동 3층
            </p>
            <p className="phone">☎️ 032-715-7959</p>
          </div>
          <div className="parkWrapper">
            <div className="heading">
              <h3>주차안내</h3>
            </div>
            <p>어디어디에 주차하시면 됩니다.</p>
          </div>
        </div>
      </TextWrapper>
      <MapWrapper>
        <div className={animate ? "contactWrapper animate" : "contactWrapper"}>
          <div className="innerWrapper">
            <KakaoMap />
          </div>
        </div>
      </MapWrapper>
    </LocationContainer>
  );
}

const slideRight = keyframes`
    from {
        transform: translate(30%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0,0);
        opacity: 1;
    }
`;

const slideLeft = keyframes`
    from {
        transform: translate(-30%, 0);
        opacity: 0;
    }
    to {
        transform: translate(0, 0);
        opacity: 1;
    }
`;

const LocationContainer = styled.section`
  width: 100%;
  height: 92vh;
  display: flex;

  * {
    margin: 0;
  }

  .heading {
    padding-left: 30px;
    margin-top: 35px;
    h3 {
      font-size: 1.8rem;
      @media screen and (max-width: 690px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 500px) {
        font-size: 1.4rem;
      }
    }
  }
  p {
    font-size: 1.2rem;
    padding-left: 30px;
    @media screen and (max-width: 690px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  height: 100%;

  .animate {
    animation: ${slideLeft} 3s ease;
  }

  @media screen and (max-width: 690px) {
    width: 100%;
    height: 50%;
  }

  .locationWrapper {
    width: 100%;
    height: 100%;
    background-color: #2963a3;
    color: #fff;
    background-image: url(${skyBuilding});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  /* .imgWrapper {
		margin: 0;
		width: 100%;
		height: 50%;
		background-image: url(${skyBuilding});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		@media screen and (max-width: 550px) {
			display: none;
		}
	} */
`;

const MapWrapper = styled.div`
  width: 50%;
  height: 100%;
  .animate {
    animation: ${slideRight} 3s ease;
  }
  @media screen and (max-width: 690px) {
    width: 100%;
    height: 50%;
  }

  .contactWrapper {
    width: 100%;
    height: 100%;
    background-color: #fffccb;

    .innerWrapper {
      width: 100%;
      height: 100%;

      @media screen and (max-width: 690px) {
        height: 100%;
      }
    }
  }
`;

export default Location;
