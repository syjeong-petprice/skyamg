import Slider2 from "./components/Slider2";
import Introduce from "./components/Introduce";
import Member from "./components/Member";
import Location from "./components/Location";
import Preview from "./components/Preview";
import Links from "../../components/Links";
import { Helmet } from "react-helmet-async";

function Main() {
  return (
    <>
      <Helmet>
        <title>안녕</title>
      </Helmet>
      <Slider2 />
      <Introduce />
      <Member />
      <Location />
      <Preview />
      <Links />
    </>
  );
}

export default Main;
