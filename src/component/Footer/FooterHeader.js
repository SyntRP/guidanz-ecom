import React from "react";
import { Button, Input} from "reactstrap";
import logo from "../../asset/image/HomePage/Group 2843.png"
import facebook from "../../asset/image/HomePage/facebook-fill.svg"
import linkedin from "../../asset/image/HomePage/Path 252.svg"
import twitter  from "../../asset/image/HomePage/Path 254.svg"
import youtube  from "../../asset/image/HomePage/Path 256.svg"

const FooterHeader = () => {
  return (
    <div className="grid grid-cols-[auto_auto_auto] h-[208px] w[1920px]  primary_bg_gradient secondary_container content-center">
      <div className="place-items-center">
        <img src={logo} alt =" " className="w-56"/>
      </div>
      <div>
        <div>
          <p className="text-white text-[32px]">SIGN UP FOR EXCLUSIVE NEWS & OFFERS</p>
        </div>
        <div>
            <form>
            <Input className=" bg-transparent p-3 border border-white-500 w-[549px] text-white mt-2" type='text' required placeholder="Enter your email id"/>
          <Button className="bg-white h-[50px] w-[144px] font-bold" >
            Submit
          </Button>
            </form>
         
        </div>
      </div>
      <div className=" flex flex-row gap-4 pt-12">
        <div className="rounded-full bg-black h-[48px] w-[48px]  ">
            <img src={facebook} alt = " " className="h-[26px] w-[26px] m-2.5"/>
        </div>
        <div className="rounded-full bg-black h-[48px] w-[48px]">
             <img src={linkedin} alt = " " className="w-[20px] h-[19px] m-3.5"/>
        </div>
        <div className="rounded-full bg-black h-[48px] w-[48px]">
            <img src={twitter} alt = " " className="w-[21px] h-[17px] m-3.5"/>
        </div>
        <div className="rounded-full bg-black h-[48px] w-[48px]">
            <img src={youtube} alt = " " className="w-[20px] h-[15px] m-3.5"/>
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
