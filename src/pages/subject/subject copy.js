import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { styled, css, keyframes } from "styled-components";
import { Box, Card, Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import vetInfo from "../../config/vetInfo";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

import img from "../../images/title/visual_greeting.jpeg";
import centerInfo from "../../config/centerInfo";
import Title from "../../components/Title";
import ActionAreaCard from "./components/sec3Card";
import Slider from "./components/equipSlider";
import MemberList from "./components/MemberList";
// import ExtraContentTable from "./components/ExtraContentTable";
import bg1 from "./bg-image/sec1title.jpg";
import bg2 from "./bg-image/영상의료센터.jpeg";
import bg3 from "./bg-image/영상의료센터.jpeg";
import bg4 from "./bg-image/영상의료센터.jpeg";
import bg5 from "../../images/resource/images/전문진료과목_bg.jpeg";
import prideImg from "./bg-image/pride_banner.jpeg";
import MetaTag from "../../MetaTag";

function Section1Component({ img, title, content }) {
  const [isAnimated, setIsAnimated] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else setIsAnimated(false);
  }, [inView]);

  return (
    <Section1>
      <TextBox className={`${isAnimated ? "animate" : ""}`} ref={ref}>
        <Typography gutterBottom>{title}</Typography>
        <Typography sx={{ whiteSpace: "pre-wrap" }} color="text.secondary">
          {content}
        </Typography>
      </TextBox>
      <ImgBox className={`${isAnimated ? "animate" : ""}`} ref={ref}>
        <img src={img} alt="Image" />
      </ImgBox>
    </Section1>
  );
}

function Section2Component({ id, info }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else setIsAnimated(false);
  }, [inView]);

  return (
    <Section2 id={id}>
      <Box>
        <Box>
          <InnerBox ref={ref}>
            <Typography className={`${isAnimated ? "animate" : ""}`}>
              {info.title1},
              <Bold className={`${isAnimated ? "animate" : ""}`}>
                {info.title2}
              </Bold>
            </Typography>
            <Typography className={`${isAnimated ? "animate" : ""}`}>
              {info.description}
            </Typography>
          </InnerBox>
        </Box>
      </Box>
    </Section2>
  );
}

function Section5Component({ data }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    } else setIsAnimated(false);
  }, [inView]);

  return (
    <Section5 ref={ref}>
      <Typography
        className={`${isAnimated ? "animate" : ""}`}
        // ref={ref}
        gutterBottom
      >
        대표수술안내
      </Typography>
      {data.map((list, index) => {
        const animateDelay = 300 * index; // 0.3초씩 시간 차이를 둠
        return (
          <div
            className="content"
            style={{ flexDirection: list.type === 1 ? "row" : "row-reverse" }}
          >
            <img
              src={list.img}
              alt={`img${index}`}
              className={`${list.type === 1 ? "left" : "rigth"} ${isAnimated ? "animate" : ""
                }`}
              style={{
                animationDelay: `${animateDelay}ms`,
                margin:
                  list.type === 1
                    ? "0 calc(100vw * (50 / 1580)) 0 0"
                    : "0 0 0 calc(100vw * (50 / 1580))",
              }}
            />
            <div
              className={`des-wrapper ${list.type === 1 ? "rigth" : "left"} ${isAnimated ? "animate" : ""
                }`}
            >
              {list.content.map((i, innerIndex) => {
                return (
                  <div>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Section5>
  );
}

function Subject() {
  const { id } = useParams();
  const info = centerInfo.find((item) => item.id === Number(id));
  // console.log(id, idx);
  // 1: 영상의료센터, 2: 신경정형, 3: 만성질환, 4: 한방재활
  if (!info) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          paddingTop: "200px",
          height: "80vh",
        }}
      >
        페이지 준비 중입니다.
      </div>
    );
  }

  const metaData = {
    title: info.title,
    description: info.sec2.description,
    imgsrc: info.primaryImg,
    url: window.location.href,
    keywords: info.title,
  };
  return (
    <>
      <MetaTag {...metaData} />
      <Title img={info.titleImg || img} title={info.title} />
      <Container>
        <Grid container spacing={0} sx={{ maxWidth: '1200px', mt: 10, paddingX: 5, }}>
          <CssBaseline />

          <Grid item xs={12} sm={12} md={4}>

            <Box sx={{ display: { md: 'flex', xs: 'flex', sm: 'flex' }, bgcolor: '#3260AE', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: { md: '100%', sm: '370px', xs: '370px' } }} >
              <VetImgBox>
                <img alt={'수의사 박주향'} src={vetInfo[0].img} />
              </VetImgBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#F4F4F4', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: { md: '100%', sm: '300px', xs: '300px' } }} >
              <Typography sx={{ fontWeight: '600', fontSize: '30px', color: '#3260AE', lineHeight: 2 }}>
                Special Veterinary
              </Typography>
              <Typography sx={{ fontWeight: '100', fontSize: '50px', color: '#000000', lineHeight: 1 }}>
                영상의학과장
              </Typography>
              <Typography sx={{ fontWeight: '700', fontSize: '50px', color: '#000000', lineHeight: 1.5 }}>
                수의사 박주향
              </Typography>
              <Typography sx={{ fontWeight: '400', fontSize: '24px', color: '#000000', maxWidth: '370px' }}>
                숙련된 영상의학 전문 수의사가
                안전하고 정확한 진단을 진행합니다.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Section2Component id={info.id} info={info.sec2} />
        <Section3>
          <Typography gutterBottom>
            SKY {info.title}를 선택해야하는 이유
          </Typography>
          <Box>
            {info.sec3.map((list, index) => {
              return <ActionAreaCard key={index} index={index} {...list} />;
            })}
          </Box>
        </Section3>
        <MemberList memberIdx={info.vetMemberIdx} subject={info.title} />
        {info.equip.length > 0 && (
          <Section4>
            <Typography gutterBottom>{info.title} 전문장비</Typography>
            <Slider equipmentData={info.equip} />
          </Section4>
        )}
        {info.surgery.length > 0 && <Section5Component data={info.surgery} />}
        <Section6>
          <div>
            <Typography
              className="title"
              sx={{ color: "#ccc", opacity: "0.8" }}
              gutterBottom
            >
              SKYAMC PRIDE
            </Typography>
            <Typography
              className="sub-title"
              sx={{ color: "#fff" }}
              gutterBottom
            >
              {info.pride.title}
            </Typography>
            <Typography
              sx={{ color: "#fff", whiteSpace: "pre-wrap" }}
              gutterBottom
            >
              {info.pride.description}
            </Typography>
          </div>
        </Section6>
      </Container >
    </>
  );
}



const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* Right로 이동하는 애니메이션 */
const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
  }
`;

const Section1 = styled.section`
  && {
    margin-top: calc(100vw * (120 / 1580));
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    && {
      flex-direction: column;
    }
  }
`;

const Section2 = styled(Section1)`
  && {
    height: calc(100vw * (550 / 1580));
    background: ${(props) => {
    let backgroundImage;
    console.log(props.id, backgroundImage);
    switch (props.id) {
      case 1:
        backgroundImage = `url(${bg1})`;
        break;
      case 2:
        backgroundImage = `url(${bg2})`;
        break;
      case 3:
        backgroundImage = `url(${bg3})`;
        break;
      case 4:
        backgroundImage = `url(${bg4})`;
        break;
      case 5:
        backgroundImage = `url(${bg5})`;
        break;
      default:
        backgroundImage = `url(${bg1})`;
    }
    return backgroundImage;
  }};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% calc(100vw * (210 / 390));

    @media screen and (max-width: 768px) {
      && {
        height: calc(100vw * (580 / 390));
        background-position: center bottom;
        background-size: 100% calc(100vw * (210 / 390));
      }
    }
  }
`;

Section2.propTypes = {
  id: PropTypes.number.isRequired, // id 프로퍼티를 전달받아야 합니다.
};

const Section3 = styled(Section1)`
  && {
    flex-direction: column;
  }
  > p {
    font-size: calc(100vw * (38 / 1240));
    font-weight: 700;
    margin-left: calc(100vw * (50 / 1580));
  }
  > div {
    margin: 0 calc(100vw * (50 / 1580));
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    > p {
      font-size: calc(100vw * (24 / 390));
    }
    > div {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const Section4 = styled(Section1)`
  && {
    flex-direction: column;
  }
  > p {
    margin-left: calc(100vw * (50 / 1580));
    font-size: calc(100vw * (38 / 1240));
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    && {
      /* width: 100%; */
      /* height: calc(100vw * (210 / 390)); */
    }
    > p {
      font-size: calc(100vw * (24 / 390));
    }
  }
`;

const Section5 = styled(Section4)`
  && {
    padding: 0 calc(100vw * (50 / 1580));
    > p {
      margin-left: 0;
      opacity: 0;
      transform: translateX(-100px);
      transition: opacity 0.5s, transform 0.5s;

      &.animate {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideInLeft} 0.5s ease-in-out; // 애니메이션 효과 적용
      }
    }
    .content {
      display: flex;
      margin-bottom: calc(100vw * (50 / 1580));
    }
    img {
      max-width: 40%;
      height: auto;
      margin-right: calc(100vw * (50 / 1580));
    }
    .left {
      opacity: 0;
      transform: translateX(-100px);
      transition: opacity 0.5s, transform 0.5s;

      &.animate {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideInLeft} 0.5s ease-in-out; // 애니메이션 효과 적용
      }
    }
    .rigth {
      transition: opacity 0.8s, transform 0.8s;
      opacity: 0;
      transform: translateX(100px);

      &.animate {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideInRight} 0.8 ease-in-out; // 애니메이션 효과 적용
      }
    }
    .des-wrapper {
      display: flex;
      flex-direction: column;
      /* .rigth {
        transition: opacity 0.8s, transform 0.8s;
        opacity: 0;
        transform: translateX(100px);

        &.animate {
          opacity: 1;
          transform: translateX(0);
          animation: ${slideInRight} 0.8 ease-in-out; // 애니메이션 효과 적용
        }
      }
      .left {
        opacity: 0;
        transform: translateX(-100px);
        transition: opacity 0.5s, transform 0.5s;

        &.animate {
          opacity: 1;
          transform: translateX(0);
          animation: ${slideInLeft} 0.5s ease-in-out; // 애니메이션 효과 적용
        }
      } */

      > div h3 {
        font-size: calc(100vw * (20 / 1240));
        font-weight: 700;
      }
      > div p {
        font-size: calc(100vw * (18 / 1240));
        /* font-weight: 600; */
      }
    }
  }
  @media screen and (max-width: 768px) {
    && {
      > p {
      }
      .content {
        display: flex;
        flex-direction: column !important;
      }
      img {
        max-width: unset !important;
        width: 100% !important;
        margin: 0 !important;
      }
      .des-wrapper {
        display: flex;
        flex-direction: column;
        > div h3 {
          font-size: calc(100vw * (20 / 390));
          font-weight: 700;
        }
        > div p {
          font-size: calc(100vw * (16 / 390));
          /* font-weight: 600; */
        }
      }
    }
  }
`;

const Section6 = styled(Section1)`
  && {
    /* height: calc(100vw * (600 / 1580)); */
    margin-bottom: calc(100vw * (120 / 1580));
    height: 100%;
    padding: 0 calc(100vw * (50 / 1580));
    /* flex-direction: column; */
    justify-content: start;
    background-image: url(${prideImg});
    background-repeat: no-repeat;
    background-position: center center;
    > div {
      width: 35%;
      margin: calc(100vw * (50 / 1580)) 0;
    }
    .title {
      font-size: calc(100vw * (38 / 1240));
      font-weight: 700;
    }
    .sub-title {
      font-size: calc(100vw * (30 / 1240));
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    && {
      background-image: unset;
      background-repeat: unset;
      background-position: unset;
      background-color: #222;
      > div {
        width: 100%;
      }
      .title {
        font-size: calc(100vw * (24 / 390));
      }
      .sub-title {
        font-size: calc(100vw * (18 / 390));
      }
    }
  }
`;

const TextBox = styled(Box)`
  && {
    margin: 0 calc(100vw * (50 / 1580));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: calc(100vw * (48 / 1240));
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;
    transform: translateX(-100px);

    :first-child {
      font-size: calc(100vw * (38 / 1240));
      font-weight: 700;
    }
    :last-child {
      font-size: calc(100vw * (24 / 1240));
      font-weight: 700;
    }

    &.animate {
      opacity: 1;
      transform: translateX(0);
      animation: ${slideInLeft} 0.3s ease-in-out; // 애니메이션 효과 적용
    }
  }

  @media screen and (max-width: 768px) {
    && {
      /* width: 100%; */
      /* height: calc(100vw * (210 / 390)); */
      :first-child {
        font-size: calc(100vw * (24 / 390));
      }
      :last-child {
        font-size: calc(100vw * (20 / 390));
      }
    }
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

const VetImgBox = styled(Box)`
  display:flex;  
  overflow: hidden;
  justify-content:center;
  img {
    height: 100%;
    max-height: 370px;
    transition: ease;
    &:hover {
      scale: 1.2;
      animation: ${imgZoomin} 0.3s ease;
    }
  }
`;


const ImgBox = styled(Box)`
  && {
    width: calc(100vw * (700 / 1240));
    /* height: calc(100vw * (400 / 1240)); */
    overflow: hidden;
    transition: opacity 0.3s, transform 0.3s;
    opacity: 0;
    transform: translateX(100px);

    &.animate {
      opacity: 1;
      transform: translateX(0);
      animation: ${slideInRight} 0.3s ease-in-out; // 애니메이션 효과 적용
    }

    img {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      /* height: calc(100vw * (210 / 390)); */
    }
  }
`;

const InnerBox = styled(Box)`
  && {
    width: calc(100vw * (540 / 1580));
    height: calc(100vw * (490 / 1580));
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(100vw * (30 / 1580));
    padding: calc(100vw * (50 / 1580));
    margin-left: calc(100vw * (50 / 1580));
    font-size: 18px;
    color: #fff;
    line-height: 1.44;
    background-color: #222;

    :first-child {
      /* font-size: calc(100vw * (16 / 390)); */
      font-size: calc(100vw * (26 / 1580));
      transition: opacity 0.3s, transform 0.3s;
      opacity: 0;
      transform: translateY(100px);

      &.animate {
        opacity: 1;
        transform: translateY(0);
        animation: ${slideInUp} 0.3s ease-in-out; // 애니메이션 효과 적용
      }
    }
    :last-child {
      font-size: calc(100vw * (18 / 1580));
      transition: opacity 0.5s, transform 0.5s;
      opacity: 0;
      transform: translateY(100px);

      &.animate {
        opacity: 1;
        transform: translateY(0);
        animation: ${slideInUp} 0.5s ease-in-out; // 애니메이션 효과 적용
      }
    }
  }

  @media screen and (max-width: 768px) {
    && {
      width: 100%;
      height: 100vw;
      margin-left: 0;
      gap: calc(100vw * (30 / 390));

      :first-child {
        font-size: calc(100vw * (20 / 390)) !important;
      }
      :last-child {
        font-size: calc(100vw * (16 / 390)) !important;
      }
    }
  }
`;

const Bold = styled(Typography)`
  && {
    font-size: calc(100vw * (30 / 1240)) !important;
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    && {
      margin-top: calc(100vw * (10 / 390));
      font-size: calc(100vw * (24 / 390)) !important;
    }
  }
`;

export default Subject;
