import React from "react";
import "./myAffiliation.css";
import myAffiliations from "../assets/myAffiliations.png";

const MyAffiliation = () => {
  return (
    <div className="affliationsWrapper">
      <img className="affiliations" src={myAffiliations} alt="My Affiliatons images" />
    </div>
  );
};

export default MyAffiliation;
