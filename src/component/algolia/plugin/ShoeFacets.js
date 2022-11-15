import React, { useState, useEffect } from "react";
import { index } from "../../../helper/service/searchClient";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; // eslint-disable-line import/no-unresolved
import "swiper/css"; // eslint-disable-line import/no-unresolved
import "swiper/css/navigation"; // eslint-disable-line import/no-unresolved
import "../custom/Plp.css";

export const ShoeFacets = () => {
  const [shoeCollections, setshoeCollections] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      index
        .search("", {
         facetFilters: ["hierarchical_categories.lvl1: Men > Shoes"],
          hitsPerPage: 4,
        })
        .then((results) => {
          setshoeCollections(results?.hits || []);
        });
      setLoading(false);
    }
  }, []);
  return (
    <div className="">
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={1}
          // navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {shoeCollections?.map((sc, i) => (
            <SwiperSlide key={i}>
              <a href={`/p/${sc?.objectID}`}>
                <div>
                  <div className="md:aspect-[7/10]">
                    <img src={sc?.image_urls[0]} style={{ width: "100%" }} />
                  </div>
                  <div className="hits_name">{sc?.name}</div>
                  <p className="hits_price">
                    {sc?.price?.currency + " " + sc?.price?.value.toFixed(2)}
                  </p>
                  {/* {filteredColor && (
        <div className="hit_color" style={{ backgroundColor: filteredColor }} />
      )} */}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
