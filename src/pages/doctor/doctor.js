import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import DoctorList from "./components/DoctorList";
import Title from "../../components/Title";
import vetInfo from "../../config/vetInfo";
import { styled } from "styled-components";
import img from "../../images/title/visual_incheon.jpeg";

function Doctor() {
  const { id } = useParams();
  const idx = vetInfo.findIndex((item) => item.id === Number(id));
  console.log(id, idx);
  const data = vetInfo[idx];
  return (
    <>
      <Title img={img} title="의료진 소개" />
      <VetContainer>
        <ul>
          {vetInfo.map((item) => {
            return <DoctorList key={item.id} item={item} />;
          })}
        </ul>
      </VetContainer>
    </>
  );
}

const VetContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ul {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

export default Doctor;
