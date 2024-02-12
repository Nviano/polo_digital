
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { host } from "../../const/host";
import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvent] = useState([]);

  useEffect(() => {
    async function carrouselEvents() {
      try {
        const result = await fetch("http://localhost:8000/clientes/carrousel");
        const event = await result.json();
        setEvent(event);
       
      } catch (error) {
        console.log(error);
      }
    }
    carrouselEvents();
  }, []);

const setting= {
  arrows:true,
  dots:true,
  infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:false,
  customPaging: i => (
    <div
      style={{
        width: "60px",
        color: "white",
        border: "6px blue solid"
      }}
    >
      {i + 1}
    </div>
  )
 
}

  return (
    
    <Slider {...setting}>
    {events.map((event) => (
      <div key={event.index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            component="div"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          ></Box>
          <Typography
            sx={{
              textAlign:"center",
              fontSize: '48px',
              position: 'absolute',
              top: '20%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
            }}
          >
            {event.nombre}
          </Typography>
          <Typography
            sx={{
              fontSize: '32px',
              position: 'absolute',
              top: '70%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
            }}
          >
            Fecha de inicio: {event.fecha_inicio}
          </Typography>
         
          <Box
            component="img"
            src={`${host}/${event.images}`}
            alt={event.nombre}
            sx={{
              maxHeight: '600px',
              width: '1200px',
            }}
          />
        </Box>
      </div>
    ))}
  </Slider>
  );
}
