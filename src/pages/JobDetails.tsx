import { useParams } from "react-router-dom";
import { jobs } from "../data/Job";
import logo from "../images/logo2.avif";
import Button from "../components/Button";
import { useSavedJobs } from "../contexts/savedJobsContext";

function JobDetails() {
  const { id } = useParams();
  const { addJobs } = useSavedJobs();

  const selectedJob = jobs.find((job) => job.id === Number(id));

  return (
    <section>
      <div className="w-full lg:w-3/4 m-auto md:mt-20 p-5 shadow rounded-3xl shadow-gray-400">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10 items-center">
          <div className="w-24 h-24 md:w-32 md:h-32">
            <img
              src={logo}
              alt="Company Logo"
              className="w-full h-full rounded-3xl shadow shadow-gray-400 object-cover"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-[18px] md:text-2xl text-[#143cf4]">
              {selectedJob?.company}
            </p>
            <p className="text-[24px] md:text-4xl font-bold">
              {selectedJob?.title}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[#4e525a] md:text-[18px]">
              {selectedJob?.postedDate}
            </p>
            <Button
              text="APPLY NOW"
              visit="/"
              className="text-white bg-[#143cf4] hover:bg-[#0629c6]"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-start md:justify-between px-4 items-center gap-4 md:gap-6 md:text-[18px] mt-6 text-[#4e525a] flex-wrap">
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-clock text-[#143cf4]"></i>
            <p>{selectedJob?.type}</p>
          </div>
          <div className="flex gap-2 items-center">
            <i className="fa-solid fa-location-dot text-[#143cf4]"></i>
            <p>{selectedJob?.location}</p>
          </div>
          <div>
            <p>{selectedJob?.salary}</p>
          </div>
          <div>
            <p>{selectedJob?.companySize}</p>
          </div>
        </div>

        <hr className="mt-5 text-[#4e525a]" />

        <article className="p-10 mt-10">
          <p className="text-2xl md:text-3xl font-semibold mb-5">
            Job description
          </p>
          <div className="text-[#4e525a] flex flex-col items-start justify-center gap-8 p-3 mb-10 md:text-[17px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              doloribus ipsum eveniet dicta voluptatem officia reprehenderit
              unde, numquam at praesentium totam corrupti in voluptatibus
              mollitia tenetur placeat repellat tempore tempora atque nam maxime
              autem. Ad officiis, ullam animi eaque sint modi, eligendi alias
              nostrum voluptatum hic, earum doloribus in qui?
            </p>
            <ul className="list-disc ml-10">
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
              incidunt commodi repellat distinctio ipsum iste numquam molestias,
              aliquam quia beatae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iusto, quos.
            </p>
          </div>

          <Button
            onClick={() => {
              if (selectedJob) {
                addJobs(selectedJob);
              }
            }}
            text={`Save job`}
            visit=""
            className="bg-[#143cf4] text-white hover:bg-[#0629c6]"
          />
        </article>
      </div>
    </section>
  );
}

export default JobDetails;
