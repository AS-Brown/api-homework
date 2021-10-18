import React from "react";
import "./GibberItem.css"

const GibberItem = ({gibber, gibberTrue, gibbers})=>{
    
    const handleClickTrue = function(){
       gibber.status = true
       gibberTrue(gibbers)
    }

    const handleClickFalse = function(){
       gibber.status = false
       gibberTrue(gibbers)
    }

    const rotateButton = function(){
        if (gibber.status !== true){
            return <button onClick={handleClickTrue}>Add to favourites</button>
        }else if(gibber.status === true){
            return <button onClick={handleClickFalse}>Remove from favourites</button>
        }
    }

    return(
        <div>
            <h1><a href={gibber.website}>{gibber.name}</a></h1>
            <p>Location: {gibber.address}</p>
            <p>Date of Birth: {gibber.date.date}</p>
            <p>Phone number: {gibber.phone}</p>
            <img id="images" src={gibber.image} alt=""/>
            <p id="alice">{gibber.content}</p>
            {rotateButton()}
        </div>
    )
}

export default GibberItem