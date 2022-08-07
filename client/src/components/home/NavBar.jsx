import {navData} from '../../constants/data';
import {Box, makeStyles, Typography} from '@material-ui/core';

const useStyle= makeStyles({
    components:{
        display:'flex',
        margin:'55px 130px 0px 130px',
        justifyContent:'space-between'
        
    },
    container:{
        textAlign:'center',
        padding:'12px 8px'
    },
    image:{
        width:64
    },
    text:{
        fontSize:14,
        fontWeight:600
    }
});

const NavBar = ()=>{
    const classes =useStyle();
    return(
        <Box  className={classes.components}>
            {
            navData.map(data =>(
                <Box className={classes.container}>
                    <img  src={data.url} alt='Error' className={classes.image}/>
                    <Typography className={classes.text}>
                        {data.text}
                    </Typography>
                </Box>
            ))
            }
        </Box>
    )
}

export default NavBar;