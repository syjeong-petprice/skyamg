import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Modal, Tabs, Checkbox, Image } from "antd";
import dayjs from "dayjs";
import popup1 from "../../../images/popup/인천스카이새해인사_팝업.jpg";
import popup2 from "../../../images/resource/youtube/01.png";

const popup_info = [
  {
    id: 1,
    title: "첫번째",
    content: "",
    img: popup1,
  },
  // 예시 확인 후 아래 요소는 주석처리 해주세요.
  {
    id: 2,
    title: "두번째",
    content: "두번째 팝업은 내용이 있어요.",
    img: popup2,
  },
];

function Popup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const STORAGE_KEY = "ignoreForAWeek";
  const [ignoredForAWeek, setIgnoredForAWeek] = useState(false);
  const [activeTab, setActiveTab] = useState("1"); // 현재 선택된 탭의 키

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
      footer={[
        <Checkbox checked={ignoredForAWeek} onChange={handleIgnoreForAWeek}>
          일주일간 보지 않기
        </Checkbox>,
      ]}
      style={{ top: 20 }}
      heigth={"100%"}
    >
      {popup_info.length === 1 ? (
        <div>
          <p>{popup_info[0].content}</p>
          <Image preview={false} src={popup_info[0].img} width={"100%"} />
        </div>
      ) : (
        <Tabs
          defaultActiveKey="1"
          activeKey={activeTab}
          onChange={handleTabChange}
        >
          {popup_info.map((popup) => (
            <Tabs.TabPane tab={popup.title} key={popup.id}>
              <Image preview={false} src={popup.img} width={"100%"} />
              <p>{popup.content}</p>
            </Tabs.TabPane>
          ))}
        </Tabs>
      )}
    </Modal>
  );
}

export default Popup;
