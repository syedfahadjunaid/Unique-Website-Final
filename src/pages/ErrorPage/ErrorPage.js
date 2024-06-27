import React from "react";
import img from "../../assests/images/ddd 1.png";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const history = useNavigate();
  return (
    <div className="w-full justify-center items-center flex flex-col mt-[3rem] mb-[3rem] gap-2">
      <h2 className="text-[#fff] text-[55px] font-semibold ">Oops! </h2>
      <img src={img} alt="Oops" className="h-[20rem] object-contain" />
      <p className="text-[16px] font-normal">
        Looks like you stumbled upon our top-secret 404 page.
      </p>
      5
      <button
        onClick={() => history("/")}
        className="goldColor text-[#fff] pl-[0.8rem] pr-[0.8rem] pt-[0.5rem] pb-[0.5rem] rounded"
      >
        HomePage
      </button>
    </div>
  );
}

export default ErrorPage;
