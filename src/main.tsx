import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import JobDetails from "./pages/JobDetails.tsx";
import Jobs from "./pages/Jobs.tsx";
import Profile from "./pages/Profile.tsx";
import Saved from "./pages/Saved.tsx";
import About from "./pages/About.tsx";
import { SavedJobsProvider } from "./contexts/SavedJobsProvider.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "jobdetails/:id", element: <JobDetails /> },
      { path: "jobs", element: <Jobs /> },
      { path: "profile", element: <Profile /> },
      { path: "saved", element: <Saved /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SavedJobsProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </SavedJobsProvider>
  </StrictMode>,
);
