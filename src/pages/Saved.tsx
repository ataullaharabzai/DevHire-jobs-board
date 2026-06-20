import { useSavedJobs } from "../contexts/savedJobsContext";
import type { Job } from "../types/Job";
import logo from "../images/logo2.avif";
import Button from "../components/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Saved() {
  const { savedJobs } = useSavedJobs();
  const { removeJobs } = useSavedJobs();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  if (savedJobs.length > 0) {
    return (
      <div>
        {savedJobs.map((job: Job) => (
          <section>
            <div data-aos="zoom-in" className="mb-5 w-full lg:w-3/4 m-auto md:mt-20 p-5 shadow rounded-3xl shadow-gray-400">
              <div className="flex justify-evenly gap-10 items-center">
                <div className="md:w-30 md:h-30 w-15 h-15">
                  <img
                    src={logo}
                    alt="Company Logo"
                    className="w-full h-full rounded-3xl shadow shadow-gray-400"
                  />
                </div>
                <div>
                  <p className="text-[18px] md:text-2xl text-[#143cf4]">
                    {job?.company}
                  </p>
                  <p className="text-[24px] md:text-4xl font-bold">
                    {job?.title}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[#4e525a] md:text-[18px]">
                    {job?.postedDate}
                  </p>
                  <Button
                    text="APPLY NOW"
                    visit="/"
                    className="text-white bg-[#143cf4] hover:bg-[#0629c6]"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start px-15 items-center gap-15 md:text-[18px] mt-10 text-[#4e525a]">
                <div className="flex gap-2 items-center">
                  <i className="fa-regular fa-clock text-[#143cf4]"></i>
                  <p>{job?.type}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <i className="fa-solid fa-location-dot text-[#143cf4]"></i>
                  <p>{job?.location}</p>
                </div>
                <div>
                  <p>{job?.salary}</p>
                </div>
                <div>
                  <p>{job?.companySize}</p>
                </div>
              </div>

              <hr className="mt-5 text-[#4e525a]" />

              <article className="p-10 mt-10">
                <div>
                  <Button
                    onClick={() => {
                      if (job) {
                        removeJobs(job.id);
                      }
                    }}
                    text={`Remove Job`}
                    visit=""
                    className="bg-[#143cf4] hover:bg-[#0629c6] text-white"
                  />
                </div>
              </article>
            </div>
          </section>
        ))}
      </div>
    );
  } else {
    return (
      <div className="w-full mt-10 m-auto text-[16px] md:text-2xl text-center p-10 text-[#4e525a]">
        <p>No saved job found!</p>
        <p>
          Explore the latest opportunities and save jobs that match your skills
          and career goals.
        </p>
      </div>
    );
  }
}

export default Saved;
