import'../css component/page2.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState } from "react";



export default function Page2() {

const {servicesPage, setServicesPage} = useState(0);

const servicesing =[
{id:1 , name:'event1' },
// {id:2 , name2:'event2' , description2:'this is the second party' },
// {id:3 , name3:'event3' ,description3:'this is the second party' },


]




    

        return (
            <div id='page2'>
                    <div className='div1'>

 <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/d5/1c/4b/d51c4bc2fb4afe073de0324a671becc6.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            restaurant
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            🔥 Are you looking for an irresistible taste?
Enjoy with us a unique experience of the most delicious and tasty foods prepared with the finest ingredients and highest quality standards.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        


<div>
            <ul>

                {
                    
                    servicesing.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            <Link to='/services-page' state={item}><button id='button1'>View Event</button></Link>

                        </div>


                    </li>)

                }

            </ul>

          </div>



        
      </CardActions>
    </Card>









 <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/1200x/5d/8c/9a/5d8c9a5411c2fc1cb13e3cbdd4f14ac5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            massage
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           ✨ Do you feel tired or stressed from the stresses of daily life?
           We offer you a professional massage experience that helps you relax and regain your energy and vitality
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        


<div>
            <ul>

                {
                    
                    servicesing.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            <Link to='/services-page2' state={item}><button id='button1'>View Event</button></Link>

                        </div>


                    </li>)

                }

            </ul>

          </div>



        
      </CardActions>
    </Card>



              </div>




    <div className='div2'>

 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/74/cb/35/74cb35caad63c32e1d5b1d36640646c6.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            beauty salon
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            💇‍♀️✨ Renew your look with modern haircuts and attractive dyes! Our professional team will give you healthy, shiny hair, ready for every occasion. Book now and enjoy a beauty that suits you!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        


<div>
            <ul>

                {
                    
                    servicesing.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            <Link to='/services-page3' state={item}><button id='button1'>View Event</button></Link>

                        </div>


                    </li>)

                }

            </ul>

          </div>



        
      </CardActions>
    </Card>






 <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/736x/1e/00/87/1e0087c069f72504718eb9b654492f4e.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           sport
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           Get ready to change your life and build a healthy and active body!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        


<div>
            <ul>

                {
                    
                    servicesing.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            <Link to='/services-page4' state={item}><button id='button1'>View Event</button></Link>

                        </div>


                    </li>)

                }

            </ul>

          </div>



        
      </CardActions>
    </Card>

  </div>






            </div>
        );



}