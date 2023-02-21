import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/homePage";
import MyProjects from "../pages/myProjects";
import ContactMe from "../pages/contactMe";
import AboutMe from "../pages/aboutMe"
import Footer from "../components/Footer/Footer";
import MyAffiliation from "../pages/myAffiliation";

function Routing() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/myAffiliation" element={<MyAffiliation/>} />
        <Route path="/myProjects" element={<MyProjects/>} />
        <Route path="/contactMe" element={<ContactMe/>} />
        <Route path="/aboutMe" element={<AboutMe/>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default Routing;
