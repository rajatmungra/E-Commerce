import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';


import { products } from '../../constants/data';
import { makeStyles, Box, Typography, Button } from '@material-ui/core';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyle = makeStyles({
  image: {
    height: 150
  },
  component: {
    marginTop: 12,
    background: "#FFFFFF"
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: 25
  },
  timer: {
    color: "#7f7f7f",
    fontSize: 18,
    alignItems: 'center',
    display: 'flex'
  },
  button: {
    background: '#2874f0',
    color: '#fff',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
    border: 'none',
    cursor: 'pointer',
    marginLeft: 'auto'
  },

  deal: {
    padding: "15px 20px",
    display: 'flex',
    borderBottom: '2px solid rgba(0,0,0,.1)'
  },
  slider: {
    marginTop: 15
  },
  text: {
    fontSize: 14,

  },
  container:{
    padding:"25px 30px"
  },
  textD:{
    textDecoration:'none'
  }
})

const Slide = ({timer,title}) => {




  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const classes = useStyle();

  const renderer = ({ hours, minutes, seconds, completed }) => {
    return <span className={classes.timer}>{hours}{" "}:{" "}{minutes}{" "}:{" "}{seconds}</span>;
  }


  return ( 
    <Box className={classes.component} >
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}
        </Typography>
        {
        timer && 
        <>
        <img src={timerURL} style={{ width: 24, paddingRight: 10, alignItems: 'center' }} alt="Error" />
        <Countdown date={Date.now() + 3.6e+7} renderer={renderer} />
        <Button variant="contained" className={classes.button}>VIEW ALL</Button>
        </>
        }
      </Box>
      <Carousel responsive={responsive}
        className={classes.slider}
        infinite={true}
        swipeable={false}
        draggable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass='carousel-item-padding-40-px'
        containerClass='carousel-container'
      >
        {
          products.map(product => (
            <Link to ={{ 
              pathname: `/Itemdetails2`, 
              state:  
              {
                  myObj :product
              }
            }} className={classes.textD}>
              <Box textAlign='center' className={classes.container}>
              <img src={product.url} className={classes.image} alt="Error" />
              <Typography className={classes.text} style={{ fontWeight: 600 }}>{product.title.shortTitle}</Typography>
              <Typography className={classes.text} style={{ color: '#388e3c' }}>{product.discount}</Typography>
              <Typography className={classes.text} style={{ opacity: '.6' }}>{product.tagline}</Typography>
            </Box>
            </Link>

          ))
        }
      </Carousel>
    </Box>
  )
}


export default Slide;