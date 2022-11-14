import React, { useState, useEffect } from "react";
import { BuilderComponent, builder } from "@builder.io/react";
import "@builder.io/widgets";
import "./homepage.css";
import { WomenFacets } from "../component/algolia/plugin/WomenFacets";

builder.init("f8e38a6bf3f644369c3b57eb83a9764b");

const Homepage = () => {
  const [content, setContent] = useState(null);

  const [builderContentJson, setBuilderContentJson] = useState(null);
  const [builderContentJson1, setBuilderContentJson1] = useState(null);
  const [builderContentJson2, setBuilderContentJson2] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
    }
    fetchContent();
  }, [window.location.pathname]);

  useEffect(() => {
    builder
      .get("banner-2", { url: window.location.pathname })
      .promise()
      .then(setBuilderContentJson);
  }, []);

  useEffect(() => {
    builder
      .get("banner-3", { url: window.location.pathname })
      .promise()
      .then(setBuilderContentJson1);
  }, []);
  useEffect(() => {
    builder
      .get("banner-1", { url: window.location.pathname })
      .promise()
      .then(setBuilderContentJson2);
  }, []);

  return (
    <div>
      <BuilderComponent model="page" content={content} />
      <div className="secondary_container  ">
        <BuilderComponent model="banner-1" content={builderContentJson2} />
      </div>
      <BuilderComponent model="banner-2" content={builderContentJson} />
      {/* <div>
        <WomenFacets />
      </div> */}
      <div className="bg-[#0A1D48] ">
        {" "}
        <div className="secondary_container h-80 ">
          <BuilderComponent model="banner-3" content={builderContentJson1} />
        </div>
      </div>
      <div className="secondary_container  ">
        {/* <BuilderComponent model="banner-2" content={builderContentJson} /> */}
      </div>
    </div>
  );
};

export default Homepage;
