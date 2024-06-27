import React from "react";
import img from "../../assests/images/Rectangle 11 (1).png";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import { WhatsApp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function ProjectCard({ title, para, subheading }) {
  const history = useNavigate();
  return (
    <div className="bg-[#fff] p-[1rem] flex flex-col justify-start gap-1 rounded">
      <img src={img} alt="property " className="w-full h-[15rem] " />
      <h2 className="text-[18px] font-semibold">
        {title ? title : " ENTER A SPACE TO BREATHE AND LIVE"}
      </h2>
      <p className="text-[16px] font-semibold text-[#6B6B6B]">{subheading}</p>
      <p className="text-[14px] text-[#6B6B6B]">
        {para
          ? para
          : " Wake up to the fresh verdant environment and enjoy the vast open spaces with panoramic mountain views that welcome you to a life of limitless luxury. "}
      </p>
      <div className="w-full gap-2 flex flex-col items-center justify-center">
        <button
          onClick={() => history("/project/singleProject")}
          className="flex w-[15rem] items-center justify-center gap-[2rem] goldColor text-[#fff] pl-[0.5rem] pr-[0.5rem] pt-[0.5rem] pb-[0.5rem] rounded"
        >
          Booking <HolidayVillageIcon />
        </button>
        <button className="flex w-[15rem] text-[#fff] bg-[#202020] gap-2 pl-[0.5rem] pr-[0.5rem] pt-[0.5rem] pb-[0.5rem] rounded">
          Learn more via Whatsapp <WhatsApp />
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
