import { getAlgoliaFacets } from "@algolia/autocomplete-js";
import { ALGOLIA_PRODUCTS_INDEX_NAME } from "../../../helper/constant/algoliaConstants";
import { searchClient } from "../../../helper/service/searchClient";

const baseUrl = "https://res.cloudinary.com/hilnmyskv/image/upload/v1646067858";
const images = {
  Women: `${baseUrl}/women_category_vwzkln.jpg`,
  Bags: `${baseUrl}/bags_category_qd7ssj.jpg`,
  Clothing: `${baseUrl}/clothing_category_xhiz1s.jpg`,
  Men: `${baseUrl}/men_category_wfcley.jpg`,
  "T-shirts": `${baseUrl}/t-shirts_category_gzqcvd.jpg`,
  Shoes: `${baseUrl}/shoes_category_u4fi0q.jpg`,
};

export const popularCategoriesPlugin = {
  getSources() {
    return [
      {
        sourceId: "popularCategoriesPlugin",
        getItems() {
          return getAlgoliaFacets({
            searchClient,
            queries: [
              {
                indexName: ALGOLIA_PRODUCTS_INDEX_NAME,
                facet: "list_categories",
                params: {
                  facetQuery: "",
                  maxFacetHits: 6,
                },
              },
            ],
          });
        },
        getItemInputValue({ item }) {
          return item.label;
        },
        onSelect({ setIsOpen }) {
          setIsOpen(true);
        },
        templates: {
          header({ Fragment }) {
            return (
              <Fragment>
                <span className="aa-SourceHeaderTitle">Popular categories</span>
                <div className="aa-SourceHeaderLine" />
              </Fragment>
            );
          },
          item({ item, components }) {
            return <CategoryItem hit={item} components={components} />;
          },
        },
      },
    ];
  },
};

function CategoryItem({ hit }) {
  return (
    <a className="aa-ItemWrapper aa-PopularCategoryItem" href={`/productlist/${hit.label}`}>
      <div className="aa-ItemContent">
        <div className="aa-ItemPicture">
          <img src={images[hit.label]} alt={hit.label} />
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            {hit.label} <span>({hit.count})</span>
          </div>
        </div>
      </div>
    </a>
  );
}
