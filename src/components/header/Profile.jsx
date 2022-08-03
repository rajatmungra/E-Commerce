import { MenuItem,Menu, Typography,makeStyles } from "@material-ui/core";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link } from "react-router-dom";

const useStyle=makeStyles({
    component:{
        marginTop:-620,
        marginLeft:1100
    }
})
const Profile = ({account,setAccount})=>{
    const [open,setOpen]=useState(false);
    const handleClose=()=>{
        setOpen(false);
    }

    const handleClick=(event) =>{
        setOpen(event.currentTarget);
    }
    const classes=useStyle();
    const logout=()=>{
        setAccount('');
    }
    return (
        <>
        <Link><Typography onClick={handleClick} style={{marginTop:1, fontSize:20}}>{account}</Typography></Link>
        <Menu
            anchorE1={open}
            open={Boolean(open)}
            onClose={handleClose}
            className={classes.component}
        >
            <MenuItem onClick={()=>{handleClose(); logout()}}> <PowerSettingsNewIcon/>Logout</MenuItem>

        </Menu>
        </>
    )
}

export default Profile