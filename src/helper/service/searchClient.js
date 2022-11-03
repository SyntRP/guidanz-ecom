import algoliasearch from "algoliasearch";
import { ALGOLIA_PRODUCTS_INDEX_NAME } from "../constant/algoliaConstants";

export const searchClient = algoliasearch(
  "M56FGKTRSU",
  "af5347376c60f6fc570b520cf59e001d"
);

export const index = searchClient.initIndex(ALGOLIA_PRODUCTS_INDEX_NAME);
