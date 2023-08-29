import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../images/common/toplogo_w.png";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer } from "@mui/material";
import Sidebar from "./SwipeBar";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = (isOpen) => () => {
    setOpenSidebar(isOpen);
  };
  const handleSubNavOpen = () => {
    setIsSubNavOpen(true);
  };

  const handleSubNavClose = () => {
    setIsSubNavOpen(false);
  };

  return (
    <StyledHeader>
      <StyledDiv>
        <Link to="/skyamg">
          <div>
            <img src={logoImg} alt="logo" />
          </div>
        </Link>
      </StyledDiv>
      <StyledUl>
        {/* <li>
          <StyledLink to="/one">one</StyledLink>
        </li>
        <li>
          <StyledLink to="/two">two</StyledLink>
        </li> */}
        <li>
          <StyledLink to="/skyamg/skymedicaldoctor">의료진 소개</StyledLink>
        </li>
        <li>
          <StyledLink to="/skyamg/notice">공지사항</StyledLink>
        </li>
        <li>
          <StyledSubUl
            onMouseEnter={handleSubNavOpen}
            onMouseLeave={handleSubNavClose}
          >
            <StyledLink>전문진료과목</StyledLink>
            <StyledSubNav open={isSubNavOpen}>
              <li>
                <StyledLink to="/skyamg/subject/1">내과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/2">피부과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/3">외과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/4">치과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/5">재활의학과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/6">영상의학과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/7">안과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/8">응급의학과</StyledLink>
              </li>
              <li>
                <StyledLink to="/skyamg/subject/9">건강검진센터</StyledLink>
              </li>
            </StyledSubNav>
          </StyledSubUl>
        </li>
      </StyledUl>
      <StyledIconWrappr onClick={toggleSidebar(true)}>
        <MenuIcon />
      </StyledIconWrappr>
      <Sidebar open={openSidebar} onClose={toggleSidebar(false)} />
    </StyledHeader>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 8vh;
  background-color: #101010;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  opacity: 0.85;
  /* padding: 0 300px; */
`;

const StyledDiv = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  left: 15px;

  div {
    max-width: 150px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0 10vw;

  li {
    margin-right: 5vw;
  }
  @media screen and (max-width: 690px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #999;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding-bottom: 2px;
  height: 8vh;
  display: flex;
  align-items: center;

  &::before {
    content: ""; /* 가상 요소의 내용을 비워 둡니다 */
    position: absolute; /* 부모 요소인 .text를 기준으로 위치를 설정합니다 */
    bottom: 15px; /* 밑줄을 텍스트의 바닥에 맞춥니다 */
    left: 0; /* 시작 위치를 왼쪽 끝으로 설정합니다 */
    width: 0; /* 초기 밑줄의 너비는 0입니다 */
    height: 1px; /* 밑줄의 높이를 설정합니다 */
    background-color: #dabfa8; /* 밑줄의 색상을 설정합니다 */
    transition: width 0.3s ease; /* 밑줄의 너비가 변할 때의 애니메이션 효과를 설정합니다 */
  }

  &:hover {
    color: #dabfa8;
    /* font-weight: bold; */
  }
  &:hover::before {
    width: 100%; /* 마우스를 올렸을 때 밑줄의 너비를 100%로 만듭니다 */
  }
`;

const StyledSubUl = styled.ul`
  list-style-type: none;
  position: relative;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const StyledSubNav = styled.nav`
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 50%; /* 왼쪽 여백을 50%로 설정하여 가운데 정렬 */
  transform: translateX(-50%); /* 왼쪽으로 50%만큼 이동하여 가운데 정렬 */
  background-color: #101010;
  display: ${({ open }) => (open ? "flex" : "none")};
  padding: 0;
  margin: 0;
  width: 130px; /* 서브메뉴의 가로 크기 조정 */
  border-radius: 6px; /* 모서리 둥글게 만듦 */
  flex-direction: column;
  align-items: center;
  animation: ${({ open }) => (open ? fadeIn : "none")} 0.3s ease; /* 애니메이션 적용 */

  li {
    margin: 0;
  }
`;

const StyledIconWrappr = styled.div`
  position: absolute;
  right: 15px;
  color: #999;
  cursor: pointer;
  display: none;

  &:hover {
    color: #dabfa8;
  }

  @media screen and (max-width: 690px) {
    display: block;
  }
`;

export default Header;
