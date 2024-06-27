import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assests/images/Background1.png";
import BlogCard from "../../components/BlogCard/BlogCard";
import { blogData } from "../../blogData";
function Blog() {
  return (
    <div className="flex flex-col w-full items-center">
      <Banner image={bannerImage} Title="Blog" PageName="Blog" />
      <div className="w-11/12 flex flex-col justify-start mt-[3rem] mb-[3rem] gap-3">
        <h2 className="text-[7rem] text font-bold mobile:text-[3.5rem]">
          Blog
        </h2>
        <div className="grid grid-cols-4 gap-4  w-full  p-[2rem] rounded-lg mt-[3rem] mb-[3rem] bg-[#353535] md:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
          {blogData?.map((item) => (
            <BlogCard title={item?.title} para={item?.para?.[0]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
