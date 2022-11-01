import {
  createLocalStorageRecentSearchesPlugin,
  search,
} from "@algolia/autocomplete-plugin-recent-searches";
import { RECENT_SEARCH_PLUGIN_KEY } from "../../../helper/constant/algoliaConstants";

export const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
  key: RECENT_SEARCH_PLUGIN_KEY,
  search(params) {
    return search({ ...params, limit: params.query ? 2 : 4 });
  },
});
