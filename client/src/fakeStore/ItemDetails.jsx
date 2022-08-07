
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "@mui/material";
import { Box, Typography } from "@material-ui/core";
import { Table ,TableBody, TableRow, TableCell } from "@material-ui/core";

const useStyle = makeStyles({
    leftContainer: {
        minWidth:'20%',
        padding: '60px 0 0 80px',
        width:'200px',
        height:'200px'
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    rightContainer:{
        minWidth:'50%',
        marginTop:50,
        padding: '60px 0 0 80px',
    },
    description:{
        marginTop:50,
        minWidth:'50%',
        width:'600px'
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *' :{
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
})

const ItemDetails= ()=>{


    const location = useLocation();
    const {myObj} =location.state;


    const classes=useStyle();
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
        
  
            <Box style={{display:'flex', textDecoration:'none'}}>
               <Box className={classes.leftContainer}>
                    <img src={myObj.image} className={classes.productImage} alt='Error'/>
                     <br/>
                        <Button  className={classes.button} style={{marginRight: 10}} variant="contained">Add to Cart</Button>
                        <Button className={classes.button} variant="contained"> Buy Now</Button>
                </Box>
                 <Box className={classes.rightContainer}>
                    <Typography style={{borderBottom:'1px solid rgb(212, 212, 212)',fontWeight:700,fontSize:20}}>{myObj.title}</Typography>
                    <Box>
                        <Typography style={{fontWeight:600, fontSize:25, display:'flex' , marginTop:50}}>
                            Price :  ₹  {myObj.price*75} 
                        </Typography>

                        {/* <Typography className={classes.description}>
                            Description : {myObj.description}
                        </Typography> */}




                                    <Table style={{marginTop:100}}>
                                        <TableBody>
                                            <TableRow className={classes.smallText}>
                                                <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                                <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                            </TableRow>
                                            <TableRow className={classes.smallText}>
                                                <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                                <TableCell>No Warranty</TableCell>
                                            </TableRow>
                                            <TableRow className={classes.smallText}>
                                                <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                                <TableCell className={classes.smallText}>
                                                    <span style={{ color: '#2874f0' }}>SuperComNet</span>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow className={classes.smallText}>
                                                <TableCell className={classes.greyTextColor}>Description</TableCell>
                                                <TableCell>{myObj.description}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                        </Box>
                </Box>
        </Box>
        
        
        
        
    )
}

export default ItemDetails;