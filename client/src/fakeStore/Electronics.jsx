import { makeStyles, Typography, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import arr from './datafetch';
// const arr = require('./datafetch')
import {Link} from 'react-router-dom';


const useStyle = makeStyles({
    text: {
        fontSize: 14,

    },
    container: {
        padding: "25px 30px"


    },
    image: {
        height: 150
    },
    textD:{
        textDecoration:'none'
    }

})

const Electronics = () => {
    const classes = useStyle();



    const [fake, setFake] = useState([]);





    useEffect(()=>{
        fakeStore();
    },[])

    const fakeStore= async ()=>{
        const response= await  fetch('https://fakestoreapi.com/products/category/electronics');
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
            <Box textAlign='center' className={classes.container}>
                <img src={product.image} className={classes.image} alt="Error" />
                <Typography className={classes.text} style={{ fontWeight: 600 }}>{product.title}</Typography>
                <Typography className={classes.text} style={{ color: '#388e3c' }}>{product.category}</Typography>
                {/* <Typography className={classes.text} style={{ opacity: '.6' }}>Price : {product.price}</Typography> */}
            </Box>
            </Link>
        ))
        
    )


    
}

export default Electronics;