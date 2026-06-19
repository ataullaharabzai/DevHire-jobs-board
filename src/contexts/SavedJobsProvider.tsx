// import { useState } from "react";
// import type { Job } from "../types/Job";
// import { savedJobsContext } from "./savedJobsContext";

// type Props = {
//   children: React.ReactNode;
// };

// export default function SavedJobsProvider({ children }: Props) {
//   const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
//     const jobs = localStorage.getItem("savedJobs");

//     return jobs ? JSON.parse(jobs) : [];
//   });

//   const addJobs = (job: Job) => {
//     const exists = savedJobs.some((savedJob) => savedJob.id === job.id);

//     if (exists) return;

//     const updatedJobs = [...savedJobs, job];

//     setSavedJobs(updatedJobs);

//     localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
//   };

//   const removeJobs = (id: number) => {
//     const updatedJobs = savedJobs.filter((job) => job.id !== id);

//     setSavedJobs(updatedJobs);

//     localStorage.setItem("savedJobs", JSON.stringify(updatedJobs));
//   };

//   return (
//     <savedJobsContext.Provider
//       value={{
//         savedJobs,
//         addJobs,
//         removeJobs,
//       }}
//     >
//       {children}
//     </savedJobsContext.Provider>
//   );
// }

import type { Job } from "../types/Job";
import { savedJobsContext } from "./savedJobsContext";
import React, { useState } from "react";

type Props = {
    children: React.ReactNode
}

export const SavedJobsProvider = ({ children }: Props) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>(() => {
    const jobs = localStorage.getItem("savedJob");
    return jobs ? JSON.parse(jobs) : [];
  });

  const addJobs = (job: Job) => {
    const exists = savedJobs.some((saveJob) => saveJob.id === job.id);
    if (exists) return;

    const updatedJobs = [...savedJobs, job];
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJob", JSON.stringify(updatedJobs));
  };

  const removeJobs = (id: number) => {
    const updatedJobs = savedJobs.filter((savedJob) => savedJob.id !== id);
    setSavedJobs(updatedJobs);
    localStorage.setItem("savedJob", JSON.stringify(updatedJobs));
  };

  return (
    <savedJobsContext.Provider value={{ savedJobs, addJobs, removeJobs }}>
      {children}
    </savedJobsContext.Provider>
  );
};
