import '../css component/page1.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { imageListClasses } from '@mui/material/ImageList';



export default function Page1() {

const {count , setCount} = useState(0);


const party =[
{id:1 , name:'event1' , description:'✨ Get ready for the strongest parties of the season! ✨Al Hadaba fans have an exceptional night full of enthusiasm and singing with the great star Amr Diab 🎤Enjoy the most beautiful songs, the latest rhythms, and an unforgettable atmosphere with one of the biggest stars in the Arab world. A night full of energy, music, and legendary moments awaits you!📅 Date: (20/3/2026) ⏰ Time: (10:00 pm)' , image:'https://i.pinimg.com/736x/4d/cd/4b/4dcd4b7d2386e3b5932ce0ae73aacbf7.jpg'},
// {id:2 , name2:'event2' , description2:'this is the second party' },
// {id:3 , name3:'event3' ,description3:'this is the second party' },


]


const party2 =[
// {id:1 , name:'event1' , description1:'this is the second party'},
{id:1 , name1:'event1' , description1:'🔥 An unforgettable adventure in the heart of the desert! 🔥Embark on an exciting and thrilling desert cycling experience, with golden sands and exciting trails waiting for you. Experience the pleasure of driving amidst the sand dunes and enjoy the enchanting desert nature.Whether you are an adventure lover or looking for a new adrenaline-filled experience, our trip gives you the opportunity to discover the desert in a different and fun way, with modern equipment and professional guidance to ensure a safe and fun experience.🏜 Enjoy the stunning views🏍 Live an action-packed driving experience👨‍👩‍👧 Suitable for friends, families and adventure lovers' ,image:'https://i.pinimg.com/1200x/3e/1e/5a/3e1e5a184d6d83463d1794885e99ef95.jpg' },
{id:2 , name2:'event2' , description2:'Whether you are a beginner or a professional, the horse riding experience will give you the opportunity to enjoy the stunning scenery, and feel free while setting off confidently between the open paths. Carefully trained horses are provided with specialist supervision to ensure a safe and enjoyable experience for everyone.✨ An experience that combines fun and relaxation🐎 Trained horses suitable for all levels🌿 Charming natural atmosphere, ideal for photography👨‍👩‍👧 Suitable for individuals, families and adventure lovers' ,image:'https://i.pinimg.com/736x/63/56/20/635620b1bd58aa436708973653d5b381.jpg' },
{id:3 , name4:'event3' , description3:'this is the fourth party' ,image:'https://i.pinimg.com/736x/e8/9e/00/e89e00add913e579a735f0b19c163581.jpg' },
// {id:4 , name4:'event4' ,description4:'this is the fourth party' },
]

const party3 =[
{id:1 , name1:'event1' , description1:'Get ready for a double dose of excitement and suspense with John Wick: Chapter 2, as legendary assassin John Wick returns to face his most dangerous challenges in a world filled with mystery and revenge.After trying to leave the world of crime, John Wick finds himself forced to return to carry out a dangerous mission that leads him to the heart of the bloody conflicts between the most dangerous secret organizations in the world. With amazing action scenes, professional battles, and an action-packed story, the film takes you on a journey that knows no stopping' ,image:'https://i.pinimg.com/1200x/f3/f4/c6/f3f4c64663457d886bd7508b6950c433.jpg' },
{id:2 , name2:'event2' , description2:'4🔥 The future is coming… and it cant be stopped! 🔥Get ready to enter a world full of action and science fiction with Terminator, as a fateful battle between man and machine begins in a story that has become one of the greatest action films in history.The film revolves around an advanced killer machine sent from the future to carry out a dangerous mission that could completely change the fate of humanity. Between exciting chases and epic battles, the heroes find themselves in a race against time to save the future before it is too late.🤖 An exciting science fiction story💥 Legendary action scenes and exciting chases🎬 Iconic performance by star Arnold Schwarzenegger⏳ An epic struggle between man and technologyGet ready for the film that made cinema history… where the war for the survival of humanity begins.' ,image:'https://i.pinimg.com/736x/40/c7/24/40c7241c441b330ba45c99b5bf5babd3.jpg' },
{id:3 , name3:'event3' , description3:'🔥 A journey through mystery and enchanting nature! 🔥Beyond the Drumlins takes you on a unique cinematic experience that combines mystery, drama, and the beauty of tranquil nature that hides unexpected secrets. The films events take place in a stunning natural environment, where deep human stories and internal conflicts are revealed that take the viewer on a journey full of emotions and suspense.Through a distinctive visual narrative and escalating events, the film presents a story full of challenges and discoveries that change the course of the characters and reveal unexpected facts.🌄 Enchanting landscapes and mysterious atmosphere🎬 A deep and touching dramatic story✨ A quiet cinematic experience that carries many meanings🔍 Events full of secrets and discoveryGet ready to embark on a different journey… where nature tells unforgettable stories, and every step leads to a new truth.Beyond the Drumlins - When the road becomes a journey of self-discovery and hidden secrets.' ,image:'https://i.pinimg.com/736x/76/e2/25/76e225508e1aac3a0b339de2fe3db812.jpg' },
// {id:4 , name4:'event4' ,description4:'this is the fourth party' },

]








    return (
        <div>

            
           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://i.pinimg.com/736x/4f/63/b3/4f63b32cbd54d1eb065b407127f5a6e3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            party
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>






 <div>
            <ul>

                {
                    
                    party.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            <Link to='/page-event' state={item}><button id='button1'>View Event</button></Link>

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
          height="300"
          image="https://i.pinimg.com/736x/9e/3b/52/9e3b52558add88e600c567a82615cea3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            desert
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>


            


            

 <div>
            <ul>

                {
                    
                    party2.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            
                            <Link to='/page-event' state={item}><button id='button1'>View Event</button></Link>

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
          image="https://i.pinimg.com/1200x/3e/1e/5a/3e1e5a184d6d83463d1794885e99ef95.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cinema
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       






               

 <div>
            <ul>

                {
                    
                    party3.map((item)=><li key={item.id}>

                        <div>
                            {/* <h3>{item.name}</h3>
                            <p>{item.description}</p> */}
                            
                            <Link to='/page-event' state={item}><button id='button1'>View Event</button></Link>

                        </div>


                    </li>)

                }

            </ul>

          </div>

      </CardActions>
    </Card>








        </div>

    );
}