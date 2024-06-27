import React, { useEffect, useState } from "react";
import logo from "../../assests/images/Group 1000001799 (1).png";
import { Link, NavLink } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Close, Menu } from "@mui/icons-material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { useForm } from "react-hook-form";
function MainNavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  let activeStyle = {
    color: "#C3A70B",
    fontweight: "500",
    textDecoration: "none",
    borderBottom: "2px solid #C3A70B",
  };
  let unActiveStyle = {
    color: "#fff",
    fontweight: "500",
    textDecoration: "none",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: "5px",
    border: "2px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "transparent",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [width, setWidth] = useState(0);
  const [openMenuHandle, setMenuHandle] = useState(false);
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
    <div
      className={
        scrolled
          ? "border-b-[0.1px] border-[#d0ab3c] pl-[5rem] pr-[5rem] pt-[0.5rem] pb-[0.5rem] flex justify-between items-center mainNav bg-[#000] z-10 md:px-[2rem] tablet:px-[2rem] mobile:px-[1.5rem] mobile:py-[1rem] relative"
          : "pl-[5rem] pr-[5rem] pt-[0.5rem] pb-[0.5rem] flex justify-between items-center mainNav bg-[#000] z-10 md:px-[2rem] tablet:px-[2rem] mobile:px-[1.5rem] mobile:py-[1rem] relative"
      }
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[8rem] h-[5rem] object-contain"
        />
      </Link>
      <ul className="flex gap-4 tablet:hidden mobile:hidden">
        <li>
          <NavLink
            to="/"
            className="text-[18px] font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-[18px] font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className="text-[18px] font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className="text-[18px] font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="text-[18px] font-medium"
            style={({ isActive }) => (isActive ? activeStyle : unActiveStyle)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <button
        onClick={handleOpen}
        className="navbar_button flex w-[9.5rem] primary_button pt-[0.7rem] pb-[0.7rem] pl-[1rem] pr-[1rem] items-center rounded tablet:hidden mobile:hidden"
      >
        Enquire Now
        <span className="button_arrow">
          <NorthEastIcon />
        </span>
      </button>

      <div className="hidden tablet:flex mobile:flex">
        <Menu
          className="text-[#fff] hidden tablet:flex mobile:flex"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
          onClick={() => [setWidth(17)]}
        />
      </div>

      <div
        className="sidenav backgroundShadow hidden tablet:flex mobile:flex"
        style={{ width: `${width}rem` }}
      >
        <span
          className="absolute left-[-1.7rem] top-[-1.4rem]"
          style={{ display: `${width > 0 ? "flex" : "none"}` }}
        >
          <Close
            className="text-[#fff] font-extrabold"
            style={{ fontSize: "3rem" }}
            onClick={() => [setWidth(0)]}
          />
        </span>
        <div
          className="w-full  items-center justify-start flex-col gap-1 mt-[2rem]"
          style={{ display: `${width > 0 ? "flex" : "none"}` }}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className="text-[25px] font-semibold"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() => setWidth(0)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-[25px] font-semibold"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() => setWidth(0)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className="text-[25px] font-semibold"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() => setWidth(0)}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-[25px] font-semibold"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() => setWidth(0)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-[25px] font-semibold"
                style={({ isActive }) =>
                  isActive ? activeStyle : unActiveStyle
                }
                onClick={() => setWidth(0)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="bg-[#262626]">
            <Typography
              id="transition-modal-title"
              className="flex justify-between items-center"
              variant="h6"
              component="h2"
            >
              <h2 className="text-[25px] text-[#fff] font-semibold ">
                {" "}
                Enquire Now
              </h2>
              <span
                className="bg-[#fff] p-[0.1rem] rounded cursor-pointer"
                onClick={handleClose}
              >
                <Close />
              </span>
            </Typography>
            <span className="flex w-full h-[1px] bg-[#fff] mt-[0.7rem] mb-[0.5rem] "></span>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <span className="flex flex-col justify-start gap-2">
                  <p>Full Name</p>
                  <input
                    type="text"
                    placeholder="Enter your full name  here"
                    className="w-full border-[2px] border-[#CCCCCC] bg-[#CCCCCC] outline-none pl-[5px] h-[2.3rem] rounded text-[#000]"
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
                  <p>Email</p>
                  <input
                    type="text"
                    placeholder="Enter your email here"
                    className="w-full border-[2px] border-[#CCCCCC] bg-[#CCCCCC] outline-none pl-[5px] h-[2.3rem] rounded text-[#000]"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
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
                  <p>Mobile No</p>
                  <input
                    type="text"
                    placeholder="Enter your Mobile No here"
                    className="w-full border-[2px] border-[#CCCCCC] bg-[#CCCCCC] outline-none pl-[5px] h-[2.3rem] rounded text-[#000]"
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
                      Please Enter Valid Phone
                    </p>
                  )}
                </span>
                <span className="flex flex-col justify-start gap-2">
                  <p>Subject</p>
                  <textarea
                    rows={5}
                    placeholder="Enter your Subject here"
                    className="w-full border-[2px] border-[#CCCCCC] bg-[#CCCCCC] outline-none pl-[5px] pt-[5px] h-[2.3rem] rounded text-[#000]"
                    {...register("subject", {
                      required: true,
                      minLength: 5,
                      validate: (value) => {
                        return !!value.trim();
                      },
                    })}
                  />

                  {errors.subject && (
                    <p
                      className="loginFormError"
                      style={{ marginLeft: "10px" }}
                    >
                      Please Enter Valid Subject
                    </p>
                  )}
                </span>
                <button className="goldColor w-2/5 pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded">
                  Send Message
                </button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default MainNavBar;
