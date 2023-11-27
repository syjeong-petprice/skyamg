import React, { useState } from "react";
import { SwipeableDrawer, IconButton } from "@mui/material";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Sidebar({ open, onClose }) {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleAccordion = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };
  const handleClose = () => {
    setIsSubNavOpen(false);
    onClose();
  };
  const list = () => (
    <StyledSidebar>
      <IconButton
        onClick={handleClose}
        style={{ alignSelf: "flex-end", marginRight: "10px" }}
      >
        <CloseIcon />
      </IconButton>
      <StyledLink to="/" onClick={handleClose}>
        SKY 소개
      </StyledLink>
      {/* <StyledLink to="/skyamg#Main_Intro" onClick={handleClose}>
        two
      </StyledLink> */}
      {/* <StyledLink to="/skymedicaldoctor" onClick={handleClose}>
        의료진 소개
      </StyledLink>
      <StyledLink to="/notice" onClick={handleClose}>
        공지사항
      </StyledLink> */}
      <StyledLink
        style={{ color: isSubNavOpen ? "#011689" : "#999" }}
        onClick={toggleAccordion}
        alignCenter
      >
        전문진료센터안내
        {isSubNavOpen ? <ExpandLessStyledIcon /> : <ExpandMoreStyledIcon />}
      </StyledLink>
      {isSubNavOpen && (
        <StyledSubLinks>
          <StyledSubLink to="/subject/1" onClick={handleClose}>
            영상진단센터
          </StyledSubLink>
          <StyledSubLink to="/subject/2" onClick={handleClose}>
            정형신경센터
          </StyledSubLink>
          <StyledSubLink to="/subject/3" onClick={handleClose}>
            내과질환센터
          </StyledSubLink>
          <StyledSubLink to="/subject/4" onClick={handleClose}>
            한방재활센터
          </StyledSubLink>
          <StyledSubLink to="/subject/5" onClick={handleClose}>
            응급의학센터
          </StyledSubLink>
        </StyledSubLinks>
      )}
      <StyledLink
        to="https://icw.skyamg.com"
        target="_blank"
        onClick={handleClose}
      >
        웹차트
      </StyledLink>
    </StyledSidebar>
  );

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={handleClose}
      onOpen={handleClose}
    >
      {list()}
    </SwipeableDrawer>
  );
}

const StyledSidebar = styled.div`
  width: 240px;
  background-color: #fff;
  /* padding-top: 60px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLink = styled(Link)`
  color: #999;
  width: 90%;
  text-align: center;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 0.5px solid #ccc;
  display: block;
  transition: color 0.3s ease;
  justify-content: ${({ alignCenter }) =>
    alignCenter ? "center" : "space-between"};

  /* &:hover {
    color: #dabfa8;
  } */
`;
const StyledSubLinks = styled.div`
  margin-top: 10px;
  width: 100%;
  border-bottom: 0.5px solid #ccc;
`;

const StyledSubLink = styled(Link)`
  color: #999;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 5px;
  display: block;
  transition: color 0.3s ease;
  text-align: center;

  &:hover {
    color: #000;
  }
`;
const ExpandMoreStyledIcon = styled(ExpandMoreIcon)`
  position: absolute;
`;

const ExpandLessStyledIcon = styled(ExpandLessIcon)`
  position: absolute;
`;
