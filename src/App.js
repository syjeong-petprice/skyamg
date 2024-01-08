import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./pages/main/main";
import Doctor from "./pages/doctor/doctor";
import Subject from "./pages/subject/subject";
import { Helmet } from "react-helmet-async";
import Notice from "./pages/notice/notice";
import Review from "./pages/main/components/Review";
import NoticeDetails from "./pages/notice/notice-details";
import Header from "./components/Header";
import Links from "./components/Links";
import axios from "axios";

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
  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname.startsWith("192.168.0.");
  const baseURL = isLocal
    ? "http://api.dev.vetell.kr/export/v1"
    : "https://api.vetell.kr/export/v1";
  axios.defaults.baseURL = baseURL;
  // axios.defaults.baseURL = "http://api.dev.vetell.kr/export/v1";
  // axios.defaults.baseURL = "http://api.dev.vetell.kr/export/v1";
  const { pathname } = useLocation();

  //스크롤시 헤더 배경색 변경을 위해.
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 20);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolledDown = throttledScrollY > window.innerHeight * 0.02;

  // 라우트 이동시 스크롤 최상단으로 이동
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // 라우트 변경 후 스크롤 최상단으로 이동
  useEffect(() => {
    if (window.location.hash.substring(1) !== "member") {
      scrollToTop();
      console.log("test");
    }
  }, [pathname]);

  return (
    <>
      <Header isScrolledDown={isScrolledDown} />
      {/* <Links /> */}

      <Helmet>
        <title>인천 SKY 동물의료센터</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Main name={"Main"} />} />

        <Route path="/skyamg" element={<Main name={"Main"} />} />
        <Route path="/subject/:id" element={<Subject name={"Subject"} />} />
        <Route path="/vetMember/:id" element={<Doctor name={"vetMember"} />} />
        <Route path="/notice/:id" element={<NoticeDetails name={"notice"} />} />
        <Route path="/notice" element={<Notice name={"notice"} />} />
        <Route path="/review" element={<Review name={"review"} />} />
      </Routes>
    </>
  );
}

export default App;
