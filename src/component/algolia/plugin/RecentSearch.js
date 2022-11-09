import {
  createLocalStorageRecentSearchesPlugin,
  search,
} from "@algolia/autocomplete-plugin-recent-searches";
import { RECENT_SEARCH_PLUGIN_KEY } from "../../../helper/constant/algoliaConstants";

export const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: RECENT_SEARCH_PLUGIN_KEY,
  transformSource({ source, onRemove }) {
    return {
      ...source,
      templates: {
        ...source.templates,
        item(params) {
          const { item } = params;

          return (
            <a className="aa-ItemLink" href={`/pis?query=${item.label}`}>
              {source.templates.item(params).props.children}
            </a>
          );
        },
      },
    };
  },
  search(params) {
    return search({ ...params, limit: params.query ? 2 : 4 });
  },
});
