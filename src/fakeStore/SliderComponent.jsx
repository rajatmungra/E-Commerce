import { useState } from "react";
// import { Box,Typography,makeStyles } from "@material-ui/core";

const Temp=()=>{
    const [fake, setFake] = useState([]);
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => { setFake(json); })
    .catch("Oh No Error!!!!!!!!!!!!!")

    console.log(fake);
    return fake;
}

export default Temp;