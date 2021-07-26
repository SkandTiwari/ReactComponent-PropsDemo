import React from "react";


function Card(props){
    return(
        <div className = "card">
         <div className = "cards">
             <img src={props.imgsrc}
             alt="altPhoto" className = "photo_class"/>
             <div className = "card_name">
                <h2 className = "title"> <strong>{props.title}</strong> </h2>
                <p className = "description">{props.discrp}</p>
             <a href={props.link}>
                 <button className="button">Watch now</button>
             </a>
          </div>
        </div>
       </div>
    );
}

export default Card;