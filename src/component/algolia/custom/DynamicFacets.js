import React from "react";
import {
  useQueryRules,
  useDynamicWidgets,
} from "react-instantsearch-hooks-web";
import { GfPriceSlider } from "../widget/GfPriceSlider";
import GfRefinementList from "../widget/GfRefinementList";
import GfToggleRefinement from "../widget/GfToggleRefinement";

const DYNAMICFACET = {
  RefinementList: GfRefinementList,
  ToggleRefinement: GfToggleRefinement,
  PriceSlider: GfPriceSlider,
  default: GfRefinementList,
};

const DynamicFacets = (props) => {
  const { items } = useQueryRules(props);
  const { attributesToRender } = useDynamicWidgets(props);
  if (!items) return null;
  let facetsArray = [];
  items
    .filter(({ to }) => to === "dynamicFacets")
    .map((item) => item?.facets?.map((facet) => facetsArray.push(facet)));
  const arrayUniqueByFacetAttribute = [
    ...new Map(facetsArray.map((item) => [item["name"], item])).values(),
  ]
    .sort((a, b) => {
      const index1 = attributesToRender.indexOf(a?.name);
      const index2 = attributesToRender.indexOf(b?.name);
      return (
        (index1 > -1 ? index1 : Infinity) - (index2 > -1 ? index2 : Infinity)
      );
    })
    .map((df) => ({
      ...df,
      FacetWidget: DYNAMICFACET[df?.widget] || DYNAMICFACET["default"],
    }));

  if (arrayUniqueByFacetAttribute?.length > 0) {
    return arrayUniqueByFacetAttribute.map((facet, f) => (
      <facet.FacetWidget facetData={facet} key={f} attribute={facet?.name} />
    ));
  }
  return null;
};

export default DynamicFacets;
