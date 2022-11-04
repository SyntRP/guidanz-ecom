import React from "react";
import {
  Configure,
  Hits,
  InstantSearch,
  SortBy,
  SearchBox,
} from "react-instantsearch-hooks-web";
import { searchClient } from "../../../helper/service/searchClient";
import PlpHit from "./PlpHit";
import DynamicFacets from "./DynamicFacets";
import NoResultHandler from "./NoResultHandler";
import "./Plp.css";

const PlpList = () => {
  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="e_com_demo">
        <Configure ruleContexts={["base_facets"]} />
        <div className="full_app_container ">
          <div className="search_container">
            <div className="container_left">
              <DynamicFacets />
            </div>
            <NoResultHandler>
              <div className="container_right">
                <div className="hitsperpage_wrapper">
                  <SearchBox />
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
