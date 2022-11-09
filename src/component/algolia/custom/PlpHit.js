import React from "react";
import { Highlight } from "react-instantsearch-hooks-web";

const PlpHit = ({ hit }) => {
  const frontImage = hit?.image_urls[0];
  const backImage = hit?.image_urls[1] || hit?.image_urls[0];
  const startIndexofColor = hit?.color?.filter_group?.indexOf("#");
  const filteredColor = hit?.color?.filter_group?.slice(startIndexofColor);

  return (
    <a href={`/p/${hit?.objectID}`}>
      <div className="md:aspect-[7/10]">
        <img src={hit?.image_urls[0]} style={{ width: "100%" }} />
      </div>
      <div className="hits_name">
        <Highlight attribute="name" hit={hit}>
          {hit?.name}
        </Highlight>
      </div>
      <p className="hits_price">
        {hit?.price?.currency + " " + hit?.price?.value.toFixed(2)}
      </p>
      {filteredColor && (
        <div className="hit_color" style={{ backgroundColor: filteredColor }} />
      )}
    </a>
  );
};

export default PlpHit;
