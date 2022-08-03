import { ImageURL } from "../../constants/data";
import { Box, makeStyles } from "@material-ui/core";

var useStyle= makeStyles(
    {
        wrapper:{
            display:'flex' ,
            marginTop:20,
            justifyContent:'space-between'
            
        }
    }
)

const MidSection=()=>{
    var classes=useStyle();
    return(
        <Box className={classes.wrapper}>
            {
            ImageURL.map(image =>(
                <img style={{width:'33%'}}src={image} alt='Error'/>
            ))
            }
        </Box>
    )
}

export default MidSection;