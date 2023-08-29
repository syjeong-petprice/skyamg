import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Main from "./pages/main/main";
import Noti from "./pages/notice/notice";
import Doctor from "./pages/doctor/doctor";
import Subject from "./pages/subject/subject";

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
    <Routes>
      <Route path="/skyamg" element={<Main name={"Main"} />} />
      <Route path="/skyamg/notice" element={<Noti name={"Notice"} />} />
      <Route
        path="/skyamg/subject/:id"
        element={<Subject name={"Subject"} />}
      />
      <Route
        path="/skyamg/skymedicaldoctor"
        element={<Doctor name={"Doctor"} />}
      />
    </Routes>
  );
}

export default App;
