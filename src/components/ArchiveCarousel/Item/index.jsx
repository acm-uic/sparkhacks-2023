import React, { useState, useEffect } from "react";
import "./item.css";

export const Item = (props) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 640px)").matches
  )

  useEffect( ()=> {
    window.matchMedia("(min-width: 640px)").addEventListener('change', e=> setMatches(e.matches));
  })

    return (
      <div  class="carousel-item" style={{width: "100%"}}>
        {matches && (<h1 class="title" >{props.title}</h1>)}
        {!matches && (<h4 class="title-mobile" >{props.title}</h4>)}
        {matches && (<p class="description" >{props.description}</p>)}
        {!matches && (<p class="description-mobile" >{props.description}</p>)}
        {matches && (<p class="link" >{props.link}</p>)}
        {!matches && (<p class="link-mobile" >{props.link}</p>)}
        <img src={require('../../../assets/images/archivedImages/' + props.name)} alt={props.name}/>
      </div>
  
    );
  }