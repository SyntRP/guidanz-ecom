import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { ALGOLIA_PRODUCTS_QUERY_SUGGESTIONS_INDEX_NAME } from "../../../helper/constant/algoliaConstants";
import { SearchIcon } from "../../../asset/icons";
import { searchClient } from "../../../helper/service/searchClient";

export const querySuggestionsPlugin = createQuerySuggestionsPlugin({
  searchClient,
  indexName: ALGOLIA_PRODUCTS_QUERY_SUGGESTIONS_INDEX_NAME,
  getSearchParams({ state }) {
    return {
      hitsPerPage: !state.query ? 5 : 3,
    };
  },
  transformSource({ source }) {
    return {
      ...source,
      templates: {
        ...source.templates,
        header({ state, Fragment }) {
          return (
            <Fragment>
              <div className="aa-SourceHeaderTitle">Popular Searches</div>
              <div className="aa-SourceHeaderLine" />
            </Fragment>
          );
        },
        item({ item }) {
          return (
            <div className="aa-ItemWrapper--synt">
              <div className="aa-ItemIcon aa-ItemIcon--noBorder">
                <SearchIcon />
              </div>
              <a className="aa-ItemContent" href={`/pis?query=${item?.query}`}>
                <div className="aa-ItemContentBody">
                  <div className="aa-ItemContentTitle">{item?.query}</div>
                </div>
              </a>
            </div>
          );
        },
      },
    };
  },
});
