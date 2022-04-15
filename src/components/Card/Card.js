import React from 'react'
import './Card.css'
import antique from '../../assets/antique.jpg'
import hardware from '../../assets/hardware.jpg'
import screen from '../../assets/screen.jpg'

function Card(props){
    var pictures={
        0:antique,
        1:hardware,
        2:screen
    }
    return(
            <div className="cards">
                <img src={pictures[Math.floor(Math.random()*3)]} alt="some random image" className='pic'/>
                <div className="card_header"><h4>{props.card_header}</h4></div>
                <div className="card_body">{props.card_body?props.card_body:"This is a project click below to see more."}</div>
                <div className="card_footer">
                    <a href={props.link} target="_blank"><button type="button">View source</button></a>
                </div>
            </div>
    )
}
export default Card;