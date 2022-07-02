import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Homepage";
import MyProjects from "../pages/myProjects";
import ContactMe from "../pages/contactMe";
import Footer from "../components/Footer/Footer";

function Routing() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/myProjects" element={<MyProjects />} />
        <Route path="/contactMe" element={<ContactMe />} />
        {/* <Route path="/About_Me" element={<About_me />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
export default Routing;
