import React from "react";
import img from "../../assests/images/unsplash_oQl0eVYd_n8.png";
import { useNavigate } from "react-router-dom";
function BlogCard({ title, para }) {
  const history = useNavigate();
  return (
    <div className="bg-[#fff] rounded-lg p-[1rem] flex flex-col justify-start items-start gap-2">
      <img src={img} alt="blog" className="object-contain" />
      <h2 className="linear_text text-[20px] font-semibold">{title}</h2>
      <p className="text-[16px] font-normal text-start leading-6 max-h-[12rem]  overflow-hidden">
        {para}
      </p>
      <button
        onClick={() => history(`/blog/${title}`)}
        className="goldColor pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded-lg text-[#fff] text-[16px] font-semibold"
      >
        Read More
      </button>
    </div>
  );
}

export default BlogCard;
