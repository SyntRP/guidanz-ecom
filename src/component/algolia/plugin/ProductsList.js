import React from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { ALGOLIA_PRODUCTS_INDEX_NAME } from "../../../helper/constant/algoliaConstants";
import { searchClient } from "../../../helper/service/searchClient";

export const productListPlugin = {
  getSources({ query }) {
    if (!query) {
      return [];
    }
    return [
      {
        sourceId: "productHitPlugin",
        getItems({ setContext }) {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: ALGOLIA_PRODUCTS_INDEX_NAME,
                query,
                params: {
                  hitsPerPage: 3,
                },
              },
            ],
            transformResponse({ hits, results }) {
              setContext({
                nbProducts: results[0]?.nbHits,
              });
              return hits;
            },
          });
        },
        templates: {
          header({ state, Fragment }) {
            return (
              <Fragment>
                <div className="aa-SourceHeaderTitle">
                  Products for {state.query} - {state.context.nbProducts}
                </div>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            );
          },
          item({ item, components }) {
            return <Hit hit={item} components={components} />;
          },
          footer({ state }) {
            console.log(state);
            return (
              state.context.nbProducts > 3 && (
                <div style={{ textAlign: "center", margin: "20px" }}>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="aa-SeeAllBtn"
                  >
                    See All Products ({state.context.nbProducts})
                  </a>
                </div>
              )
            );
          },
        },
      },
    ];
  },
};

const Hit = ({ hit }) => {
  return (
    <div className="aa_hit_wrapper">
      {/* <img src={hit?.image_urls[0]} className="aa_hit_image" />
      <p className="aa_hit_name">{hit?.name}</p>
      <p className="aa_hit_price">
        {hit?.price?.currency + " " + hit?.price?.value.toFixed(2)}
      </p> */}
      <div className="aa-ItemContent">
        <div className="aa-ItemPicture">
          <img src={hit?.image_urls[0]} alt={hit?.name} />
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">{hit?.name}</div>
          <div className="aa-ItemContentTitle aa-ItemContentPrice">
            {hit?.price?.currency + " " + hit?.price?.value.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
