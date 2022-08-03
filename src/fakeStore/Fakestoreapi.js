import {Box,Typography, makeStyles} from '@material-ui/core';

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import data from './data.js';
// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import {SliderComponent} from './SliderComponent';
// import Temp from './SliderComponent';




// var data2;
// export const  fatchData = async ()=>{
//     const res = await fetch('https://fakestoreapi.com/products');
//      data2 = await res.json();
//     //  console.log(data);
//     // console.log(data2);
//     console.log(data2);
// }
// fatchData();
// console.log(data2);

// const fake= Temp();

const useStyle = makeStyles({
    slider: {
        marginTop: 15
      },
      text: {
        fontSize: 14,

    },
    container: {
        padding: "25px 30px"
    },
    image: {
        height: 150
    },
})

export default function Sliders() {
    
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
        },
        box:{
            display:'flex',
            
        }
    };

    
   

    // const  fetchData = async ()=>{
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     setFake(data);
    //     console.log(data);
    // }
    
    // const handleDragStart = (e) => e.preventDefault();

    const [fake, setFake] = useState([]);

    // console.log(fake);
// const items = [

//     fake.forEach(product=>{
//         <Box className={classes.box}>
//         <img src={product.image} className={classes.image} alt="Error" />
//        <Typography className={classes.text} style={{ fontWeight: 600 }}>{product.category}</Typography>
//         <Typography className={classes.text} style={{ color: '#388e3c' }}>{product.title}</Typography>
//         <Typography className={classes.text} style={{ opacity: '.6' }}>Price : {product.price}</Typography>
// </Box>
//     })

            
// ];

fetch(`https://fakestoreapi.com/products/1`)
.then(res => res.json())
.then(json => { setFake(json) })
.catch("Oh No Error!!!!!!!!!!!!!")
const classes = useStyle();

    return (

        
        // <AliceCarousel mouseTracking items={items} />

        <Carousel responsive={responsive}
            className={classes.slider}
            // infinite={true}
            swipeable={false}
            draggable={false}
            centerMode={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            showDots={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass='carousel-item-padding-40-px'
            containerClass='carousel-container'
        >
            
            
                    

                            
                                <Box textAlign='center' className={classes.container}>
                                <img src={fake.image} className={classes.image} alt="Error" />
                                <Typography className={classes.text} style={{ fontWeight: 600 }}>{fake.category}</Typography>
                                <Typography className={classes.text} style={{ color: '#388e3c' }}>{fake.title}</Typography>
                                <Typography className={classes.text} style={{ opacity: '.6' }}>Price : {fake.price}</Typography>
                                </Box>
                            
                    
                        
                    
            
            

            
            
        </Carousel>
    );
}

