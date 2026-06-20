import JobCard from "../components/JobCard";
import jobHero from "../images/job_hero.avif";
import { jobs } from "../data/Job";
import { NavLink } from "react-router-dom";
import logo from "../images/logo2.avif";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

function Jobs() {
  const [searchItem, setSearchItem] = useState("");

  const filteredJobs = jobs.filter((job) =>
    [job.title, job.company, job.type, job.location].some((field) =>
      field.toLowerCase().includes(searchItem.toLowerCase()),
    ),
  );

  return (
    <section>
      <div className="p-5 w-full mt-10">
        <img
          src={jobHero}
          alt="Hero Image"
          className="m-auto bg-blend-multiply"
        />
      </div>
      <div className="bg-[#f7f6fb] p-5">
        <div className="flex">
          <h1 className="lg:text-3xl p-3 sm:mb-5 lg-mb-10 font-bold md:mr-25">
            Latest <span className="text-[#143cf4]">tech jobs</span>
          </h1>
          <Searchbar
            placeholder="Search Jobs"
            searchItems={searchItem}
            setSearchItems={setSearchItem}
          />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <NavLink to={`/jobdetails/${job.id}`} key={job.id}>
              <JobCard
                title={job.title}
                location={job.location}
                company={job.company}
                type={job.type}
                src={logo}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
