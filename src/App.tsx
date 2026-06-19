import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
