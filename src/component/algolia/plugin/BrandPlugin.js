import { getAlgoliaFacets } from "@algolia/autocomplete-js";
import { searchClient } from "../../../helper/service/searchClient";
import { ALGOLIA_PRODUCTS_INDEX_NAME } from "../../../helper/constant/algoliaConstants";
import { TagIcon } from "../../../asset/icons";

export const brandsPlugin = {
  getSources({ query }) {
    if (!query) {
      return [];
    }

    return [
      {
        sourceId: "brandsPlugin",
        getItems() {
          return getAlgoliaFacets({
            searchClient,
            queries: [
              {
                indexName: ALGOLIA_PRODUCTS_INDEX_NAME,
                facet: "brand",
                params: {
                  facetQuery: query,
                  maxFacetHits: 3,
                },
              },
            ],
          });
        },
        getItemInputValue({ item }) {
          return item.label;
        },
        templates: {
          item({ item, components }) {
            return <BrandItem hit={item} components={components} />;
          },
        },
      },
    ];
  },
};

function BrandItem({ hit, components }) {
  return (
    <div className="aa-ItemWrapper">
      <a className="aa-ItemContent" href={`/pis?brand=${hit?.label}`}>
        <div className="aa-ItemIcon aa-ItemIcon--noBorder">
          <TagIcon />
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.ReverseHighlight hit={hit} attribute="label" />
          </div>
        </div>
      </a>
    </div>
  );
}
