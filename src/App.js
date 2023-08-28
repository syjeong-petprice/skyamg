import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import Noti from "./pages/notice/notice";
import Doctor from "./pages/doctor/doctor";

function App() {
  return (
    <Routes>
      <Route path="/skyamg" element={<Main name={"Main"} />} />
      <Route path="/skyamg/notice" element={<Noti name={"Notice"} />} />
      <Route
        path="/skyamg/skymedicaldoctor"
        element={<Doctor name={"Doctor"} />}
      />
    </Routes>
  );
}

export default App;
