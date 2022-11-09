import React, { useState } from "react";
import {
  Configure,
  Hits,
  HitsPerPage,
  InstantSearch,
  Pagination,
  SortBy,
  CurrentRefinements,
} from "react-instantsearch-hooks-web";
import { useParams } from "react-router-dom";
import useMediaQuery from "../helper/hook/useMediaQuery";
import { customTablet } from "../helper/constant/screenSizes";
import { searchClient } from "../helper/service/searchClient";
import PlpHit from "../component/algolia/custom/PlpHit";
import DynamicFacets from "../component/algolia/custom/DynamicFacets";
import NoResultHandler from "../component/algolia/custom/NoResultHandler";
import "../component/algolia/custom/Plp.css";
import Breadcrumb from "../../src/component/common/Breadcrumb";
import { classNames } from "../helper/utils/classNames";

const PlpList = (category) => {
  const { cid } = useParams();
  const [isLargerThanTablet] = useMediaQuery(customTablet);
  const [isHidden, setIsHidden] = useState(true);
  const categoryQuery = cid ? `list_categories:${cid}` : "";
  const { list_categories: breadCrumbItems } = category;

  return (
    <>
      <InstantSearch searchClient={searchClient} indexName="e_com_demo">
        <Configure ruleContexts={["base_facets"]} filters={categoryQuery} />
        <div className="primary_container">
          <div className="grid grid-cols-[1fr_1fr] mb:grid-cols-[1fr_auto_auto] my-2 gap-x-2 items-center">
            <Breadcrumb items={breadCrumbItems} title={cid} />

            <HitsPerPage
              items={[
                { label: "12 Hits", value: 12, default: true },
                { label: "24 Hits", value: 24 },
                { label: "36 Hits", value: 36 },
              ]}
            />
            {!isLargerThanTablet && (
              <div
                onClick={() => setIsHidden((prevValue) => !prevValue)}
                className={classNames(!isHidden && "underline")}
              >
                Filters
              </div>
            )}
            <SortBy
              items={[
                { label: "Relaveance", value: "e_com_demo" },
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
          {/* <div className="mt-2">
            <CurrentRefinements />
          </div> */}
          <div className="search_container">
            <div
              className={classNames(
                isLargerThanTablet ? "" : isHidden && "hidden",
                "container_left"
              )}
            >
              <DynamicFacets />
            </div>

            <NoResultHandler>
              <div className="container_right">
                <Hits hitComponent={PlpHit} />
                {/* <Pagination className="pagination_wrapper" /> */}
              </div>
            </NoResultHandler>
          </div>
        </div>
      </InstantSearch>
    </>
  );
};

export default PlpList;
