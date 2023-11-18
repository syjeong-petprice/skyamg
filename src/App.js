import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./pages/main/main";
import Doctor from "./pages/doctor/doctor";
import Subject from "./pages/subject/subject";
import { Helmet } from "react-helmet-async";
import Notice from "./pages/notice/notice";
import NoticeDetails from "./pages/notice/notice-details";
import Header from "./components/Header";

const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottledValue(value);
    }, limit);

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};



function App() {
  const { pathname } = useLocation();

  //스크롤시 헤더 배경색 변경을 위해. 
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 20);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolledDown = throttledScrollY > window.innerHeight * 0.02;




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
      <Header isScrolledDown={isScrolledDown} />

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
        <Route
          path="/skyamg/notice/:id"
          element={<NoticeDetails name={"notice"} />}
        />
        <Route path="/skyamg/notice" element={<Notice name={"notice"} />} />
      </Routes>
    </>
  );
}

export default App;
