import React, { useEffect, useState } from "react";
import {
  RefinementList,
  useRefinementList,
} from "react-instantsearch-hooks-web";
import { Panel } from "../custom/Panel";


const GfRefinementList = (props) =>{
    const { items } = useRefinementList(props);
    const { facetData, attribute } = props;
    const { isSearchable, label } = facetData;
    const [show, setShow] = useState(true);
    useEffect(() => {
      if (items?.length > 0) {
        setShow(true);
      } else {
        setShow(false);
      }
    }, [items]);
    return (
        <Panel title={label || attribute} show={show}>
          <RefinementList
            attribute={attribute}
            showMore={true}
            searchable={isSearchable}
            style={{color:"white"}}
          />
        </Panel>
      );
}

export default GfRefinementList;