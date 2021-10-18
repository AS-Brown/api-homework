import React from "react";
const GibberSelector = ({gibbers, onGibberSelected})=>{

    const handleChange = function(event){
        onGibberSelected(gibbers[event.target.value])
    }

    const gibberOptions = gibbers.map((gibber, index) => {
        return <option value={index} key={index}>{gibber.name}</option>
    })

    return(
        <div>
            <select defaultValue="" onChange={handleChange}>
            <option value="" defaultValue>Choose a gibber</option>
            {gibberOptions}
            </select>
        </div>
        

    )
}

export default GibberSelector