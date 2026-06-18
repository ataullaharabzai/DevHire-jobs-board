import JobCard from "../components/JobCard";
import Searchbar from "../components/Searchbar";
import { jobs } from "../data/Job";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main className="w-full p-2">
      <section className="hero h-screen flex justify-center items-center">
        <div className="flex justify-center items-center flex-col gap-5 w-full">
          <div className="text-center md:text-6xl font-semibold">
            <h1>
              <span className="text-[#143]">DevHire</span> for Developers,
            </h1>
            <h1>Designers, and Marketers</h1>
          </div>
          <div className="text-center md:text-[20px]">
            <p>Jobs is a curated job board of the best jobs for</p>
            <p>developers, designers and marketers in the tech industry.</p>
          </div>
          <Searchbar placeholder="Search for Jobs" />
        </div>
      </section>

      <section className="jobCard w-full bg-[#f7f6fb] md:p-6 p-5 mt-20">
        <h1 className="text-3xl p-3 mb-10 font-bold">
          Latest <span className="text-[#143]">tech jobs</span>
        </h1>
        <NavLink
          to="/jobdetails"
          className="w-full max-w-160 flex justify-center items-stretch flex-col gap-5"
        >
          {jobs.map((job) => (
            <div key={job.id}>
              <JobCard
                title={job.title}
                company={job.company}
                type={job.type}
                src={logo}
                location={job.location}
              />
            </div>
          ))}
        </NavLink>
      </section>
    </main>
  );
}

export default Home;
