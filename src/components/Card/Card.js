import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="cards">
      <img
        src={props.picture}
        alt="project img"
        className="pic"
      />
      <div className="card_header">
        <a href={props.link}><h4>{props.card_header}</h4></a>
      </div>
      <div className="card_body">
        {props.card_body
          ? props.card_body
          : "This is a project click below to see more."}
      </div>
      {/* <div className="card_footer">
        <a href={props.link} target="_blank">
          <button type="button">View source</button>
        </a>
      </div> */}
    </div>
  );
}
export default Card;
