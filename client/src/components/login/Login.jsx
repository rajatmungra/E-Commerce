import { Dialog, DialogContent,makeStyles,Box,Button,TextField } from "@material-ui/core";
import { useState } from "react";
import { Typography } from '@material-ui/core';
import { authenticateSignup } from "../../service/api";
 import { authenticateLogin } from "../../service/api";
 


const useStyle=makeStyles({
    component:{
        height:'85vh',
        width:'85vh',
        margin:'-25px',
        marginBottom:"-30px"
    },
    image:{
        // backgroundImage: `url(${'https://cdn-icons-png.flaticon.com/512/3580/3580168.png'})`,
        height:'70vh',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        // backgroundColor:"#2874f0",
        backgroundColor:'#16532a',
        width:'40%',
        backgroundPosition:'center 85%',
        padding:'45px 35px',
        '& > *':{
            color:'#FFFFFF',
            fontWeight:600
        }
    },
    wrapper:{
        display:'flex',
        width:600
    },
    login:{
        padding:"25px 35px",
        display:'flex',
        flext:1,
        flexDirection:'column',
        '&> *':{
            marginTop:20
        }
    },
    text:{
        color:"#878787",
        fontSize:10
    },
    loginbtn:{
        textTransform:'none',
        backgroundColor:'#16532a',
        marginTop:50,
        color:'#FFFFFF',
        borderRadius:2,
        height:48
    },
    requestBtn:{
        textTransform:'none',
        backgroundColor:'#FFFFFF',
        color:'#287480',
        borderRadius:2,
        height:48,
        boxShadow:'0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText:{
        // margin:'auto', 
        textAlign:'center',
        marginTop:'auto',
        fontSize:14,
        color:'#2874f0',
        cursor:'pointer'
    },
    error:{
        fontSize:10,
        color:'#ff6161',
        marginTop:0
    },
    imageBox:{
        marginTop:100,
        width:200,
        height:200
    }


});

const initialValue={
    login:{
        view:'login',
        heading:'Login'
    },
    signup:{
        view:'signup',
        heading:'Signup '
    }
}

const signupInitialValues ={
    firstname :'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}


const loginInitialValues={
    username:'',
    password:''
}

const Login=({open,setOpen, setAccount})=>{

    const [account,toggleAccount] =useState(initialValue.login);
    const[signup,setSignup]= useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);
    const [error, setError]=useState(false);

    const toggleUserAccount=()=>{
        toggleAccount(initialValue.signup)
    }

    const handleClose=()=>{
        setOpen(false)
        toggleAccount(initialValue.login)
    }

    const classes=useStyle();

    const signupUser=async()=>{
       let response = await authenticateSignup(signup);
       if(!response){
           
           return;
       }
       handleClose();
       setAccount(signup.username);
    }

    const loginUser = async ()=>{
        let response = await authenticateLogin(login);
        if(!response){
            setError(true);
            return;
        }
        handleClose();
        setAccount(login.username);
    }

    const onInputChange = (e)=>{
        setSignup({ ...signup, [e.target.name]:e.target.value});

    }

    const onValueChange = (e)=>{
            setLogin({ ...login, [e.target.name]: e.target.value});
            console.log(login);
    }
    return(
        <Dialog open={open} onClose={handleClose} 
        style={{ padding: '0px 0px 0px 0px' }}
        PaperProps={{
            style: {
                maxWidth:'none',
                maxHeight:'none'
            },
          }}>
            <DialogContent  dividers={false} className={classes.component}>
                <Box className={classes.wrapper}>
                    <Box className={classes.image}>
                        <Typography style={{fontSize:30}}>
                            {account.heading}
                        </Typography>

                        <Box >
                            <img className={classes.imageBox} src="https://cdn-icons-png.flaticon.com/512/1828/1828260.png" alt="Log in" />
                        </Box>
                        
                    </Box>

                    {
                        account.view==='login' ? <Box className={classes.login}>
                        <TextField  onChange={(e)=>onValueChange(e)}name='username' label='Enter Username'/>
                        <TextField type='password' onChange={(e)=>onValueChange(e)}name='password' label='Enter Password'/>
                        {error && <Typography  className={classes.error}>Invalid Username or Password</Typography>}
                        <Typography className={classes.text}>By continuing, you agree to Terms and Conditions</Typography>
                        <Button onClick={()=> loginUser()} variant="contained" className={classes.loginbtn}>Login</Button>
                        <Typography onClick={()=> toggleUserAccount()} className={classes.createText}>New Customer? Create an Account</Typography>
                    </Box> :
                     <Box className={classes.login}>
                        <TextField onChange={(e)=>onInputChange(e)} name='firstname' label='Enter Firstname'/>
                        <TextField onChange={(e)=>onInputChange(e)} name='lastname' label='Enter Lastname'/>
                        <TextField  onChange={(e)=> onInputChange(e)} name='username' label='Enter Username'/>
                        <TextField  onChange={(e)=>onInputChange(e)} name='email' label='Enter E-Mail'/>
                        <TextField type='password'  onChange={(e)=>onInputChange(e)} name='password' label='Enter Password'/>
                        <TextField onChange={(e)=>onInputChange(e)}  name='phone' label='Enter Phone number'/>
        

                        <Button onClick={()=> signupUser()} varient='contained' className={classes.loginbtn}>Signup</Button>
                    </Box>
                    }
                    
                </Box>
            </DialogContent>
        </Dialog>
    )
}


export default Login;