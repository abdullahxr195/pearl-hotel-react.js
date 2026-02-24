import { use } from "react";
import { useLocation } from "react-router-dom";
import "../css component/page1.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PageEvent() {

    const location = useLocation();

    const[event, setEvent] = useState(location.state);
    console.log(location.state);
    return(
      <Card sx={{ maxWidth: 345, margin: "auto", marginTop: "50px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={event.image} alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" sx={{ color: "red" }}>
              
            </Typography> <br/>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {event.description}
                {event.description1}
                {event.description2}
                {event.description3}
                

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    

);




}