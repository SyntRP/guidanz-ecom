import { getAlgoliaResults } from "@algolia/autocomplete-js";
import React from "react";
import { ALGOLIA_PRODUCTS_INDEX_NAME } from "../../../helper/constant/algoliaConstants";
import { searchClient } from "../../../helper/service/searchClient";
import { FavoriteIcon } from "../../../asset/icons";

export const specialProductPlugin = {
  getSources() {
    return [
      {
        sourceId: "specialProductsPlugin",
        getItems() {
          return getAlgoliaResults({
            searchClient,
            queries: [
              {
                indexName: ALGOLIA_PRODUCTS_INDEX_NAME,
                query: "",
                params: {
                  ruleContexts: "special_product",
                },
              },
            ],
          });
        },
        templates: {
          header({ state, Fragment }) {
            return (
              <Fragment>
                <div className="aa-SourceHeaderTitle">Trending Products</div>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            );
          },
          item({ item, components }) {
            return <ProductItem hit={item} components={components} />;
          },
        },
      },
    ];
  },
};

function ProductItem({ hit, components }) {
  return (
    <div className="aa-ItemWrapper">
      <a className="aa-ItemContent" href={`/p/${hit?.objectID}`}>
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <FavoriteIcon />
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.ReverseHighlight hit={hit} attribute="name" />
          </div>
        </div>
      </a>
    </div>
  );
}
