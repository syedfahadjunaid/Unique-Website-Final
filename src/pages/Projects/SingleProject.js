import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import { FmdGood, LocationOn, Share } from "@mui/icons-material";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
function SingleProject() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex flex-col  w-full items-center">
      <Banner Title="Single Project Page" PageName="Single Project Page" />
      <div className="w-11/12  justify-center items-center  bg-[#353535] p-[2rem] mobile:p-[1rem] rounded-lg flex flex-col  mt-[30px] mb-[30px] gap-3">
        <div className="w-11/12 h-[30rem]  mb-[2rem] md:h-[27rem] tablet:h-[25rem] mobile:h-[20rem]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 col-span-3"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[#fff] text-[3rem] font-semibold">Synopsis</h2>
          <p className="bg-[#292929] pt-[0.5rem] pb-[0.5rem] pl-[0.7rem] pr-[0.7rem] rounded text-[18px] font-semibold">
            For Rent
          </p>
        </div>
        <div className="w-full flex justify-center items-center flex-col mt-[2rem] gap-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            a maecenas pretium magna vitae consectetur. Amet mi massa tempus,
            egestas. Nisi facilisis urna, neque eleifend imperdiet eleifend.
            Egestas nascetur mollis scelerisque tristique in bibendum ultricies
            proin elementum. Cras pellentesque eleifend dolor volutpat. Nulla
            turpis tellus interdum condimentum risus vulputate vitae. Egestas
            sollicitudin quisque convallis phasellus ornare odio consectetur.
            Cum quam dictumst elementum, pharetra fermentum viverra fames
            aliquet. Sed a tellus arcu iaculis fringilla sit varius risus nulla.
            Magna arcu nibh lacus vel libero in euismod fermentum cursus. Ut
            scelerisque facilisi eu cursus nisl.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            a maecenas pretium magna vitae consectetur. Amet mi massa tempus,
            egestas. Nisi facilisis urna, neque eleifend imperdiet eleifend.
            Egestas nascetur mollis scelerisque tristique in bibendum ultricies
            proin elementum. Cras pellentesque eleifend dolor volutpat. Nulla
            turpis tellus interdum condimentum risus vulputate vitae. Egestas
            sollicitudin quisque convallis phasellus ornare odio consectetur.
            Cum quam dictumst elementum, pharetra fermentum viverra fames
            aliquet. Sed a tellus arcu iaculis fringilla sit varius risus nulla.
            Magna arcu nibh lacus vel libero in euismod fermentum cursus. Ut
            scelerisque facilisi eu cursus nisl.
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            a maecenas pretium magna vitae consectetur. Amet mi massa tempus,
            egestas. Nisi facilisis urna, neque eleifend imperdiet eleifend.
            Egestas nascetur mollis scelerisque tristique in bibendum ultricies
            proin elementum. Cras pellentesque eleifend dolor volutpat. Nulla
            turpis tellus interdum condimentum risus vulputate vitae. Egestas
            sollicitudin quisque convallis phasellus ornare odio consectetur.
            Cum quam dictumst elementum, pharetra fermentum viverra fames
            aliquet. Sed a tellus arcu iaculis fringilla sit varius risus nulla.
            Magna arcu nibh lacus vel libero in euismod fermentum cursus. Ut
            scelerisque facilisi eu cursus nisl.
          </p>
        </div>
        <div className="w-11/12 mt-[1rem] bg-[#2A2A2A] p-[1.5rem] rounded md:w-full tablet:w-full mobile:w-full">
          <div className="w-full flex justify-between mb-[1rem]">
            <h6 className="text-[2rem] text-[#fff]">Lakeside Living</h6>
            <Share />
          </div>
          <div className="w-full flex justify-between mb-[1rem] mobile:flex-col mobile:justify-start gap-2">
            <p className="text-[1rem] font-normal flex items-center text-[#fff]">
              <LocationOn style={{ fontSize: "1rem" }} /> 123 Elm Street,
              Springfield, IL 62701
            </p>
            <p
              className="bg-[#fff] font-semibold text-[#4B4B4B] pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded mobile:w-fit
            "
            >
              IND 550,000
            </p>
          </div>
          <div className="items-center justify-center flex flex-col">
            <h3 className="text-[2rem] text-[#fff] font-normal text-start w-full">
              Property Details
            </h3>
            <div className="grid grid-cols-2 gap-[1.5rem] w-4/5 mt-[2rem] mobile:grid-cols-1 mobile:justify-start mobile:w-full">
              <div className="flex items-center gap-4 border-b-[2px] border-[#B0B0B0] pb-[5px] justify-between">
                <span className="flex items-center gap-2">
                  <FmdGood style={{ color: "#B0B0B0" }} />
                  <p>Property Locations</p>
                </span>
                <span>
                  <p className="text-[#fff]">Springfield, IL 62701</p>
                </span>
              </div>
              <div className="flex items-center  gap-4 border-b-[2px] border-[#B0B0B0] pb-[5px] justify-between">
                <span className="flex items-center gap-2 ">
                  <FmdGood style={{ color: "#B0B0B0" }} />
                  <p>Property Locations</p>
                </span>
                <span>
                  <p className="text-[#fff]">Springfield, IL 62701</p>
                </span>
              </div>
              <div className="flex items-center  gap-4 border-b-[2px] border-[#B0B0B0] pb-[5px] justify-between">
                <span className="flex items-center gap-2 ">
                  <FmdGood style={{ color: "#B0B0B0" }} />
                  <p>Property Locations</p>
                </span>
                <span>
                  <p className="text-[#fff]">Springfield, IL 62701</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className=" w-4/5 bg-[#fff] h-[1px] mt-[1rem] mb-[1.5rem]"></span>
        <div className=" w-full flex items-center justfiy-start gap-3 mobile:flex-col mobile:items-start">
          <button className="goldColor pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded text-[#fff]">
            Booking Interest
          </button>
          <button className="goldColor pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded text-[#fff]">
            Learn more via Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
