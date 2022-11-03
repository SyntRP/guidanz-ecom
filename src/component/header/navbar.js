import React from "react";

const navbar = () => {
  return (
    <div className="my-1 grid grid-cols-[auto_1fr_auto] items-center primary_container ">
      <div className="grid grid-cols-2 pt-2">
        <div className="grid grid-cols-10 gap-7  justify-items-center text-[12px] font-semibold  ">
          <div>Mens</div>
          <div>Womens</div>
          <div>kids</div>
          <div>Bags</div>
          <div>Shoes</div>
        </div>

        <div className="flex justify-end  text-[12px] font-semibold">
          {" "}
          <div>Help?</div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
