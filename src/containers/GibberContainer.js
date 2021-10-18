import React, {useState, useEffect} from "react";
import GibberSelector from "../components/GibberSelector";
import GibberItem from "../components/GibberItem";
import MapBox from "../components/MapBox";

const GibberContainer =()=>{

    const [gibbers, setGibbers] = useState([])
    const [gibberSelected, setGibberSelected] = useState(null)
    const [gibberList, setGibberList] = useState([])

    const fetchAllGibbers=()=>{
        fetch("https://fakerapi.it/api/v1/custom?_quantity=10&name=name&date=dateTime&address=streetName&phone=phone&content=text&website=website&image=image&id=counter&latitude=latitude&longitude=longitude")
        .then(response => response.json())
        .then(data => setGibbers(data.data))
    }

    useEffect(()=>{
        return(
            fetchAllGibbers()
        )
    },[])

    const onGibberSelected = function(gibber){
        setGibberSelected(gibber)
    };

    const onGibberTrue = function(gibbers){
        const trueGibber = gibbers.filter((gibbers)=>{
            return gibbers.status === true;
        })
        const mapGibber = trueGibber.map((gibbers)=>{
            return gibbers.name
        })
        setGibberList(mapGibber)
    }

    const displayFavourites = function(){
        if (gibberList.length >1){
            return <p>Favourites are: {gibberList.join(", ")} </p>
        }else if (gibberList.length === 1){
            return <p>Favourite is: {gibberList.toString()} </p>
        }else if (gibberList < 1){
            return <p>There are no favourites.</p>
        }
    }

    return(
        <div>
        {displayFavourites()}
        <GibberSelector gibbers={gibbers} onGibberSelected={onGibberSelected}/>
        {gibberSelected ? <GibberItem gibberTrue={onGibberTrue} gibber={gibberSelected} gibbers={gibbers}/> :null}
        <MapBox gibbers={gibbers} gibber={gibberSelected}/> 
        </div>
    )
}

export default GibberContainer