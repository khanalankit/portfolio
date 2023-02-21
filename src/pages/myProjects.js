import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import "./aboutMe.css";
import { data } from "../data/aboutMe";

const MyProjects = () => {
  return (
    <div className="wrapper">
      <p>SOME OF MY PROJECTS.</p>
      <div className="card_container">
        {data &&
          data.map((data, index) => {
            return (
              <Card
                key={index}
                card_header={data.projectTitle}
                card_body={data.projectBody}
                link={data.projectLink}
              />
            );
          })}
      </div>
    </div>
  );
};

export default MyProjects;
