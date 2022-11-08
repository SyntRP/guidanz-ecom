import React from "react";
import { Highlight } from "react-instantsearch-hooks-web";

const PlpHit = ({ hit }) => {
  const frontImage = hit?.image_urls[0];
  const backImage = hit?.image_urls[1] || hit?.image_urls[0];
  const startIndexofColor = hit?.color?.filter_group?.indexOf("#");
  const filteredColor = hit?.color?.filter_group?.slice(startIndexofColor);

  return (
    <a href={`/p/${hit?.objectID}`}>
      <div className="flip-card" tabIndex="0">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={frontImage} className="hit_image" alt={hit?.name} />
          </div>
          <div className="flip-card-back">
            <img src={backImage} className="hit_image" alt={hit?.name} />
          </div>
        </div>
      </div>

      <Highlight className="hits_name" attribute="name" hit={hit}>{hit?.name}</Highlight>
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
