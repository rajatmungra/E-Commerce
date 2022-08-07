import { makeStyles, Typography, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    text: {
        fontSize: 14,
        textDecoration:'none'

    },
    container: {
        padding: "25px 30px",
        cursor:'pointer'
    },
    image: {
        height: 150
    },
    textD:{
        textDecoration:'none'
    }

})

export const womenClothing = (title)=>{
    return title;
}
const WClothing = () => {
    const classes = useStyle();



    const [fake, setFake] = useState([]);





    useEffect(()=>{
        fakeStore();
    },[])

    const fakeStore= async ()=>{
        const response= await  fetch('https://fakestoreapi.com/products/category/women%27s%20clothing');
        const jsonData= await response.json();
        console.log(jsonData);
        setFake(jsonData);
    }

   


    return (


       
        fake.map(product=>(
            <Link to ={{ 
                pathname: `/Itemdetails`, 
                state:  
                {
                    myObj :product
                }
              }} className={classes.textD}>
            <Box  textAlign='center' className={classes.container}>
                <img src={product.image} onClick= {() => womenClothing(product.title)} className={classes.image} alt="Error" />
                <Typography className={classes.text} style={{ fontWeight: 600 }}>{product.title}</Typography>
                <Typography className={classes.text} style={{ color: '#388e3c' }}>{product.category }</Typography>
                {/* <Typography className={classes.text} style={{ opacity: '.6'}}>Price : {product.price*100}</Typography> */}
            </Box>
            </Link>
        ))
        
    )


    
}

export default WClothing;