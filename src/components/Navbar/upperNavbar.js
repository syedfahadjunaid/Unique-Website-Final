import {
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Twitter,
} from "@mui/icons-material";
import React from "react";

function UpperNavbar() {
  return (
    <div className="w-full pl-[5rem] pr-[5rem] pt-[0.5rem] pb-[0.5rem] text-[#fff] flex justify-between mobile:hidden md:px-[2rem] tablet:px-[1.5rem] ">
      <div className="flex gap-4">
        <span className="flex items-center gap-2 cursor-pointer">
          <Mail />{" "}
          <p className="font-normal">salesuniqueconstructions@gmail.com</p>
        </span>
        <span className="flex items-center gap-2 cursor-pointer tablet:hidden">
          <Phone /> <p className="font-normal">+91 9225605618</p>
        </span>
      </div>
      <div className="flex gap-1">
        <Facebook />

        <Twitter />

        <Instagram />

        <LinkedIn />
      </div>
    </div>
  );
}

export default UpperNavbar;
