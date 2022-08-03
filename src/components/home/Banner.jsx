import Carousel from 'react-material-ui-carousel';
import {bannerData}  from '../../constants/data';
import { makeStyles } from '@material-ui/core';

const useStyle=makeStyles({
    image:{
        width:'100%',
        height:280
    },
    carousel:{
        marginTop:10
    }
})

const Banner =()=>{
    const classes=useStyle();
                return(
                            <Carousel 
                            animation='slide' 
                            indicators={false} 
                            navButtonsAlwaysVisible={true}
                            cycleNavigation={true}
                            navButtonsProps={
                                {
                                    style:{
                                        background:'#FFFFFF',
                                        color:'#494949',
                                        borderRadius:0,
                                        margin:0,
                                        
                                    }
                                }
                                
                            }
                            className={classes.carousel}
                            >
                                {
                                    bannerData.map(image =>(
                                        <img src={image} className={classes.image} alt='Error'/>
                                    ))
                                }
                            </Carousel>
                )
    
}

export default Banner;