import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Tabs, Checkbox, Image } from "antd";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

export async function getPopup() {
  const response = await axios.get(
    "http://api.vetell.kr/export/v1/homepageBanner?vetIdx=6"
    //"http://localhost:3000/export/v1/homepageBanner?vetIdx=6"
  );
  return response.data;
}

function Popup() {
  const [popupList, setPopupList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const STORAGE_KEY = "ignoreForAWeek";
  const [ignoredForAWeek, setIgnoredForAWeek] = useState(false);
  const [activeTab, setActiveTab] = useState("1"); // 현재 선택된 탭의 키

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const res = await getPopup();
        // 데이터 받아오면 상태 업데이트
        if (res.result === "ok") {
          setPopupList(res.data);
          console.log(res.data);
        } else console.log(res.result);
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    fetchData(); // 함수 호출
  }, []); // 빈 배열은 컴포넌트가 마운트될 때 한 번만 실행

  useEffect(() => {
    // 로컬 스토리지에서 저장된 상태와 날짜를 불러옵니다.
    const storedIgnoredForAWeek = localStorage.getItem(STORAGE_KEY);
    const storedDate = localStorage.getItem(`${STORAGE_KEY}_date`);

    if (storedIgnoredForAWeek === "true" && isWeekAgo(storedDate)) {
      // 일주일이 지났다면 상태 초기화
      setIgnoredForAWeek(false);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(`${STORAGE_KEY}_date`);
    } else if (storedIgnoredForAWeek === "true") {
      // 아직 일주일이 지나지 않았다면 상태를 설정
      setIgnoredForAWeek(true);
    }
  }, []);

  useEffect(() => {
    if (ignoredForAWeek) setIsModalOpen(false);
    else setIsModalOpen(true);
  }, [ignoredForAWeek]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isWeekAgo = (storedDate) => {
    if (!storedDate) {
      return false;
    }

    const storedTimestamp = dayjs(storedDate);
    const weekAgoTimestamp = dayjs().subtract(7, "days");

    return weekAgoTimestamp.isAfter(storedTimestamp);
  };

  const handleIgnoreForAWeek = (e) => {
    // 체크박스 상태가 변경될 때 로컬 스토리지에 상태와 날짜를 저장
    const isChecked = e.target.checked;
    setIgnoredForAWeek(isChecked);

    if (isChecked) {
      localStorage.setItem(STORAGE_KEY, "true");
      localStorage.setItem(`${STORAGE_KEY}_date`, dayjs().toISOString());
      handleClose();
    } else {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(`${STORAGE_KEY}_date`);
    }
  };

  const handleTabChange = (key) => {
    // 현재 탭 설정
    setActiveTab(key);
  };

  return (
    <Modal
      //   title={popup_info[0].title}
      open={isModalOpen && !ignoredForAWeek}
      onCancel={handleClose}
      maskClosable={false}
      footer={[
        popupList.length === 1 && popupList[0].link && (
          <Button
            color="primary"
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "#000",
              bgcolor: "#fff",
              width: "100%",
              mb: 1,
              border: "1px solid #ccc",
            }}
            key="singlePopupButton"
          >
            <Link to={popupList[0].link} target="_blank">
              {popupList[0].linkBtn}
            </Link>
          </Button>
        ),
        popupList.length > 1 &&
          popupList.find((popup) => popup.idx === Number(activeTab)).link && (
            <Button
              color="primary"
              sx={{
                fontWeight: 700,
                fontSize: "18px",
                color: "#000",
                bgcolor: "#fff",
                width: "100%",
                mb: 1,
                border: "1px solid #ccc",
              }}
              key={`activePopupButton`}
              onClick={() =>
                console.log(
                  popupList.find((popup) => popup.idx === Number(activeTab))
                )
              }
            >
              <Link
                to={
                  popupList.find((popup) => popup.idx === Number(activeTab))
                    .link
                }
                target="_blank"
              >
                {
                  popupList.find((popup) => popup.idx === Number(activeTab))
                    .linkBtn
                }
              </Link>
            </Button>
          ),
        <Checkbox checked={ignoredForAWeek} onChange={handleIgnoreForAWeek}>
          일주일간 보지 않기
        </Checkbox>,
      ]}
      style={{
        top: (popupList[0]?.content || popupList[0]?.link) && 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {popupList.length === 1 ? (
        <div
          style={{ marginTop: "30px", overflowY: "auto", maxHeight: "70vh" }}
        >
          <Image src={popupList[0].imageUrl} width={"100%"} />
          {popupList[0].content && <p>{popupList[0].content}</p>}
        </div>
      ) : (
        <Tabs
          defaultActiveKey="1"
          activeKey={activeTab}
          onChange={handleTabChange}
        >
          {popupList.map((popup) => (
            <Tabs.TabPane tab={popup.title} key={popup.idx}>
              <div style={{ overflowY: "auto", maxHeight: "70vh" }}>
                <Image src={popup.imageUrl} width={"100%"} />
                {popup.content && <p>{popup.content}</p>}
              </div>
            </Tabs.TabPane>
          ))}
        </Tabs>
      )}
    </Modal>
  );
}

export default Popup;
