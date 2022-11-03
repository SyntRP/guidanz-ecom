import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import MainContainer from "./mainContainer";

const ProductDetail = ({ product }) => {
  const {
    list_categories: breadCrumbItems,
    name,
    brand,
    image_urls: images,
    reviews,
    price,
    color,
    variants,
  } = product;
  return (
    <div>
      <Breadcrumb items={breadCrumbItems} title={name} />
      <MainContainer
        images={images}
        name={name}
        brand={brand}
        rating={reviews?.rating}
        ratingCount={reviews?.count}
        price={price}
        color={color}
        variants={variants}
      />
    </div>
  );
};

export default ProductDetail;
