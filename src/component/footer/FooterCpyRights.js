import React from "react";

const FooterCpyRights = () => {
  return (
    <div className="grid grid-cols-[auto_auto] h-[60px] bg-[#0A1D48] secondary_container mt-5">
      <div className="grid sm:justify-items-start content-center">
        <p className="text-xs text-white">
          Copyright © 2022 G Fashion. All Rights Reserved.
        </p>
      </div>
      <div className="grid sm:justify-items-end content-center">
        <p className="text-xs text-white pr-24">
          {" "}
          Terms of use | Privacy Policy | Trade Marks
        </p>
      </div>
    </div>
  );
};

export default FooterCpyRights;
