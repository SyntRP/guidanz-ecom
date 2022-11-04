import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../helper/hook/useMediaQuery";
import { customTablet } from "../../helper/constant/screenSizes";
import { ReactComponent as PrimaryLogo } from "../../asset/image/header/primaryLogo.svg";
import { ReactComponent as UserLogo } from "../../asset/image/header/userLogo.svg";
import { ReactComponent as CartLogo } from "../../asset/image/header/cartLogo.svg";
import Autocomplete from "../algolia/widget/AutoComplete";

const TopBar = () => {
  const [largerThanTablet] = useMediaQuery(customTablet);
  return (
    <div className="py-0.5 shadow">
      <div className="my-5 grid grid-cols-[auto_1fr_auto] items-center   primary_container">
        <Link to="/">
          <PrimaryLogo className="h-9 lg:h-10 xl:h-11 cursor-pointer" />
        </Link>
        {largerThanTablet ? (
          <div className="justify-self-center mx-4 sm:mx-6 xl:mx-16  w-11/12 max-w-7xl min-w-[300px]">
            <Autocomplete />
          </div>
        ) : (
          <div>I</div>
        )}
        <div className="flex justify-end gap-x-4  xl:gap-x-6 2xl:gap-x-10">
          <UserLogo className="h-7 cursor-pointer" />
          <CartLogo className="h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
