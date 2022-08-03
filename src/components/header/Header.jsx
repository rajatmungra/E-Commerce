import {AppBar,Toolbar, makeStyles, Typography,Box, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';



import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';

const useStyle=makeStyles({
    header:{
        background:'#16532a',
        height: 55
    },
    logo:{
        width:30,
        height:30,
    },
    subURL:{
        height:10,
        color:'#FFFFFF',
        marginRight:10
    },
    container:{
        display:'flex',textDecoration:'none'
    },
    subHeading:{
        fontSize :10,
        fontStyle:'italic',
        color:'#fff'
    },
    component:{
        marginLeft:'12%',
        lineHeight:'0',
        textDecoration:'none',
        display:'flex',
        
    }
});

const ToolBar= withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);
  
const Header = ()=>{
    const classes=useStyle();


    // const logoURL ='https://www.seekpng.com/png/detail/428-4289671_logo-e-commerce-good-e-commerce-logo.png';
    const logoURL='https://cdn-icons-png.flaticon.com/512/1162/1162499.png';
    
    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.component}>
                    <img src={logoURL} alt="Ecommerce" className={classes.logo} />
                    <Typography style={{color:'#FFFFFF', paddingLeft:10}}>E-Commerce</Typography>
                        {/* <Box className={classes.container}>
                            <Typography className={classes.subURL}>E-Commerce</Typography>
                         </Box> */}
                </Link>
                <SearchBar/>
                <HeaderButton/>
            </ToolBar>
        </AppBar>
    )
}

export default Header;



