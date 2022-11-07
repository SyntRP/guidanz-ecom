import React, { useState, useEffect } from "react";
import { index } from "../../../helper/service/searchClient";
export const WomenFacets = () => {
  const [womensCollections, setWomenCollections] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      index
        .search("", {
          facets: ["women"],
          hitsPerPage: 6,
        })
        .then((results) => {
          setWomenCollections(results?.hits || []);
        });
      setLoading(false);
    }
  });
  return (
    <div className="secondary_container">
      <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-900 h-[50px]">
        Shop The Collections
        {console.log(womensCollections, "womensCollections")}
      </p>
      <div className="h-[400px]"></div>
    </div>
  );
};