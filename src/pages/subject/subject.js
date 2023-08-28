import subjectInfo from "../../config/subjectInfo";
import { useParams } from "react-router-dom";

import { styled } from "styled-components";
import Title from "../../components/Title";
import img from "../../images/title/visual_greeting.jpeg";
import { Button } from "@mui/material";
import ExtraContentTable from "./components/ExtraContentTable";

import { useState } from "react";

function Subject() {
  const { id } = useParams();
  const idx = subjectInfo.findIndex((item) => item.id === Number(id));
  console.log(id, idx);
  const data = subjectInfo[idx];
  // 1: 내과, 2: 피부과, 3: 외과, 4: 치과, 5: 재활의학과, 6: 영상의학과, 7: 안과, 8: 응급의학과, 9: 건강검진센터
  const [selectedIdx, setSelectedIdx] = useState(0);
  return (
    <>
      <Title img={img} title={data.title} />
      <Container>
        {data.description && <p className="des">{data.description}</p>}
        {data.subjects.length > 1 && (
          <ul>
            {data.subjects.map((item, i) => {
              return (
                <Button
                  sx={{ width: "130px" }}
                  onClick={() => setSelectedIdx(i)}
                  variant={i === selectedIdx ? "contained" : "outlined"}
                  key={item.id}
                >
                  {item.name}
                </Button>
              );
            })}
          </ul>
        )}
        <div className="subInfo">
          <img src={data.subjects[selectedIdx].img} alt="" />
          <div>
            <h2 className="title">{data.subjects[selectedIdx].name}</h2>
            {data.subjects[selectedIdx].content.length > 0 &&
              data.subjects[selectedIdx].content.map((item) => {
                return (
                  <>
                    {item.subName !== "" && (
                      <h3>
                        {"• "}
                        {item.subName}
                      </h3>
                    )}
                    <p>{item.subContent}</p>
                    {item.extraContent.length > 0 && (
                      <ExtraContentTable extraContent={item.extraContent} />
                    )}
                  </>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p.des {
    width: 92%;
    text-align: center;
    font-size: 30px;
    color: #888c8d;
    letter-spacing: -1px;
    line-height: 1.5em;
    transition: all 0.2s;
  }
  > ul {
    padding: 0 20px;
    max-width: 100%;
    display: grid;
    gap: 10px;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
  > div.subInfo {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 92%;
    > img {
      width: 100%;
    }
    > div {
      width: 100%;
      margin-top: 20px;
      > h2.title {
        font-size: 24px;
        font-weight: 800;
        display: table-cell;
        width: 250px;
        vertical-align: top;
        letter-spacing: -1px;
      }
      > p {
        font-size: 16px;
        color: #888c8d;
        letter-spacing: -0.8px;
        line-height: 1.5em;
        transition: all 0.2s;
      }
      > h3 {
        font-size: 24px;
        font-weight: 800;
        vertical-align: top;
        letter-spacing: -1px;
        margin-bottom: 15px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    p.des {
      font-size: 18px;
    }
    div.subInfo {
      > div {
        > h2.title {
          font-size: 18px;
          margin-bottom: 15px;
          padding-left: 0;
        }
        > p {
          font-size: 12px;
        }
        > h3 {
          font-size: 16px;
          margin-bottom: 15px;
          padding-left: 0;
        }
      }
    }
  }
`;

export default Subject;
