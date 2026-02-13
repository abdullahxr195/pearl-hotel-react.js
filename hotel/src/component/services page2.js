import { use } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import '../css component/service-page2.css';


export default function Services2() {
    
    
    return(
    
     <div>

        <div className="first-services2">
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/e1/e7/d9/e1e7d9ef5ee602ce0be03b0baf51b722.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Turkish bath
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The Turkish bath is a traditional place to relax and cleanse the body using steam and warm water with massage and skin peeling sessions.
            It is known for its calm atmosphere that helps stimulate blood circulation and a feeling of comfort and relaxation.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/59/42/b3/5942b3b199be7750fbc1aa7e70c0da9d.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Moroccan bath
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The Moroccan bath is a traditional body care ritual based on steam, local soap, and exfoliating the skin with a Moroccan glove.
            It helps to deeply cleanse the skin and give the body a feeling of freshness and relaxation.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>



  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/1200x/26/b9/87/26b98714a24dd60e17515137c41c88a0.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            jungle spa
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          ✨ Escape the stresses of life and enjoy a unique relaxing experience amidst the enchanting nature atmosphere at Jungle Spa.
          💆‍♀️ We offer you professional massage sessions, steam baths, and comprehensive care treatments that give you comfort and rejuvenation.
          🌸 Pamper yourself… because your comfort starts here.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>



        <div className="second-services2">

  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/38/d3/ec/38d3ec4c43bf0803f8a6f38e4d972be9.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stone bath
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ✨ Enjoy a unique relaxation experience with Stone Bath, which helps relieve stress and stimulate blood circulation thanks to the heat of the natural stones.
            🌿 Pamper your body with a session that gives you deep comfort and long-lasting freshness.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>






  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/1200x/c9/75/0a/c9750a92d6310243cf922d477d17cd12.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Hot stone massage
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           🔥 Enjoy a Hot Stone Massage session that helps relax deep muscles and relieve tension and stress.
           💆‍♀️ A warm experience that gives you deep relaxation and a feeling of comfort and refreshment.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>





  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/52/d2/88/52d2883d34fe4473aa097620c65af28e.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Massage with aromatic olives
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            An olive oil essential massage experience that helps moisturize and nourish the skin while giving the body deep relaxation.
            Combines the natural benefits of oil with soothing fragrances to rejuvenate and feel comfortable
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>


        </div>


)

}