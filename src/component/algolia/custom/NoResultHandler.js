import React from 'react'
import { useHits } from "react-instantsearch-hooks-web";

const NoResultHandler = ({ children, ...props }) => {
    const { hits } = useHits(props);
    if (hits?.length < 1) {
      return <div>No Results were found</div>;
    }
    return children;
}

export default NoResultHandler