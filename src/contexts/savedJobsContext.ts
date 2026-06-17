import { createContext, useContext } from "react";
import type { Job } from "../types/Job";

interface SavedJobsContextType {
  savedJobs: Job[];
  addJobs: (job: Job) => void;
  removeJobs: (id: number) => void;
}

export const savedJobsContext = createContext<SavedJobsContextType>({
  savedJobs: [],
  addJobs: () => {},
  removeJobs: () => {},
});

export const savedJobsProvider = savedJobsContext.Provider

export const useSavedJobs = () => {
    return useContext(savedJobsContext)
}