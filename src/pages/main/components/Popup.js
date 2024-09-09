import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Tabs, Checkbox, Image } from "antd";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { CloseOutlined } from "@ant-design/icons"; // Close icon import

export async function getPopup() {
  const response = await axios.get("/homepageBanner?vetIdx=6"); // vetIdx 수정
  return response.data;
}

function Popup() {
  const [popupList, setPopupList] = useState([]);
  const [visiblePopups, setVisiblePopups] = useState([]);

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
    const baseTop = 50; // 기본 위치 (px)
    const baseLeft = 50; // 기본 위치 (px)
    const offset = index * 400; // 각 팝업마다 400px씩 차이나게
    return {
      top: `${baseTop}px`,
      left: `${baseLeft + offset}px`,
      position: "absolute",
      zIndex: 1000 + index,
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
                width: "600px",
                height: "auto",
                backgroundColor: "white",
                border: "1px solid #ccc",
                position: "fixed",
                ...getPopupStyle(index),
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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
                <p style={{ padding: "0 10px" }}>{popup.content}</p>
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
  // return (
  //   <Modal
  //     //   title={popup_info[0].title}
  //     open={isModalOpen && !ignoredForAWeek}
  //     onCancel={handleClose}
  //     maskClosable={false}
  //     footer={[
  //       popupList.length === 1 && popupList[0].link && (
  //         <Button
  //           color="primary"
  //           sx={{
  //             fontWeight: 700,
  //             fontSize: "18px",
  //             color: "#000",
  //             bgcolor: "#fff",
  //             width: "100%",
  //             mb: 1,
  //             border: "1px solid #ccc",
  //           }}
  //           key="singlePopupButton"
  //         >
  //           <Link to={popupList[0].link} target="_blank">
  //             {popupList[0].linkBtn}
  //           </Link>
  //         </Button>
  //       ),
  //       popupList.length > 1 &&
  //         popupList.find((popup) => popup.idx === Number(activeTab)).link && (
  //           <Button
  //             color="primary"
  //             sx={{
  //               fontWeight: 700,
  //               fontSize: "18px",
  //               color: "#000",
  //               bgcolor: "#fff",
  //               width: "100%",
  //               mb: 1,
  //               border: "1px solid #ccc",
  //             }}
  //             key={`activePopupButton`}
  //             onClick={() =>
  //               console.log(
  //                 popupList.find((popup) => popup.idx === Number(activeTab))
  //               )
  //             }
  //           >
  //             <Link
  //               to={
  //                 popupList.find((popup) => popup.idx === Number(activeTab))
  //                   .link
  //               }
  //               target="_blank"
  //             >
  //               {
  //                 popupList.find((popup) => popup.idx === Number(activeTab))
  //                   .linkBtn
  //               }
  //             </Link>
  //           </Button>
  //         ),
  //       <Checkbox checked={ignoredForAWeek} onChange={handleIgnoreForAWeek}>
  //         일주일간 보지 않기
  //       </Checkbox>,
  //     ]}
  //     style={{
  //       top: (popupList[0]?.content || popupList[0]?.link) && 20,
  //       display: "flex",
  //       flexDirection: "column",
  //     }}
  //   >
  //     {popupList.length === 1 ? (
  //       <div
  //         style={{ marginTop: "30px", overflowY: "auto", maxHeight: "70vh" }}
  //       >
  //         <Image src={popupList[0].imageUrl} width={"100%"} />
  //         {popupList[0].content && <p>{popupList[0].content}</p>}
  //       </div>
  //     ) : (
  //       activeTab && (
  //         <Tabs activeKey={activeTab} onChange={handleTabChange}>
  //           {popupList.map((popup) => (
  //             <Tabs.TabPane tab={popup.title} key={popup.idx}>
  //               <div style={{ overflowY: "auto", maxHeight: "70vh" }}>
  //                 <Image src={popup.imageUrl} width={"100%"} />
  //                 {popup.content && <p>{popup.content}</p>}
  //               </div>
  //             </Tabs.TabPane>
  //           ))}
  //         </Tabs>
  //       )
  //     )}
  //   </Modal>
  // );
}

export default Popup;
