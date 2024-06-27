import React from "react";
import banner from "../../assests/images/Overlay.png";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Banner({ Title, PageName, image }) {
  return (
    <div className="w-11/12 flex flex-col items-center justify-center relative mt-[30px] mb-[30px]">
      <img
        src={image ? image : banner}
        alt="banner"
        className="w-full h-[20rem] "
      />
      <div className="flex flex-col items-center gap-4 absolute">
        <h2 className="text-[#fff] text-[25px] font-semibold">{Title}</h2>
        <span className="flex gap-3">
          <Link to="/" className="no-underline text-[#e6e6e6]">
            Home
          </Link>
          <ArrowForward style={{ color: "#fff" }} />
          <p>{PageName}</p>
        </span>
      </div>
    </div>
  );
}

export default Banner;
