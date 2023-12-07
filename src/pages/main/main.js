import Slider2 from "./components/Slider2";
import Introduce from "./components/Introduce";
import Member from "./components/Member";
import Location from "./components/Location";
import Preview from "./components/Preview";
import Links from "../../components/Links";
import { Helmet } from "react-helmet-async";
import Subject from "./components/Subject";
import Equip2 from "./components/Equip2";
import Equip from "./components/Equip";
import Example from "./components/Example";
import Subject2 from "./components/Subject2";
import Youtube from "./components/Youtube";
import Notice from "./components/Notice";
import Notice2 from "./components/Notice2";
import Slider from "./components/Slider";
import SubjectAll from "./components/SubjectAll";
import Review from "./components/Review";

function Main() {
  return (
    <>
      <Helmet>
        <title>인천스카이동물메디컬센터</title>
      </Helmet>
      <Slider2 />
      <Introduce />
      <Youtube />
      <Review />
      <Member />

      <Subject />
      <Equip2 />
      <Equip />
      <Subject2 />
      <Location />
      <Preview />

      <Notice2 />
    </>
  );
}

export default Main;
