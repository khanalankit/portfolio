import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage";
import My_projects from "../pages/My_projects";
import Contact_me from "../pages/Contact_me";
import About_me from "../pages/About_me";
import Footer from "../components/Footer/Footer";

function Routing() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/My_Projects" element={<My_projects />} />
        <Route path="/Contact_Me" element={<Contact_me />} />
        {/* <Route path="/About_Me" element={<About_me />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default Routing;
