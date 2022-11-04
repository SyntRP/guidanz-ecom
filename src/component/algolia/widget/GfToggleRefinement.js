import React, { useEffect, useState } from "react";
import {
  ToggleRefinement,
  useToggleRefinement,
} from "react-instantsearch-hooks-web";

const GfToggleRefinement = (props) => {
    const {
        value: { count },
      } = useToggleRefinement(props);
      const { facetData, attribute } = props;
      const { label } = facetData;
      const [show, setShow] = useState(true);
      useEffect(() => {
        if (count) {
          setShow(true);
        } else {
          setShow(false);
        }
      }, [count]);

      return (
        <>
          {show ? (
            <ToggleRefinement attribute={attribute} label={label || attribute} style={{textTransform:"uppercase"}}/>
          ) : null}
        </>
      );
}

export default GfToggleRefinement