import { useState } from "react";
import JobCard from "../components/JobCard";
import Searchbar from "../components/Searchbar";
import { jobs } from "../data/Job";
import logo2 from "../images/logo2.avif";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  const [searchItem, setSearchItem] = useState("");

  const filterJob = jobs.filter((job) =>
    [job.title, job.company, job.location, job.type].some((field) =>
      field.toLowerCase().includes(searchItem.toLowerCase()),
    ),
  );

  return (
    <main className="w-full p-2">
      <section className="hero h-137 lg:h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-6 w-full">
          <div className="text-center text-3xl md:text-4xl lg:text-6xl font-semibold">
            <h1>
              <span className="text-[#143cf4] font-bold">DevHire</span> for
              Developers,
            </h1>
            <h1>Designers, and Marketers</h1>
          </div>
          <div className="text-center md:text-[20px]">
            <p>Jobs is a curated job board of the best jobs for</p>
            <p>developers, designers and marketers in the tech industry.</p>
          </div>
          <Searchbar
            searchItems={searchItem}
            setSearchItems={setSearchItem}
            placeholder="Search for Jobs"
          />
        </div>
      </section>

      <section className="jobCard bg-[#f7f6fb] md:p-6 p-5 lg:mt-20">
        <h1 className="lg:text-3xl p-3 sm:mb-5 lg-mb-10 font-bold">
          Latest <span className="text-[#143cf4]">tech jobs</span>
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {filterJob.slice(0, 4).map((job) => (
            <NavLink
              className={`m-0`}
              to={`/jobdetails/${job.id}`}
              key={job.id}
            >
              <JobCard
                title={job.title}
                company={job.company} 
                type={job.type}
                src={logo2}
                location={job.location}
              />
            </NavLink>
          ))}
        </div>
        <div className="w-full mt-8 flex justify-center">
          <Button text="Explore Jobs" visit="/jobs" className="text-white bg-[#143cf4] hover:bg-[#0428c4]" />
        </div>
      </section>
    </main>
  );
}

export default Home;
