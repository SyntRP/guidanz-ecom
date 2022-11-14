import React from "react";
import { Highlight } from "react-instantsearch-hooks-web";

const PlpHit = ({ hit }) => {
  const frontImage = hit?.image_urls[0];
  const backImage = hit?.image_urls[1] || hit?.image_urls[0];
  const startIndexofColor = hit?.color?.filter_group?.indexOf("#");
  const filteredColor = hit?.color?.filter_group?.slice(startIndexofColor);

  return (
    <a
      className="hover:transition-shadow  hover:shadow-2xl shadow-[#FE692A]"
      href={`/p/${hit?.objectID}`}
    >
      <div>
        <div>
          <img
            src={hit?.image_urls[0]}
            style={{ width: "100%" }}
            className="md:aspect-[10/11]"
            alt="plp"
          />
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
          <div
            className="hit_color"
            style={{ backgroundColor: filteredColor }}
          />
        )}
      </div>
    </a>
  );
};

export default PlpHit;
