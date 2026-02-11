import { use } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


export default function PageEvent() {

    const location = useLocation();

    const[event, setEvent] = useState(location.state);
    console.log(location.state);
    return(
    
     <div>
        <h2>{event.name}</h2>
        <p>{event.description1}</p>
        <img src={event.image} alt={event.name} style={{width:'300px' , height:'300px'}}/>

         <h3>{event.name2}</h3>
        <p>{event.description2}</p>

         <h3>{event.name}</h3>
        <p>{event.description}</p>


        <h3>{event.name3}</h3>
        <p>{event.description3}</p>
    </div>
    

);




}