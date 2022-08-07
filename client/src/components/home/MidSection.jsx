import { ImageURL } from "../../constants/data";
import { Box, makeStyles } from "@material-ui/core";

var useStyle= makeStyles(
    {
        wrapper:{
            display:'flex' ,
            marginTop:20,
            justifyContent:'space-between',
            height:250
            
        }
    }
)

const MidSection=()=>{
    var classes=useStyle();
    return(
        <Box className={classes.wrapper}>
            {/* {
            ImageURL.map(image =>(
                <img style={{width:'33%'}}src={image} alt='Error'/>
            ))
            } */}
            <img src="https://rukminim1.flixcart.com/flap/8440/1440/image/8af784265d24c166.jpg?q=50" alt="Error" />
        </Box>
    )
}

export default MidSection;