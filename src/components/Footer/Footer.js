import React from "react";
import background from "../../assests/images/footer.png";
import logo from "../../assests/images/Group 1000001799 (1).png";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocalPhone,
  LocationOn,
  Twitter,
} from "@mui/icons-material";
import img from "../../assests/images/Rectangle 42.png";
import img1 from "../../assests/images/Rectangle 41.png";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="w-full h-[20rem] bg-center bg-no-repeat bg-cover z-10 realtive flex items-center justify-center tablet:h-[30rem] mobile:h-[44rem]"
        style={{ backgroundImage: `url('${background})` }}
      >
        <div className="w-full h-full ">
          <img src={background} alt="background" className="w-full h-full" />
        </div>
        <div className="grid grid-cols-3 gap-4 pt-[2rem] pb-[2rem] pl-[4rem] pr-[4rem] absolute tablet:grid-cols-2 mobile:grid-cols-1 mobile:px-[1.5rem]">
          <div className="flex justify-start flex-col gap-[1rem]">
            <img
              src={logo}
              alt="logo"
              className="w-[8rem] h-[5rem] object-contain"
            />
            <span className="flex justify-start items-start gap-4">
              <LocationOn className="text-[#FDFDFD]" />
              <p className="w-[20rem] text-[16px] font-medium cursor-pointer">
                Office No 201, BBC BLDG., Bremen Chowk Aundhgaon.
              </p>
            </span>
            <span className="flex justify-start items-center gap-4 md:w-full">
              <Email className="text-[#FDFDFD]" />
              <p className=" text-[16px] font-medium cursor-pointer  md:text-wrap md:flex md:flex-wrap md:w-full tablet:overflow-hidden">
                salesuniqueconstructions@gmail.com 
              </p>
            </span>
            <span className="flex justify-start items-center gap-4">
              <LocalPhone className="text-[#FDFDFD] " />
              <p className="w-[20rem] text-[16px] font-medium cursor-pointer">
                +91 9225605618
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <h6 className="text-[#FDFDFD] text-[20px]">Company</h6>
              <p className="cursor-pointer" onClick={() => navigate("/")}>
                Home
              </p>
              <p className="cursor-pointer" onClick={() => navigate("/about")}>
                About Us
              </p>
              <p
                className="cursor-pointer"
                onClick={() => navigate("/project")}
              >
                Project
              </p>
              <p
                className="cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h6 className="text-[#FDFDFD] text-[20px]">Help Links</h6>
              <p
                className="cursor-pointer"
                onClick={() => navigate("/privacypolicy")}
              >
                Privacy policy
              </p>
              <p
                className="cursor-pointer"
                onClick={() => navigate("/termsAndCondition")}
              >
                Terms of Service
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start gap-3">
            <h6 className="text-[#FDFDFD] text-[20px]">Our Social Media</h6>
            <div className="flex justify-start gap-3">
              <span className="p-[0.5rem] bg-[#FFFFFF] rounded-full cursor-pointer">
                <Facebook />
              </span>{" "}
              <span className="p-[0.5rem] bg-[#FFFFFF] rounded-full cursor-pointer">
                <Instagram />
              </span>{" "}
              <span className="p-[0.5rem] bg-[#FFFFFF] rounded-full cursor-pointer">
                <LinkedIn />
              </span>{" "}
              <span className="p-[0.5rem] bg-[#FFFFFF] rounded-full cursor-pointer">
                <Twitter />
              </span>
            </div>
            <div className="flex flex-col justify-start gap-3">
              <h6 className="text-[#FDFDFD] text-[20px]">Latest Properties</h6>
              <div className="grid grid-cols-2 gap-4">
                <img src={img} alt="property" />
                <img src={img1} alt="property" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full p-[0.7rem] goldColor flex items-center justify-center">
        <p className="text-[#000000] text-[16px] font-semibold">
          Copyright 2024 © Aquib-Nemesis
        </p>
      </div> */}
    </>
  );
}

export default Footer;
