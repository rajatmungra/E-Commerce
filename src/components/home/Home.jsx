import {Box, makeStyles} from '@material-ui/core'
//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSection from './MidSection';

const useStyle=makeStyles({
    component:{
        padding:10,
        background:'#f1f3f6'
    },
    rightWrapper:{
        background:'#FFFFFF',
        marginTop:12
    }
})

const Home= ()=>{
    const adURL = 'https://www.themediacaptain.com/wp-content/uploads/2020/09/dynamic-search-ads-for-eCommerce.jpg';
    const adURL2= 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg';
    const classes = useStyle();
    return(
        <div>
            <NavBar/>
            <Box className={classes.component}>
                <Banner/>
                <Box style={{display:'flex'}}>
                    <Box style={{width:'83%',paddingRight:15}}>
                        <Slide timer={true} title='Deal Of The Day'/>
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{width:230, padding:5}} alt="Error" />
                        <img src={adURL2} style={{width:230, padding:5}} alt="Error" />
                    </Box>
                </Box>
            </Box>
            <MidSection/>
            <Slide timer={false} title="You May Also Like..."/>
            <Slide timer={false} title='Recommended Items'/>
            <Slide timer={false} title='You May Like...'/>
            <Slide timer={false} title='More to Explore'/>
            
        </div>
    )
}

export default Home;