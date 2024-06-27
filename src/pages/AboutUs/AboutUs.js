import React from "react";
import Banner from "../../components/Banner/Banner";
import director from "../../assests/images/Imaage Placeholder.png";
import Background from "../../assests/images/Background.png";
import Background1 from "../../assests/images/img.png";
import img from "../../assests/images/Group 1000001803.png";
import img1 from "../../assests/images/Group 1000001804.png";
import img2 from "../../assests/images/Group 1000001805.png";

function AboutUs() {
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <Banner Title="About Us" PageName="About" />
        <div className="w-11/12 flex flex-col justify-start mt-[30px] mb-[30px] gap-3">
          <h2 className="text-[32px] text-[#C3A70B] font-bold">
            Unique Multicon India Pvt. Ltd.
          </h2>
          <p className="leading-6 font-medium text-[16px] text-[#C8C8C8]">
            Since its establishment in 2010, "Unique Constructions" has
            established a reputation as a leader in Real Estate, Infrastructure,
            and Development. Our hallmark is innovative design, superior
            construction quality, and on-time project completion. Customer
            satisfaction is our top priority, and we strive to exceed
            expectations by tailoring our planning, design, and execution to
            meet their specific needs. Our commitment is to deliver unparalleled
            quality at competitive prices, ensuring our customers receive
            nothing but the best.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-[20px] mb-[20px] md:grid-cols-1 md:gap-[2.5rem] tablet-[20px] tablet:grid-cols-1 tablet:gap-[2.5rem] mobile:grid-cols-1 mobile:gap-[2.5rem]">
            <div className="flex gap-4 mobile:flex-col">
              <img src={director} alt="director" />
              <span className="flex flex-col gap-2 justify-start">
                <h3 className="text-[#C3A70B] text-[22px] font-medium">
                  The Director
                </h3>
                <p className="font-medium text-[16px]">
                  Mr. Benjamin Michael Manuel, who serves as the Director of
                  Unique Constructions India Pvt. Ltd., holds a significant 90%
                  stake in the company, showcasing his deep involvement and
                  commitment to its operations. Beyond his role in the
                  construction industry, Mr. Manuel also contributes to the
                  educational sector as the President of St. Michael's
                  Educational Society (Trust). Under his guidance, the society
                  has successfully managed St. Michael's Pre School since its
                  inception in 2006, reflecting his dedication to nurturing
                  future generations through quality education. This dual
                  responsibility highlights Mr. Manuel's multifaceted leadership
                  and his dedication to both business and community development
                  initiatives.
                </p>
              </span>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={Background}
                alt="banner"
                className="md:w-full tablet:w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-[20px] mb-[20px] md:grid-cols-1 tablet:grid-cols-1 mobile:grid-cols-1">
            <div className="grid grid-cols-3 gap-2">
              <span className="flex flex-col items-center justify-center gap-1">
                <strong className="text-[50px] text-[#474747]">50+</strong>
                <p className="text-[#474747] text-[22px]">Finished Project</p>
              </span>{" "}
              <span className="flex flex-col items-center justify-center gap-2">
                <strong className="text-[50px] text-[#474747]">210+</strong>
                <p className="text-[#474747] text-[22px]">Clients</p>
              </span>
              <span className="flex flex-col items-center justify-center gap-2">
                <strong className="text-[50px] text-[#474747]">100+</strong>
                <p className="text-[#474747] text-[22px]">Cities</p>
              </span>
              <span className="flex flex-col items-center justify-center gap-2">
                <strong className="text-[50px] text-[#474747]">16</strong>
                <p className="text-[#474747] text-[22px]">Partner</p>
              </span>
            </div>
            <div className="flex gap-4 mobile:flex-col">
              <span className="flex flex-col gap-2 justify-start">
                <h3 className="text-[#C3A70B] text-[22px] font-medium">
                  The Director
                </h3>
                <p className="font-medium text-[16px]">
                  Mrs. Judy Benjamin Manuel plays a significant role as a
                  shareholder, holding a 10% stake in Unique Multicon India Pvt.
                  Ltd. Her involvement underscores the company's commitment to
                  diverse perspectives and collaborative decision-making. Beyond
                  her ownership interest, Mrs. Manuel likely contributes
                  valuable insights and expertise to the company's strategic
                  direction and operations. This level of engagement exemplifies
                  her dedication to the success and growth of Unique Multicon
                  India Pvt. Ltd., reinforcing its reputation as an inclusive
                  and forward-thinking organization.
                </p>
              </span>
              <img src={director} alt="director" />
            </div>
          </div>
        </div>
        <div
          className="mt-[20px] mb-[20px] w-full  flex flex-col"
          style={{ backgroundImage: `url('${Background1})` }}
        >
          <div className="w-full flex justify-center">
            <div className=" w-11/12 flex flex-col gap-[4rem] p-[2rem] bg-[#282828] rounded">
              <div className="grid grid-cols-2 gap-4 tablet:gap-2 tablet:grid-cols-3 mobile:flex mobile:flex-col-reverse mobile:justify-start">
                <div className="flex flex-col justify-start gap-1 font-semibold tablet:col-span-2">
                  <h3 className="text-[20px] text-[#C3A70B]">VISION</h3>
                  <p className="text-[16px] font-normal">
                    At Unique, we prioritize customer service above all else,
                    placing a strong emphasis on integrity, quality, and
                    reliability. Our core mission revolves around fulfilling the
                    dreams of our satisfied customers, recognizing that superior
                    quality stems from the efficient and creative utilization of
                    top-tier resources.
                  </p>
                </div>
                <div className="flex justify-end items-center mobile:justify-start">
                  <img
                    src={img}
                    alt="logo"
                    className="w-[8rem] h-[8rem] object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 tablet:gap-2 tablet:grid-cols-3 mobile:flex mobile:flex-col-reverse mobile:justify-start">
                <div className="flex flex-col justify-start gap-1 font-semibold tablet:col-span-2">
                  <h3 className="text-[20px] text-[#C3A70B]">MISSION</h3>
                  <p className="text-[16px] font-normal">
                    Our goal is to establish ourselves as a thriving real estate
                    enterprise, dedicated to enhancing the lives of our
                    customers. We aim to achieve this by offering luxurious and
                    spacious building structures situated in convenient
                    locations, complete with world-class amenities.
                  </p>
                </div>
                <div className="flex justify-end items-center mobile:justify-start">
                  <img
                    src={img1}
                    alt="logo"
                    className="w-[8rem] h-[8rem] object-contain"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 tablet:gap-2 tablet:grid-cols-3 mobile:flex mobile:flex-col-reverse mobile:justify-start">
                <div className="flex tablet:col-span-2 flex-col justify-start gap-1 font-semibold">
                  <h3 className="text-[20px] text-[#C3A70B]">VALUES</h3>
                  <p className="text-[16px] font-normal">
                    At Unique Multicon India Pvt. Ltd, our operations are guided
                    by core principles of transparency, accountability,
                    integrity, innovation, and the highest standards of quality.
                    We are dedicated to comprehensively understanding and
                    fulfilling the needs of our customers, ensuring their
                    satisfaction remains paramount.
                  </p>
                </div>
                <div className="flex justify-end items-center mobile:justify-start">
                  <img
                    src={img2}
                    alt="logo"
                    className="w-[8rem] h-[8rem] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#C0C0C0] w-6/12 h-[1px] mt-[20px] mb-[20px]"></div>
      </div>
    </>
  );
}

export default AboutUs;
