import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/main/main";
import Doctor from "./pages/doctor/doctor";
import Subject from "./pages/subject/subject";
import { Helmet } from "react-helmet-async";
import Notice from "./pages/notice/notice";

function App() {
  const { pathname } = useLocation();

  // 라우트 이동시 스크롤 최상단으로 이동
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // 라우트 변경 후 스크롤 최상단으로 이동
  useEffect(() => {
    scrollToTop();
    console.log("test");
  }, [pathname]);

  return (
    <>
      <Helmet>
        <title>인천 SKY 동물의료센터</title>
      </Helmet>
      <Routes>
        <Route path="/skyamg" element={<Main name={"Main"} />} />
        <Route
          path="/skyamg/subject/:id"
          element={<Subject name={"Subject"} />}
        />
        <Route
          path="/skyamg/vetMember/:id"
          element={<Doctor name={"vetMember"} />}
        />
        <Route path="/skyamg/notice" element={<Notice name={"notice"} />} />
      </Routes>
    </>
  );
}

export default App;
