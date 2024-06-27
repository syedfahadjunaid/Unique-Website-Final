import React from "react";
import Image from "../../assests/images/Rectangle 8.png";
import Image1 from "../../assests/images/Group 42.png";
import arrow from "../../assests/images/Line 2.png";
import logo1 from "../../assests/images/Group 1000001799 (1).png";
import logo2 from "../../assests/images/Group 1000001802.png";
import logo3 from "../../assests/images/Group 1000001801.png";
import img from "../../assests/images/Rectangle 10.png";
import img1 from "../../assests/images/Rectangle 11 (1).png";
import img2 from "../../assests/images/Group.png";
import icon from "../../assests/images/Group 1000001806.png";
import icon1 from "../../assests/images/Group 1000001807.png";
import icon2 from "../../assests/images/Group 1000001808.png";
import ProductCard from "../../components/ProjectCard/ProjectCard";
import featuredBanner from "../../assests/images/img (1).png";
import Marquee from "react-fast-marquee";
import testimonialBanner from "../../assests/images/Group.png";
import ContactUsBanner from "../../assests/images/Rectangle 8.png";
import testimonialPerson from "../../assests/images/Imaage Placeholder.png";
import { AccessTime, Email, LocalPhone, LocationOn } from "@mui/icons-material";
import testimonialImage from "../../assests/images/img.png";
import BlogSliderCard from "../../components/BlogSliderCard/BlogSliderCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Home() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full flex items-center flex-col shadow mb-[2.5rem] md:mt-[2.5rem] tablet:mt-[14rem] mobile:mt-[0.5rem] mobile:mb-[1rem]">
        <div className="w-11/12 h-[460px]  h-[10rem] grid grid-cols-2 gap-4 items-center md:flex md:flex-col-reverse tablet:flex tablet:flex-col-reverse mobile:flex mobile:flex-col-reverse mobile:h-fit">
          <div className="flex items-center flex-col gap-3 md:w-full">
            <h1 className="w-[30rem] text-[#fff] pb-[0rem] text-[2rem] font-bold leading-9 md:w-full tablet:w-full mobile:w-full">
              Building Dreams! Your Realty Partner in Progress!
            </h1>
            <p className="w-[30rem] text-[18px] leading-8 md:w-full tablet:w-full mobile:w-full">
              Unique Group is a leading player in the "Service Sector" and
              stands out as the premier Real Estate Agency in India. Our culture
              is deeply rooted in "Customer Focus," where we prioritize
              exceeding expectations. We consistently strive to provide our
              customers with that extra touch, ensuring their satisfaction and
              delight without any compromises.
            </p>
            <span className="w-[30rem] flex items-center justify-start gap-4 md:w-full tablet:w-full mobile:w-full">
              <button className="primary_button pb-[0.5rem] pt-[0.5rem] pl-[1rem] pr-[1rem] rounded">
                Get Started
              </button>
              <img
                src={arrow}
                alt="arrow"
                className="w-[5rem] h-[5rem] object-contain"
              />
            </span>
          </div>
          <div className="text-[#fff] flex items-center relative md:mt-[2rem] md:w-full tablet:w-full mobile:w-full">
            <img
              src={Image}
              alt="banner"
              className="w-[27rem] h-[22rem] md:h-[20rem] md:w-full md:h-[13rem] tablet:h-[20rem] tablet:w-full tablet:h-[13rem] mobile:w-full mobile:h-[15rem]"
            />
            <img
              src={Image1}
              alt="banner"
              className="w-[22rem] h-[12rem] absolute right-[7rem] md:top-[1.5rem] md:right-[1rem] md:w-[25rem] md:h-[10rem]  tablet:top-[2.5rem] tablet:right-[1rem] tablet:w-[25rem] tablet:h-[15rem] mobile:w-[18rem] mobile:right-[1rem]"
            />
          </div>
        </div>
        <div className="w-3/4 flex items-center justify-between md:w-11/12 tablet:w-11/12 mobile:w-11/12">
          <img
            src={logo1}
            alt="logo"
            className="w-[10rem] h-[5rem] object-contain mobile:w-[7rem] mobile:h-[4rem]"
          />
          <img
            src={logo2}
            alt="logo"
            className="w-[10rem] h-[5rem] object-contain  mobile:w-[7rem] mobile:h-[4rem]"
          />
          <img
            src={logo3}
            alt="logo"
            className="w-[10rem] h-[5rem] object-contain mobile:w-[7rem] mobile:h-[4rem]"
          />
        </div>
        <div className="boxShadow  w-3/4 h-[1px] mt-[2rem] mb-[2rem] mobile:mb-[0rem]"></div>
      </div>
      <div className="mt-[4.5rem] mobile:mt-[1.5rem] mb-[6.5rem] grid grid-cols-2 gap-4 pl-[3rem] pr-[3rem] md:flex md:flex-col md:gap-[4rem] tablet:flex tablet:flex-col tablet:gap-[4rem] mobile:flex mobile:flex-col mobile:gap-[4rem] mobile:px-[1rem] mobile:gap-[1.5rem]">
        <div className="w-full flex flex-col justify-center items-center mobile:mb-[1rem]">
          <img
            src={img}
            alt="banner"
            className="w-11/12 md:hidden tablet:hidden mobile:hidden"
          />
          <img
            src={img1}
            alt="banner"
            className="w-2/4 mt-[-4rem] md:hidden tablet:hidden mobile:hidden"
          />
          <h2 className="text-[8rem] text font-bold md:w-full tablet:w-full mobile:w-full mobile:text-[4rem]">
            About Us
          </h2>
        </div>
        <div className="flex flex-col justify-start gap-4">
          <h2 className="text-[35px] linear_text font-semibold ">
            Creativity is Our Mission!
          </h2>
          <p className="leading-8">
            We put our trust in the wonder of creativity! It's a boundless
            force, turning imagination into tangible realities. Fueled by needs
            and desires, this creativity sparks innovation, inspiring dreams of
            a more elevated lifestyle. Our ethos revolves around a contemporary,
            modern way of living that adapts to the changing times. And when it
            comes to integrating creativity into lifestyle, we emphasize the
            importance of building with unparalleled quality.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="goldColor w-[8rem] pt-[0.5rem] pb-[0.5rem] rounded"
          >
            Read More
          </button>
          <img src={img2} alt="banner" />
        </div>
      </div>
      <div className="mt-[6.5rem] mb-[6.5rem] w-full flex flex-col items-center justify-center gap-[3rem] mobile:mt-[4rem] mobile:mb-[10rem]">
        <h2 className="w-full  text-[35px] linear_text  font-semibold text-center ">
          Services We Provide
        </h2>
        <div className="grid grid-cols-3 gap-[3rem] w-10/12 md:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
          <div className="flex flex-col justify-start gap-4">
            <img src={icon} alt="logo" className="w-[5rem] he-[5rem]" />
            <span className="border-r-[1px] flex flex-col justify-start gap-2 mobile:border-[0px]">
              <h6 className="text-[20px] linear_text font-semibold">
                Constructions
              </h6>
              <p className="text-[14px] w-10/12">
                We specialize in delivering exceptional results, ensuring your
                vision is brought to life with the highest quality craftsmanship
                and attention to detail.
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <img src={icon1} alt="logo" className="w-[5rem] he-[5rem]" />
            <span className="border-r-[1px] flex flex-col justify-start gap-2 md:border-[0px] tablet:border-[0px] mobile:border-[0px]">
              <h6 className="text-[20px] linear_text font-semibold">
                Real Estate Agent
              </h6>
              <p className="text-[14px] w-10/12">
                We offer a comprehensive range of services tailored to meet your
                needs. Whether you're buying, or investing, we have the
                expertise and resources to assist you every step of the way.
              </p>
            </span>
          </div>
          <div className="flex flex-col justify-start gap-4">
            <img src={icon2} alt="logo" className="w-[5rem] he-[5rem]" />
            <span className=" flex flex-col justify-start gap-2">
              <h6 className="text-[20px] linear_text font-semibold">
                Property Consultants
              </h6>
              <p className="text-[14px] w-10/12">
                Our expert team will guide you through the process, ensuring
                informed decisions and successful outcomes.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[6.5rem] mb-[1.5rem] w-full flex items-center justify-center flex-col relative md:mt-[14.5rem] md:mb-[14.5rem] tablet:mt-[17rem] tablet:mb-[17rem] mobile:mt-[30.5rem] mobile:mb-[30rem]">
        <img
          src={featuredBanner}
          alt="featured banner"
          className="w-full h-[60rem] object-cover"
        />
        <div className="w-full flex items-center justify-center flex-col absolute">
          <div className="w-11/12 flex justify-between items-center">
            <h2 className="text-[6rem] text font-bold md:text-[4rem] tablet:text-[3rem] mobile:text-[1.7rem]">
              Featured Properties
            </h2>
            <button
              onClick={() => navigate("/project")}
              className="goldColor pt-[0.5rem] pb-[0.5rem] pr-[0.8rem] pl-[0.8rem] rounded text-[16px] font-medium"
            >
              View More
            </button>
          </div>
          <div className="w-11/12 bg-[#282828] p-[3rem] mt-[5rem] grid grid-cols-3 gap-4 rounded md:grid-cols-2 tablet:grid-cols-2 mobile:mt-[2rem] mobile:grid-cols-1 mobile:p-[1.5rem]">
            <ProductCard
              title="UNIQUE SOLITAIRE"
              subheading="Smart Spacious Spaces for Everyone!"
              para="Unique Solitaire is a modern project in Wadegaon, Pune, offering diverse property options and amenities to suit various budgets and cater to working professionals' needs. "
            />
            <ProductCard
              title="BLUE BELLS PARK"
              subheading="Premium Bungalows & Plots!"
              para="For prospective homebuyers in Pune's Maval area, Blue Bells Park by Unique Constructions Pune offers a variety of options across different budgets. Scheduled for completion by December 2024, it presents an appealing opportunity."
            />
            <ProductCard
              title="PALAZZO GREENS"
              subheading="The Best of All Worlds in One!"
              para="Unique Palazzo Greens in Talegaon Dabhade, Pune offers ready-to-move apartments across various budgets, combining comfort and style. With families already moving in, it's an ideal choice for new residents."
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-[2.5rem] flex items-center justify-center">
        <Marquee
          className="w-11/12 "
          direction="left"
          loop={0}
          autoFill
          speed={50}
          pauseOnHover={true}
        >
          <p className="text-[22px] font-semibold pl-[1rem] pr-[1rem] cursor-pointer">
            Residential
          </p>
          <p className="text-[22px] font-semibold pl-[1rem] pr-[1rem] cursor-pointer">
            Apartments
          </p>
          <p className="text-[22px] font-semibold pl-[1rem] pr-[1rem] cursor-pointer">
            Residential
          </p>
          <p className="text-[22px] font-semibold pl-[1rem] pr-[1rem] cursor-pointer">
            Luxury Property
          </p>
        </Marquee>
      </div>
      <div className="w-full mt-[4rem] mb-[3rem] flex flex-col justify-center items-center">
        <div className="w-11/12 flex justify-between items-center">
          <h2 className="text-[7rem] text font-bold md:text-[4rem] tablet:text-[3.5rem] mobile:text-[1.7rem]">
            Testimonials
          </h2>
          <img
            src={testimonialBanner}
            alt="banner"
            className="object-contain w-[25rem] tablet:h-[5rem] mobile:w-[15rem]"
          />
        </div>
        <div className="w-10/12 grid grid-cols-3   mt-[2rem] mb-[3rem] rounded mobile:flex mobile:flex-col">
          <div className="flex items-center justify-center backgroundShadow p-[2rem] rounded-lg ">
            <img src={testimonialPerson} alt="testimonial person" />
          </div>
          <div className="col-span-2 grid grid-cols-2 bg-[#fff] p-[2rem] mobile:flex mobile:flex-col">
            <div className="grid grid-rows-2 gap-3 items-center ">
              <span className="flex justify-start flex-col gap-2">
                <h2 className="text-[22px] font-medium"> Himanshu Saha </h2>
                <p className="text-[16px] font-normal">
                  Thank you for the prompt and positive response. Your
                  assistance was truly wonderful and provided in a very short
                  time. I appreciate it!
                </p>
              </span>
              <span>
                <h6 className="text-[18px] font-medium">
                  Himanshu Saha, Pune!
                </h6>
                {/* <p className="text-[16px] text-[#0F0F0F] font-normal">
                  CEO of Gulu Gulu
                </p> */}
              </span>
            </div>
            <div className="flex items-center justify-center flex-col mobile:hidden ">
              <img
                src={testimonialImage}
                alt=" testimonial Project"
                className="object-contain w-[20rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-[4rem] mb-[7.5rem] flex flex-col justify-center items-center mobile:mb-[2rem]">
        <div className="w-11/12 realtive flex items-start justify-center ">
          <img
            src={ContactUsBanner}
            alt="contact us banner"
            className="w-full h-[35rem] mobile:h-[65rem]"
          />
          <div className=" grid grid-cols-2 gap-4 absolute p-[4rem] gap-2 md:p-[1rem] tablet:p-[1rem] mobile:p-[1rem] mobile:flex mobile:flex-col mobile:p-[1.5rem]">
            <div className="bg-[#fff] ml-[3rem] p-[2rem] rounded mobile:ml-[0rem]">
              <h2 className="text-[22px] font-semibold">Get in Touch</h2>
              <p className="text-[16px] font-normal">
                Fill up the form our team will get back to you within 24 Hours
              </p>
              <form
                className="flex flex-col justify-start w-full gap-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <span className="flex flex-col justify-start gap-2">
                  <p className="text-[#000] text-[16px] font-medium">
                    Full Name
                  </p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border-[2px] border-[#CCCCCC] w-full h-[2.2rem] rounded outline-none pl-[5px]"
                    {...register("name", {
                      required: true,
                      maxLength: 30,
                      validate: (value) => {
                        return !!value.trim();
                      },
                    })}
                  />
                  {errors.name && (
                    <p
                      className="loginFormError"
                      style={{ marginLeft: "10px" }}
                    >
                      Please Enter Valid Name
                    </p>
                  )}
                </span>
                <span className="flex flex-col justify-start gap-2">
                  <p className="text-[#000] text-[16px] font-medium">Email</p>
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-[2px] border-[#CCCCCC] w-full h-[2.2rem] rounded outline-none pl-[5px]"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />{" "}
                  {errors.email && (
                    <p
                      className="loginFormError"
                      style={{ marginLeft: "10px" }}
                    >
                      Please Enter Valid Email
                    </p>
                  )}
                </span>
                <span className="flex flex-col justify-start gap-2">
                  <p className="text-[#000] text-[16px] font-medium">Phone</p>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="border-[2px] border-[#CCCCCC] w-full h-[2.2rem] rounded outline-none pl-[5px]"
                    {...register("phone", {
                      required: true,
                      pattern: /^[0-9+-]+$/,
                      minLength: 10,
                      maxLength: 10,
                    })}
                  />
                  {errors.phone && (
                    <p
                      className="loginFormError"
                      style={{ marginLeft: "10px" }}
                    >
                      Please Enter Valid Phone Number
                    </p>
                  )}
                </span>
                <span className="flex flex-col justify-start gap-2">
                  <p className="text-[#000] text-[16px] font-medium">Message</p>
                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="border-[2px] border-[#CCCCCC] w-full  rounded outline-none pl-[5px]"
                    {...register("message", {
                      required: true,
                      validate: (value) => {
                        return !!value.trim();
                      },
                    })}
                  />
                  {errors.message && (
                    <p
                      className="loginFormError"
                      style={{ marginLeft: "10px" }}
                    >
                      Please Enter Valid Message
                    </p>
                  )}
                </span>
                <span className="flex justify-start">
                  <button className="pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] bg-[#0D0D0D] text-[#fff] rounded">
                    Send Message
                  </button>
                </span>
              </form>
            </div>
            <div className="grid grid-cols-2 gap-4 h-fit md:grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1">
              <div className="flex items-start justify-start gap-3">
                <LocationOn className="text-[#fff]" />
                <span>
                  <h6 className="text-[#fff] text-[18px] font-semibold">
                    Location
                  </h6>
                  <p className="w-10/12 text-[14px] font-medium">
                    Office No 201, BBC BLDG.,Bremen Chowk Aundhgaon,Pune 411007
                  </p>
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <Email className="text-[#fff]" />
                <span>
                  <h6 className="text-[#fff] text-[18px] font-semibold">
                    Email
                  </h6>
                  <p className="w-10/12 text-[14px] font-medium">
                    salesuniqueconstructions@gmail.com
                  </p>
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <LocalPhone className="text-[#fff]" />
                <span>
                  <h6 className="text-[#fff] text-[18px] font-semibold">
                    Phone
                  </h6>
                  <p className="text-[14px] font-medium">+271 386-647-3637</p>
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <AccessTime className="text-[#fff]" />
                <span>
                  <h6 className="text-[#fff] text-[18px] font-semibold">
                    Businnes Hour
                  </h6>
                  <p className=" text-[14px] font-medium">
                    Monday - Friday - 9am to 5pm
                  </p>
                  <p className="w-10/12 text-[14px] font-medium">
                    Saturday - 9am to 2pm
                  </p>
                  <p className="w-10/12 text-[14px] font-medium">
                    Sunday - Opened
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full mt-[5rem] mb-[7rem] flex flex-col justify-center items-center gap-3">
        <h2 className="text-[35px] text-[#fff] font-semibold leading-8">
          Latest Dubai <span className="linear_text">Property News</span>
        </h2>
        <div className="w-10/12 mt-[2rem] ">
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <BlogSliderCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="gap-[2rem] h-[25rem] mt-[30px] mb-[30px] w-4/6 goldCard p-[3rem] rounded flex flex-col items-center justfiy-center md:w-11/12 tablet:w-11/12 mobile:w-11/12 mobile:gap-[1rem] mobile:p-[1.5rem]">
          <h2 className="text-[2.2rem] text-[#fff] w-[35rem] text-center leading-9 font-semibold mobile:text-[1.2rem] mobile:w-full mobile:text-center mobile:leading-7">
            Dedicated to Ensuring Customer Satisfaction!
          </h2>
          <p className="w-[40rem] text-center tablet:w-full mobile:w-full">
            With our deep understanding of the local market, we deliver
            top-notch and ethical services to our clients, ensuring their needs
            are met comprehensively and professionally.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#C3A70B] text-[#fff] pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded "
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
