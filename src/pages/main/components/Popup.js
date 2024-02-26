import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Tabs, Checkbox, Image } from "antd";
import Button from "@mui/material/Button";
import dayjs from "dayjs";

export async function getPopup() {
  const response = await axios.get("/homepageBanner?vetIdx=6");
  return response.data;
}

function Popup() {
  const [popupList, setPopupList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const STORAGE_KEY = "ignoreForAWeek";
  const [ignoredForAWeek, setIgnoredForAWeek] = useState(false);
  const [activeTab, setActiveTab] = useState(); // 현재 선택된 탭의 키

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const res = await getPopup();
        // 데이터 받아오면 상태 업데이트
        if (res.result === "ok" && res.data.length > 0) {
          setPopupList(res.data);
          setActiveTab(String(res.data[0].idx));
          console.log(res.data);
        } else {
          // 팝업 데이터가 비어있을 때 모달 닫기
          setPopupList([]);
          setIsModalOpen(false);
        }
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
    const storedPopupList = JSON.parse(
      localStorage.getItem(`${STORAGE_KEY}_popupList`)
    );

    if (
      storedIgnoredForAWeek === "true" &&
      storedPopupList &&
      popupList.length > 0 &&
      (!isPopupListEqual(
        storedPopupList,
        popupList.map((popup) => popup.idx)
      ) ||
        isWeekAgo(storedDate))
    ) {
      // 노출중인 팝업리스트가 변경되었거나, 일주일이 지났다면 상태 초기화
      // console.log("초기화");
      setIgnoredForAWeek(false);
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(`${STORAGE_KEY}_date`);
      localStorage.removeItem(`${STORAGE_KEY}_popupList`);
    } else if (storedIgnoredForAWeek === "true") {
      // 아직 일주일이 지나지 않았다면 상태를 설정
      setIgnoredForAWeek(true);
    }
  }, [popupList]);

  useEffect(() => {
    if (ignoredForAWeek || popupList.length === 0) setIsModalOpen(false);
    else setIsModalOpen(true);
  }, [ignoredForAWeek]);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isPopupListEqual = (list1, list2) => {
    const sortedList1 = [...list1].sort((a, b) => a - b);
    const sortedList2 = [...list2].sort((a, b) => a - b);
    // console.log(
    //   "test",
    //   JSON.stringify(sortedList1),
    //   JSON.stringify(sortedList2),
    //   JSON.stringify(sortedList1) === JSON.stringify(sortedList2)
    // );
    return JSON.stringify(sortedList1) === JSON.stringify(sortedList2);
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
      const popupIdxList = popupList
        .map((popup) => popup.idx)
        .sort((a, b) => a - b);
      localStorage.setItem(STORAGE_KEY, "true");
      localStorage.setItem(`${STORAGE_KEY}_date`, dayjs().toISOString());
      localStorage.setItem(
        `${STORAGE_KEY}_popupList`,
        JSON.stringify(popupIdxList)
      );
      handleClose();
    } else {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(`${STORAGE_KEY}_date`);
      localStorage.removeItem(`${STORAGE_KEY}_popupList`);
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
        activeTab && (
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {popupList.map((popup) => (
              <Tabs.TabPane tab={popup.title} key={popup.idx}>
                <div style={{ overflowY: "auto", maxHeight: "70vh" }}>
                  <Image src={popup.imageUrl} width={"100%"} />
                  {popup.content && <p>{popup.content}</p>}
                </div>
              </Tabs.TabPane>
            ))}
          </Tabs>
        )
      )}
    </Modal>
  );
}

export default Popup;
