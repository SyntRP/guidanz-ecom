import React from "react";
import {
  Configure,
  Hits,
  InstantSearch,
  SortBy,
} from "react-instantsearch-hooks-web";
import { useParams } from "react-router-dom";
import { searchClient } from "../helper/service/searchClient";
import PlpHit from "../component/algolia/custom/PlpHit";
import DynamicFacets from "../component/algolia/custom/DynamicFacets";
import NoResultHandler from "../component/algolia/custom/NoResultHandler";
import "../component/algolia/custom/Plp.css";

const PlpList = (ites) => {
  const { cid } = useParams();
  const categoryQuery = cid? `list_categories:${cid}` :""
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="e_com_demo">
        <Configure ruleContexts={["base_facets"]} filters={categoryQuery}/>
        <div className="primary_container">
          <div className="hitsperpage_wrapper items-end items-center">
            <SortBy
              items={[
                { label: "Sort by", value: "e_com_demo" },
                {
                  label: "Price - Low to High",
                  value: "e_com_demo_price_low_to_high",
                },
                {
                  label: "Price - High to Low",
                  value: "e_com_demo_price_high_to_low",
                },
              ]}
            />
          </div>
          <div className="search_container">
            <div className="container_left">
              <DynamicFacets />
            </div>
            <NoResultHandler>
              <div className="container_right">
                <Hits hitComponent={PlpHit} />
              </div>
            </NoResultHandler>
          </div>
        </div>
      </InstantSearch>
    </>
  );
};

export default PlpList;
