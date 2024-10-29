import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Tabs, Checkbox, Image } from "antd";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { CloseOutlined } from "@ant-design/icons";

export async function getPopup() {
  const response = await axios.get("/homepageBanner?vetIdx=6");
  return response.data;
}

function Popup() {
  const [popupList, setPopupList] = useState([]);
  const [visiblePopups, setVisiblePopups] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPopup();
        if (res.result === "ok" && res.data.length > 0) {
          setPopupList(res.data);

          // 로컬 스토리지에서 각 팝업의 상태를 확인하고 설정
          const initialVisibility = res.data.map((popup) => {
            const storedIgnore = localStorage.getItem(
              `ignoreForAWeek_${popup.idx}`
            );
            const storedDate = localStorage.getItem(
              `ignoreForAWeekDate_${popup.idx}`
            );

            if (storedIgnore === "true" && !isWeekAgo(storedDate)) {
              return false; // 일주일간 보지 않기 상태인 경우 팝업을 숨김
            }
            return true;
          });
          setVisiblePopups(initialVisibility);
        } else {
          setPopupList([]);
        }
      } catch (error) {
        console.error("Error fetching popup data:", error);
      }
    };

    fetchData();
  }, []);

  const isWeekAgo = (storedDate) => {
    if (!storedDate) {
      return false;
    }

    const storedTimestamp = dayjs(storedDate);
    const weekAgoTimestamp = dayjs().subtract(7, "days");

    return weekAgoTimestamp.isAfter(storedTimestamp);
  };

  // 팝업 개별로 닫기
  const handleClosePopup = (index) => {
    setVisiblePopups((prev) => prev.map((v, i) => (i === index ? false : v)));
  };

  // 팝업 개별로 일주일간 보지 않기 설정
  const handleIgnoreForAWeek = (popupIdx, index, isChecked) => {
    if (isChecked) {
      // 팝업 개별적으로 일주일간 보지 않기 상태 저장
      localStorage.setItem(`ignoreForAWeek_${popupIdx}`, "true");
      localStorage.setItem(
        `ignoreForAWeekDate_${popupIdx}`,
        dayjs().toISOString()
      );
      handleClosePopup(index); // 팝업 닫기
    } else {
      // 로컬 스토리지에서 해당 팝업의 일주일간 보지 않기 상태 제거
      localStorage.removeItem(`ignoreForAWeek_${popupIdx}`);
      localStorage.removeItem(`ignoreForAWeekDate_${popupIdx}`);
    }
  };

  // 팝업 위치 조정 (각 팝업의 위치를 조금씩 다르게 설정)
  const getPopupStyle = (index) => {
    const isMobile = windowWidth <= 768;
    const baseTop = isMobile ? 20 : 50;
    const baseLeft = isMobile ? 10 : 50;
    const offset = isMobile ? 0 : index * 400;
    const width = isMobile ? windowWidth - 20 : 600;

    return {
      top: `${baseTop}px`,
      left: isMobile ? "50%" : `${baseLeft + offset}px`,
      transform: isMobile ? "translateX(-50%)" : "none",
      position: "absolute",
      zIndex: 1000 + index,
      width: `${width}px`,
      maxWidth: "100%",
    };
  };

  return (
    <>
      {popupList.map(
        (popup, index) =>
          visiblePopups[index] && (
            <div
              key={popup.idx}
              style={{
                width: "100%",
                height: "auto",
                backgroundColor: "white",
                border: "1px solid #ccc",
                position: "fixed",
                ...getPopupStyle(index),
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                maxHeight: windowWidth <= 768 ? "90vh" : "auto",
                overflowY: "auto",
              }}
            >
              <button
                onClick={() => handleClosePopup(index)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  border: "none",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  zIndex: 1,
                }}
              >
                <CloseOutlined />
              </button>
              {popup.link ? (
                <Link to={popup.link} target="_blank">
                  <img
                    src={popup.imageUrl}
                    alt={popup.title}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Link>
              ) : (
                <img
                  src={popup.imageUrl}
                  alt={popup.title}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              {popup.content && (
                <p style={{ padding: "0 10px", wordBreak: "break-word" }}>
                  {popup.content}
                </p>
              )}
              <Checkbox
                style={{ padding: "10px" }}
                checked={
                  localStorage.getItem(`ignoreForAWeek_${popup.idx}`) === "true"
                }
                onChange={(e) =>
                  handleIgnoreForAWeek(popup.idx, index, e.target.checked)
                }
              >
                일주일간 보지 않기
              </Checkbox>
            </div>
          )
      )}
    </>
  );
}

export default Popup;
