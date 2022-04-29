import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import "./My_projects.css";
import axios from "axios";

const My_projects = () => {
  const [data, setData] = useState(null);

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:5003/api/card");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

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

export default My_projects;
