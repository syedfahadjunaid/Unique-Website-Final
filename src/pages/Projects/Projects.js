import React from "react";
import Banner from "../../components/Banner/Banner";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
function Projects() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full items-center relative">
      <Banner Title="Project" PageName="Project" />
      <div className="w-11/12 bg-[#282828] p-[3rem] mt-[30px] mb-[30px] mobile:p-[1.5rem]">
        <div class="grid grid-cols-3 gap-4 items-center md:grid-cols-2 tablet:grid-cols-2 mobile:grid-cols-1">
          <ProjectCard
            title="UNIQUE SOLITAIRE"
            subheading="Smart Spacious Spaces for Everyone!"
            para="Unique Solitaire is a modern project in Wadegaon, Pune, offering diverse property options and amenities to suit various budgets and cater to working professionals' needs. "
          />
          <ProjectCard
            title="BLUE BELLS PARK"
            subheading="Premium Bungalows & Plots!"
            para="For prospective homebuyers in Pune's Maval area, Blue Bells Park by Unique Constructions Pune offers a variety of options across different budgets. Scheduled for completion by December 2024, it presents an appealing opportunity."
          />
          <ProjectCard
            title="PALAZZO GREENS"
            subheading="The Best of All Worlds in One!"
            para="Unique Palazzo Greens in Talegaon Dabhade, Pune offers ready-to-move apartments across various budgets, combining comfort and style. With families already moving in, it's an ideal choice for new residents."
          />
        </div>
      </div>

      <div className="gap-[2rem] h-[25rem] mt-[30px] mb-[30px] w-4/6 goldCard p-[3rem] rounded flex flex-col items-center justfiy-center md:w-11/12 tablet:w-11/12 mobile:w-11/12 mobile:p-[1.5rem]">
        <h2 className="text-[2.2rem] text-[#fff] w-[35rem] text-center leading-9 font-semibold mobile:text-[1.2rem] mobile:leading-7 mobile:w-full">
          Dedicated to Ensuring Customer Satisfaction!
        </h2>
        <p className="w-[40rem] text-center tablet:w-full md:full mobile:w-full">
          With our deep understanding of the local market, we deliver top-notch
          and ethical services to our clients, ensuring their needs are met
          comprehensively and professionally.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#C3A70B] text-[#fff] pt-[0.5rem] pb-[0.5rem] pl-[0.8rem] pr-[0.8rem] rounded "
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Projects;
