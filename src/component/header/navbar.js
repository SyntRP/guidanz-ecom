import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center primary_container h-[50px] border-y-2">
      <div className="grid grid-cols-2 pt-2">
        <div className="grid grid-cols-10 gap-7  justify-items-center text-[12px] font-semibold  ">
          <Link to = "/productlist/men"><div>Mens</div></Link>
         <Link to = "/productlist/women"> <div>Womens</div></Link>
         <Link to = "/productlist/Clothing"> <div>Clothings</div></Link>
         <Link to = "/productlist/Bags"> <div>Bags</div></Link>
         <Link to = "/productlist/Shoes"> <div>Shoes</div></Link>
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
