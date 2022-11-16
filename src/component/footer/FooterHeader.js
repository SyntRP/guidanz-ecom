import React from "react";
import { Button, Input } from "reactstrap";
import logo from "../../asset/image/HomePage/Group 2843.svg";
import facebook from "../../asset/image/HomePage/facebook-fill.svg";
import linkedin from "../../asset/image/HomePage/Path 252.svg";
import twitter from "../../asset/image/HomePage/Path 254.svg";
import youtube from "../../asset/image/HomePage/Path 256.svg";

const FooterHeader = () => {
  return (
    <div className="grid grid-cols-1 mb:grid-cols-[auto_auto_auto]  primary_bg_gradient secondary_container items-center mt-5">
      <div className="place-items-center p-[30px]">
        <img src={logo} alt=" " />
      </div>
      <div>
        <div>
          <p className="text-white font-bold md:text-[23px] text-[14px]">
            SIGN UP FOR EXCLUSIVE NEWS & OFFERS
          </p>
        </div>
        <div>
          <form>
            <Input
              className=" bg-transparent p-3 border border-white-500 w-[330px] text-white mt-2 placeholder-white "
              type="text"
              required
              placeholder="Enter your email id"
            />
            <Button className="bg-white p-[13px] w-[120px] font-bold">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="flex gap-4 place-item-center p-[2rem]">
        <div className="rounded-full bg-black h-[48px] w-[48px]  hover:opacity-50 ">
          <img src={facebook} alt=" " className="h-[26px] w-[26px] m-2.5" />
        </div>
        <div className="rounded-full bg-black h-[48px] w-[48px] hover:opacity-50">
          <img src={linkedin} alt=" " className="w-[20px] h-[19px] m-3.5" />
        </div>
        <div className="rounded-full bg-black h-[48px] w-[48px] hover:opacity-50">
          <img src={twitter} alt=" " className="w-[21px] h-[17px] m-3.5" />
        </div>
        <div className="rounded-full bg-black h-[48px] w-[48px] hover:opacity-50">
          <img src={youtube} alt=" " className="w-[20px] h-[15px] m-3.5" />
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
