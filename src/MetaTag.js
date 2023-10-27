import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTag = (props) => {
  // props로 content 내용을 불러올 예정임
  return (
    <Helmet>
      <title>{`인천 SKY 동물의료센터 - ${props.title}`}</title>

      <meta
        name="description"
        content={props.description}
        data-react-helmet="true"
      />
      <meta
        name="keywords"
        content={`${props.keywords}, 인천 동물병원, 인천 sky, 24시 동물병원, 인천 24시 동물병원`}
        data-react-helmet="true"
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={props.title}
        data-react-helmet="true"
      />
      <meta
        property="og:site_name"
        content={props.title}
        data-react-helmet="true"
      />
      <meta
        property="og:description"
        content={props.description}
        data-react-helmet="true"
      />
      <meta
        property="og:image"
        content={props.imgsrc}
        data-react-helmet="true"
      />
      <meta property="og:url" content={props.url} data-react-helmet="true" />

      <meta
        name="twitter:title"
        content={props.title}
        data-react-helmet="true"
      />
      <meta
        name="twitter:description"
        content={props.description}
        data-react-helmet="true"
      />
      <meta
        name="twitter:image"
        content={props.imgsrc}
        data-react-helmet="true"
      />

      <link rel="canonical" href={props.url} data-react-helmet="true" />
    </Helmet>
  );
};

export default MetaTag;
