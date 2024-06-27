import React, { useEffect, useState } from "react";
import img from "../../assests/images/Rectangle 55.png";
import { useParams } from "react-router-dom";
import { blogData } from "../../blogData";
function SingleBlog() {
  const { singleBlog } = useParams();

  const [blog, setBlog] = useState();
  const getBlogDataHandle = () => {
    const filter = blogData?.find((item) => item?.title === singleBlog);
    console.log(filter);
    setBlog(filter && filter);
  };
  useEffect(() => {
    getBlogDataHandle();
  }, [singleBlog]);
  return (
    <div className="flex flex-col w-full items-center mt-[2rem] mb-[3rem]">
      <div className="w-11/12 ">
        <h2 className="text text-[4rem] leading-[4rem] md:text-[2.5rem] tablet:text-[2.5rem] mobile:text-[1.5rem] mobile:leading-[2rem]">
          {blog?.title}
        </h2>
      </div>
      <div className="w-11/12 mt-[3rem] bg-[#353535] p-[2rem] rounded mobile:p-[1rem]">
        <img
          src={img}
          alt="single blog banner"
          className="w-full h-[20rem] object-cover rounded"
        />
        <div className="w-full mt-[2.5rem] flex flex-col justify-start gap-4 items-center mobile:mt-[1rem] ">
          <h6 className="text-[2rem] text-[#fff] font-semibold text-start w-full mobile:text-[1.5rem]">
            {blog?.title}
          </h6>
          {blog?.para?.length > 0 &&
            blog?.para?.map((item, index) => (
              <p className="leading-7 text-start w-full" key={index}>
                {item}
              </p>
            ))}

          {blog?.list1?.length > 0 && (
            <ul>
              {blog?.list1?.map?.((item) => (
                <li className="list-disc text-[15px] text-[#c8c8c8] font-normal">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className="grid grid-cols-2 gap-4 mt-[2rem] mb-[2rem] mobile:grid-cols-1 mobile:my-[1rem]">
            <img src={img} alt=" single blog" />
            <img src={img} alt=" single blog" />
          </div>
          {blog?.subheading?.length > 0 &&
            blog?.subheading?.map((item) => (
              <h6 className="w-full text-start text-[22px] font-semibold text-[#fff]">
                {item}
              </h6>
            ))}
          {blog?.para1?.length > 0 &&
            blog?.para1?.map((item, index) => (
              <p className="leading-7 text-start w-full" key={index}>
                {item}
              </p>
            ))}
          {blog?.list2?.length > 0 && (
            <ul className="w-full grid grid-cols-4 gap-4 md:grid-cols-3 tablet:grid-cols-3">
              {blog?.list2?.map?.((item) => (
                <li className="list-disc text-[15px] text-[#c8c8c8] font-normal w-full text-start">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {blog?.subheading1?.length > 0 &&
            blog?.subheading1?.map((item) => (
              <h6 className="w-full text-start text-[22px] font-semibold text-[#fff]">
                {item}
              </h6>
            ))}
          {blog?.para2?.length > 0 &&
            blog?.para2?.map((item, index) => (
              <p className="leading-7 text-start w-full" key={index}>
                {item}
              </p>
            ))}

          <span className="w-11/12 h-[1px] bg-[#fff]"></span>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
