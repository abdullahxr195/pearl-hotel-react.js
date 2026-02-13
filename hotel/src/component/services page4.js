import { use } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../css component/service-page4.css';

export default function Services4() {
    
    
    return(
    
     <div>

        <div className="first-services4">
            
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/19/60/87/196087359da39d9f80ec5669b1e979b4.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Golf
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           ⛳ Enjoy focus and precision on stunning golf courses! Learn new skills, relax outdoors, and live a high-end sports experience.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>





      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/1200x/09/81/00/0981002e8812253ced099c9e8e09ac21.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            scuba diving
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            🤿 Explore the depths of the sea and the splendor of diving! Live an adventurous experience, discover colorful marine life, and enjoy excitement and safety with professional diving experts. 🌊✨
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    




      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/9d/cc/2a/9dcc2a836361d61b4faba3886a8a6925.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            tennis
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          🎾 Challenge yourself and improve your skills on the tennis courts! Enjoy fitness, speed, focus, and enjoy the spirit of competition and excitement with every hit. 🏆✨
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>



        <div className="second-services4">
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/ac/c6/dd/acc6ddc453560acb197465d773018bc9.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            polo
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           🐎⚡ Live excitement and luxury with polo! Skill, speed, and focus on the horse's back in a game that combines strength, elegance, and a competitive spirit. 🏑✨
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>




      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/b4/71/a8/b471a82db10ff5d87037f392b7942ad1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Jet racing
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            🌊🏍️ Enjoy the excitement and speed on the water with jet skis! An experience full of fun and excitement, combining action, adventure, and refreshment in the heart of nature. ☀️✨
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>





      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/52/d6/fb/52d6fb2c5c4070d01a8358cad3a93a57.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            skydiving
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           🪂✨ Free yourself in the sky and enjoy unforgettable excitement with skydiving! An experience full of freedom, adventure, and excitement over stunning views. 🌤️🌟
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>



        </div>


)

}