import React from "react";
import img from "../../assests/images/Imaage Placeholder.png";
function BlogSliderCard() {
  return (
    <div className="relative flex items-center justify-center blog_slider_card  rounded w-fit">
      <img src={img} alt="blog title" className="w-[20rem] " />
      <div className="absolute p-[1rem] bottom-[1rem] text-transparent">
        <button className="w-[8rem] h-[8rem] bg-[#0D0D0D] text-[#fff] rounded-full button_hide">
          Read More
        </button>
        <h6 className="text-[25px] text-[#fff]  Shadow text-center">
          Blog title
        </h6>
      </div>
    </div>
  );
}

export default BlogSliderCard;
