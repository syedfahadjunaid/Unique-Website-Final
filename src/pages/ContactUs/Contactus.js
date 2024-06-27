import React from "react";
import Banner from "../../components/Banner/Banner";
import { LocationOn } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useForm } from "react-hook-form";
function Contactus() {
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
    <div className="flex flex-col w-full items-center relative">
      <Banner Title="Contact Us" PageName="Contact" />
      <div className="w-full flex flex-col items-center justify-center mt-[30px] mb-[30px] gap-3 relative">
        <div className="w-9/12 tablet:w-11/12 mobile:w-11/12">
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.1622434885453!2d73.81125647470876!3d18.561554717922032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3742f2a08b%3A0xc346f3f386cf71f9!2sAundh%20Bremain%20Chowk%20Shivneri!5e1!3m2!1sen!2sin!4v1712127393723!5m2!1sen!2sin"
            height="450"
            allowfullscreen=""
            loading="lazy"
            style={{ width: "100%", borderRadius: "10px" }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-8/12 tablet:w-10/12 mobile:w-10/12 bg-[#fff]  rounded absolute bottom-[-6rem] grid grid-cols-3 gap-3 items-start p-[2rem] mobile:grid-cols-1 mobile:bottom-[-8rem]">
          <div className="flex gap-2">
            <LocationOn style={{ color: "#C3A70B" }} />
            <span>
              <h6 className="text-[#C3A70B] text-[16px] font-semibold">
                Location
              </h6>
              <p className="text-[#0F0F0F] text-[14px] font-medium">
                Office No 201, BBC BLDG.,Bremen Chowk Aundhgaon,Pune 411007
              </p>
            </span>
          </div>
          <div className="flex gap-2">
            <EmailIcon style={{ color: "#C3A70B" }} />
            <span>
              <h6 className="text-[#C3A70B] text-[16px] font-semibold">
                Email
              </h6>
              <p className="text-[#0F0F0F] text-[14px] font-medium">
                salesuniqueconstructions@gmail.com
              </p>
            </span>
          </div>
          <div className="flex gap-2">
            <LocalPhoneIcon style={{ color: "#C3A70B" }} />
            <span>
              <h6 className="text-[#C3A70B] text-[16px] font-semibold">
                Phone
              </h6>
              <p className="text-[#0F0F0F] text-[14px] font-medium">
                +271 386-647-3637
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="w-3/5 tablet:w-10/12 mobile:w-10/12 mobile:mt-[7rem] mt-[90px] mb-[30px] flex gap-4">
        <AccessTimeIcon style={{ color: "#C3A70B" }} />
        <div>
          <h5 className="text-[22px] text-[#C3A70B] font-semibold">
            Businnes Hour
          </h5>
          <span className="flex gap-4">
            <p>Monday - Friday - 9am to 5pm</p> <p>/</p>{" "}
            <p>Saturday - 9am to 2pm</p> <p>/</p> <p>Sunday - Opened</p>
          </span>
        </div>
      </div>
      <div className="w-11/12 bg-[#282828] flex items-center justify-center p-[4rem] rounded mobile:p-[1.5rem]">
        <form
          className="w-10/12 tablet:w-full mobile:w-full  flex flex-col justify-start gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-[25px] text-[#C3A70B] font-semibold">
            Get in Touch
          </h2>
          <p>Fill up the form our team will get back to you within 24 Hours</p>
          <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
            <span className="flex flex-col justify-start gap-2 w-full">
              <p className="text-[#C3A70B] text-[18px] font-medium">
                Full Name
              </p>
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#fff] text-[#000] h-[2rem] rounded outline-none pl-[5px]"
                {...register("name", {
                  required: true,
                  maxLength: 20,
                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
              />
              {errors.name && (
                <p className="loginFormError" style={{ marginLeft: "10px" }}>
                  Please Enter Valid Name
                </p>
              )}
            </span>
            <span className="flex flex-col justify-start gap-2 w-full">
              <p className="text-[#C3A70B] text-[18px] font-medium">Email</p>
              <input
                type="text"
                placeholder="Email"
                className="bg-[#fff] text-[#000] h-[2rem] rounded outline-none pl-[5px]"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <p className="loginFormError" style={{ marginLeft: "10px" }}>
                  Please Enter Valid Email
                </p>
              )}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1">
            <span className="flex flex-col justify-start gap-2 w-full">
              <p className="text-[#C3A70B] text-[18px] font-medium">
                Mobile Number
              </p>
              <input
                type="number"
                placeholder="Mobile Number"
                className="bg-[#fff] text-[#000] h-[2rem] rounded outline-none pl-[5px]"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9+-]+$/,
                  minLength: 10,
                  maxLength: 10,
                })}
              />
              {errors.phone && (
                <p className="loginFormError" style={{ marginLeft: "10px" }}>
                  Please Enter Valid Mobile Number
                </p>
              )}
            </span>
            <span className="flex flex-col justify-start gap-2 w-full">
              <p className="text-[#C3A70B] text-[18px] font-medium">Subject</p>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#fff] text-[#000] h-[2rem] rounded outline-none pl-[5px]"
                {...register("subject", {
                  required: true,
                  maxLength: 100,
                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
              />
              {errors.subject && (
                <p className="loginFormError" style={{ marginLeft: "10px" }}>
                  Please Enter Valid Subject
                </p>
              )}
            </span>
          </div>
          <div>
            <p p className="text-[#C3A70B] text-[18px] font-medium gap-2">
              Messages
            </p>
            <textarea
              rows={7}
              placeholder="Write your messages in here"
              className="bg-[#fff] text-[#000] w-full rounded pl-[5px] pt-[5px] outline-none"
              {...register("message", {
                required: true,

                validate: (value) => {
                  return !!value.trim();
                },
              })}
            />
            {errors.message && (
              <p className="loginFormError" style={{ marginLeft: "10px" }}>
                Please Enter Valid Message
              </p>
            )}
          </div>
          <div className="text-start">
            <button className="secondry_button pt-[5px] pb-[5px] pl-[8px] pr-[8px] rounded text-[16px]">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="bg-[#C0C0C0] w-6/12 h-[1px] mt-[20px] mb-[20px]"></div>
    </div>
  );
}

export default Contactus;
