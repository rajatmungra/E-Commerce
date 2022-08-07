import { useContext, useState } from "react";
import { Box, Button, makeStyles, Typography,Badge } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import LoginDialog from "../login/Login";
import { LoginContext } from '../../contex/ContextProvider';
import Profile from "./Profile";

const useStyle = makeStyles({
    login: {
        backgroundColor: '#FFFFFF',
        color: '2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 5,
        padding: '5px 40px',
        boxShadow:'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& >*': {
            marginRight: 50,
            fontSize: 12,
            alignItems:'center',
            textDecoration:'none',
            color:'#fff'
        }
    },
    container:{
        display:'flex',
       
    }
});


const HeaderButton = () => {
    const classes = useStyle();
    const [open,setOpen] = useState(false);
    const openDialog=()=>{
    setOpen(true); 
    }

    const {account,setAccount} = useContext(LoginContext);

    return (
        <Box className={classes.wrapper}>

        {
            account ? <Profile account={account} setAccount={setAccount}/>
            : <Link>  <Button variant="contained" onClick={()=>openDialog()}className={classes.login} >Login</Button> </Link>
        }

            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>

                <Typography style={{ fontSize: 15 ,marginLeft:10}}>
                    Cart
                </Typography>
            </Link> 
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}


export default HeaderButton;