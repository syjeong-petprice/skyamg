import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Title from "../../components/Title";
import vetInfo from "../../config/vetInfo";
import { styled } from "styled-components";
import img from "../../images/title/visual_incheon.jpeg";
import { Typography, Box } from "@mui/material";
import bgImg from "../../images/resource/images/DSC06723.jpg";

function Doctor() {
  const { id } = useParams();
  const vet = vetInfo.find((item) => item.id === Number(id));
  console.log(vet);

  // 화면 크기를 감지하기 위한 상태 변수
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // 화면 크기 변경 이벤트 핸들러
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  // 컴포넌트가 마운트될 때와 화면 크기 변경 시 이벤트 리스너 등록 및 해제
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Title img={img} title="의료진 소개" />
      <VetContainer isMobile={isMobile}>
        {isMobile ? (
          <div>
            <TextBox2>
              <StaffTitle>
                {vet.title}, {vet.position}
              </StaffTitle>
              <Greetings>"{vet.greetings}"</Greetings>
              <StaffName>
                <Typography>수의사</Typography>
                <Typography>{vet.name}</Typography>
              </StaffName>
              {/* <Box>
                전문분야
                <Typography2>일반외과, 정형외과 / 디스크, 신경외과 등</Typography2>
              </Box> */}
              <ImgBox>
                <img src={vet.img} alt={vet.name} />
              </ImgBox>
              {vet.history.length > 0 && (
                <Box sx={{ marginBottom: 1 }}>
                  <Bedge2>약력</Bedge2>
                  {/* Bedge 디자인 택 1 */}
                  {vet.history.map((list) => {
                    return <Typography2>{list}</Typography2>;
                  })}
                  <Box sx={{ mt: 1 }}>
                    {vet.completion.length > 0 &&
                      vet.completion.map((list) => {
                        return <Typography3>・ {list}</Typography3>;
                      })}
                  </Box>
                </Box>
              )}
              {vet.paper.length > 0 && (
                <Box>
                  <Bedge2>주요논문</Bedge2>
                  {vet.paper.map((list) => {
                    return <Typography2>{list}</Typography2>;
                  })}
                </Box>
              )}
            </TextBox2>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextBox1>
              <StaffTitle>
                {vet.title}, {vet.position}
              </StaffTitle>
              <Greetings>"{vet.greetings}"</Greetings>
            </TextBox1>
            <div style={{ display: "flex" }}>
              <TextBox2>
                <StaffName>
                  <Typography>수의사</Typography>
                  <Typography>{vet.name}</Typography>
                </StaffName>
                {/* <Box>
                전문분야
                <Typography2>일반외과, 정형외과 / 디스크, 신경외과 등</Typography2>
              </Box> */}
                {vet.history.length > 0 && (
                  <Box sx={{ marginBottom: 1 }}>
                    <Bedge2>약력</Bedge2>
                    {/* Bedge 디자인 택 1 */}
                    {vet.history.map((list) => {
                      return <Typography2>{list}</Typography2>;
                    })}
                    <Box sx={{ mt: 1 }}>
                      {vet.completion.length > 0 &&
                        vet.completion.map((list) => {
                          return <Typography3>・ {list}</Typography3>;
                        })}
                    </Box>
                  </Box>
                )}
                {vet.paper.length > 0 && (
                  <Box>
                    <Bedge2>주요논문</Bedge2>
                    {vet.paper.map((list) => {
                      return <Typography2>{list}</Typography2>;
                    })}
                  </Box>
                )}
              </TextBox2>
              <ImgBox>
                <img src={vet.img} alt={vet.name} />
              </ImgBox>
            </div>
          </div>
        )}
      </VetContainer>
    </>
  );
}

const VetContainer = styled.div`
  && {
    width: 100%;
    background-image: url(${bgImg}); /* 이 부분 수정 */
    background-size: cover; /* 원하는 배경 이미지 크기 조절 설정 */
    background-repeat: no-repeat; /* 원하는 배경 이미지 반복 설정 */
  }
  & > div {
    padding: calc(100vw * (112 / 1240));
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-color: rgba(1, 1, 1, 0.8);
  }

  @media screen and (max-width: 768px) {
    && {
    }
    & > div {
      flex-direction: column;
      align-items: center;
      padding: calc(100vw * (112 / 1240));
      width: 100%;
      height: 100%;
      background-color: rgba(1, 1, 1, 0.8);
    }
  }
`;
const TextBox1 = styled(Box)`
  && {
    color: #fff;
    margin-bottom: calc(100vw * (50 / 1240));
  }

  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      font-size: calc(100vw * (26 / 390));
    }
  }
`;
const TextBox2 = styled(Box)`
  && {
    width: calc(100vw * (620 / 1240));
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      font-size: calc(100vw * (26 / 390));
    }
  }
`;

const StaffTitle = styled(Typography)`
  && {
    font-size: calc(100vw * (36 / 1240));
    font-weight: 700;
    opacity: 0.8;
    margin-top: 0;
    margin-bottom: calc(100vw * (30 / 1240));
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (20 / 390));
    }
  }
`;

const Greetings = styled(Typography)`
  && {
    font-size: calc(100vw * (24 / 1240));
    font-weight: 700;
    opacity: 0.6;
    margin-top: 0;
    margin-bottom: calc(100vw * (30 / 1240));
  }
  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (16 / 390));
    }
  }
`;

const StaffName = styled(Box)`
  && :first-child {
    margin-top: 0;
    margin-bottom: calc(100vw * (5 / 1240));
    font-size: calc(100vw * (22 / 1240));
    font-weight: 600;
    opacity: 0.8;
    color: #f6f6f6;
  }
  && :last-child {
    margin-top: 0;
    margin-bottom: calc(100vw * (4 / 1240));
    font-size: calc(100vw * (50 / 1240));
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    && :first-child {
      font-size: calc(100vw * (16 / 390));
    }
    && :last-child {
      margin-bottom: calc(100vw * (25 / 390));
      font-size: calc(100vw * (30 / 390));
    }
  }
`;

const Bedge = styled(Box)`
  && {
    font-size: calc(100vw * (18 / 1240));
    display: inline-block;
    margin-top: calc(100vw * (10 / 390));
    margin-bottom: 10px;
    font-weight: 800;
    padding: 5px 15px;
    border-radius: 3px;
    /* height: 28px; */
    line-height: 26px;
    background-color: #011689;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (16 / 390));
      padding: 15px;
      margin-bottom: 1rem;
    }
  }
`;

const Bedge2 = styled(Box)`
  && {
    font-size: calc(100vw * (22 / 1240));
    margin-top: calc(100vw * (10 / 390));
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: -0.02em;
    opacity: 0.45;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (18 / 390));
      margin-bottom: 1rem;
    }
  }
`;

const Typography2 = styled(Typography)`
  && {
    /* margin-top: calc(100vw * (45 / 1240)); */
    font-weight: 600;
    margin: 0;
    margin-bottom: 1px;
    font-size: calc(100vw * (16 / 1240));
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (12 / 390));
    }
  }
`;

const Typography3 = styled(Typography)`
  && {
    /* margin-top: calc(100vw * (45 / 1240)); */
    font-weight: 500;
    margin: 0;
    margin-bottom: 1px;
    font-size: calc(100vw * (14 / 1240));
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    && {
      font-size: calc(100vw * (10 / 390));
    }
  }
`;

const ImgBox = styled(Box)`
  && {
    width: calc(100vw * (420 / 1240));
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      margin: 2rem 0;
      order: 2; /* 요소의 순서를 변경하여 위치를 바꿉니다. */
    }
  }
`;

export default Doctor;
