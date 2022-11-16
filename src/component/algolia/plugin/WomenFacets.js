import React, { useState, useEffect } from "react";
import { index } from "../../../helper/service/searchClient";
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'; // eslint-disable-line import/no-unresolved
import 'swiper/css'; // eslint-disable-line import/no-unresolved
import 'swiper/css/navigation'; // eslint-disable-line import/no-unresolved
import "../custom/Plp.css"

export const WomenFacets = () => {
  const [womensCollections, setWomenCollections] = useState(null);
  const [loading, setLoading] = useState(true);

  const startIndexofColor = womensCollections?.color?.filter_group?.indexOf("#");
  const filteredColor = womensCollections?.color?.filter_group?.slice(startIndexofColor);
  // console.log("filteredColor:",filteredColor);
  // console.log("startIndexofColor:",startIndexofColor);

  useEffect(() => {
    if (loading) {
      index
        .search("", {
          facetFilters: ["hierarchical_categories.lvl2: Women > Clothing > T-shirts"],
          hitsPerPage: 6,
        })
        .then((results) => {
          setWomenCollections(results?.hits || []);
        });
      setLoading(false);
    }
  } ,[]);
  return (
    <div className="secondary_container">
      <p className="collection-wrapper">
        Shop The Collections
        {/* {console.log(womensCollections, "womensCollections")} */}
      </p>
      <div className="mt-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        border={1}
        // navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          480: { slidesPerView: 2, spaceBetween: 30 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {womensCollections?.map((wm,i) => (
        <SwiperSlide key={i} >
          <a href={`/p/${wm?.objectID}`}>
            <div>
      <div>
        <img src={wm?.image_urls[0]} className="md:aspect-[8/10]" style={{ width: "100%" }} />
      </div>
      <div className="hits_name">
          {wm?.name}
      </div>
      <p className="hits_price">
        {wm?.price?.currency + " " + wm?.price?.value.toFixed(2)}
      </p>
      {filteredColor && (
        <div className="hit_color" style={{ backgroundColor: filteredColor }} />
      )}
      </div>  
    </a>
        </SwiperSlide>
        ))}
      </Swiper>
</div>
    </div>
  );
};