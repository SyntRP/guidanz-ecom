import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../helper/utils/captalizeFirstLetter";
import { classNames } from "../../helper/utils/classNames";
import { getColor } from "../../helper/utils/getColour";
import StarRating from "./starRating";

const MainContainer = ({
  images,
  name,
  brand,
  rating = 4,
  ratingCount = 101,
  price,
  color,
  variants,
}) => {
  const { sku } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSElectedImage] = useState(images[0]);
  const bgColor = getColor(color?.filter_group);
  const handleVariantChange = (productSku) => {
    navigate(`/p/${productSku}`);
  };
  return (
    <div className="grid mb:grid-cols-2 gap-x-2 gap-y-5 mb:gap-x-4">
      <div className="justify-self-center mb:justify-self-start order-first drop-shadow-pdp rounded-md">
        <img
          src={selectedImage}
          className="rounded-md w-full mb:max-w-xs lg:max-w-sm xl:max-w-[400px] aspect-[6/7] 2xl:max-w-full"
          alt=" "
        />
      </div>
      <div className="py-1 pr-4 mb:pr-6 order-last mb:order-2">
        <div className="font-[gilroy-bold] text-xl mb:text-2xl 2xl:text-[32px]">
          {name}
        </div>
        {brand && <div className="my-1 italic"> {brand}</div>}
        <StarRating rating={rating} ratingCount={ratingCount} />
        <div className="font-[gilroy-bold] text-primaryDark-500 lg:text-lg my-2">
          {price?.currency + " " + price?.value.toFixed(2)}
        </div>
        <div className="my-1">
          <p className="font-semibold">
            {capitalizeFirstLetter(color?.original_name)}
          </p>
          <div
            style={{ backgroundColor: bgColor }}
            className="h-6 w-6 rounded-full border-black border-[1px]"
          ></div>
        </div>
        <div className="my-2">
          <p className="font-semibold py-1">Select Size</p>
          <div className="flex flex-wrap gap-3 my-1">
            {variants?.map((variant, v) => (
              <div
                key={v}
                // style={{
                //   backgroundColor: sku === variant?.sku && bgColor,
                //   color: sku === variant?.sku && "white",
                // }}
                className={classNames(
                  sku === variant?.sku
                    ? "primary_bg_gradient text-white"
                    : "bg-white text-black",
                  "rounded-sm border-black  border-[1px] p-1 min-w-[30px] text-center cursor-pointer"
                )}
                // onClick={() => handleVariantChange(variant?.sku)}
              >
                {variant?.abbreviated_size}
              </div>
            ))}
          </div>
        </div>
        <div className="my-6">
          <button className="primary_bg_gradient p-4 w-[350px] text-white font-bold">
            {`ADD TO CART - ${price?.currency + " " + price?.value.toFixed(2)}`}
          </button>
        </div>
        <div className="my-6 text-[#0A1D48] font-bold">
          <p>Free shipping on orders over $75. Free returns.</p>
        </div>
      </div>
      <div className="order-2 mb:order-last">
        <div className="flex gap-2 mb:gap-3 flex-wrap">
          {images?.map((img, i) => (
            <img
              src={img}
              alt=""
              className="w-[60px] mb:w-[70px] xl:w-[85px] 2xl:w-[100px] aspect-square cursor-pointer drop-shadow-pdp rounded-md"
              key={i}
              onClick={() => setSElectedImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
