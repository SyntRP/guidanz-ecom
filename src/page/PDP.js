import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../component/pdp";
import { index } from "../helper/service/searchClient";

const PDP = () => {
  const { sku } = useParams();
  const [currentSKU] = useState(sku);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    index.getObject(sku).then((object) => {
      setProduct(object);
    });
    setLoading(false);
  }, [sku]);
  console.log(currentSKU);

  if (loading) {
    return "Loading";
  }
  return (
    <div className="secondary_container">
      {product ? <ProductDetail product={product} /> : "No product"}
    </div>
  );
};

export default PDP;
