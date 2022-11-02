import React from "react";

const FooterCpyRights = () => {
  return (
    <div className="grid grid-cols-[auto_auto] h-[60px] w[1920px] bg-[#0A1D48] secondary_container">
      <div className="grid justify-items-start content-center">
        <p className="text-xs text-white">
          Copyright © 2022 G Fashion. All Rights Reserved.
        </p>
      </div>
      <div className="grid justify-items-end content-center">
        <p className="text-xs text-white pr-24">
          {" "}
          Terms of use | Privacy Policy | Trade Marks
        </p>
      </div>
    </div>
  );
};

export default FooterCpyRights;
