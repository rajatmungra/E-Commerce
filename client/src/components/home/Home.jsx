import { Box, makeStyles, Typography } from '@material-ui/core'
//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSection from './MidSection';
import Electronics from '../../fakeStore/Electronics.jsx';
import WClothing from '../../fakeStore/WClothing';
import MClothing from '../../fakeStore/MClothing';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#f1f3f6'
    },
    rightWrapper: {
        background: '#FFFFFF',
        marginTop: 12
    },
    line: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

const Home = () => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/e6b8f48f188398b3.jpeg?q=70';
    // const adURL2 = 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg';
    const classes = useStyle();
    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box style={{ width: '83%', paddingRight: 15 }}>
                        <Slide timer={true} title='Deal Of The Day' />
                    </Box>
                    <Link to={{
                        pathname: `/Itemdetails2`,
                        state:
                        {
                            myObj: {
                                url: 'https://rukminim1.flixcart.com/image/416/416/ky0g58w0/smartwatch/o/n/8/-original-imagac74kujhzzrc.jpeg?q=70',
                                detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
                                title: {
                                    mainTitle: 'Noise ColorFit Caliber Smartwatch  (Black Strap, Regular)'
                                },
                                price: {
                                    mrp: 2999,
                                    cost: 2499,
                                    discount: '47%'
                                },
                                description: '4.2 cm (1.69/") LCD full touch screen 150+ customizable and cloud based watch faces 60 Sports Mode|Body Temperature sensor Blood oxygen, Heart rate monitor, Stress monitor and sleep monitor Battery Runtime: Upto 15 days',
                                discount: 'Extra 10% Off',
                                tagline: 'Deal of the day'
                            }
                        }
                    }} >
                        <Box className={classes.rightWrapper}>
                            <img src={adURL} style={{ width: 230, padding: 5 }} alt="Error" />
                        </Box>
                    </Link>
                </Box>
            </Box>
            <MidSection />
            <Box style={{ margin: 20, backgroundColor: '#FFFFFF' }}>
                <Box style={{ fontWeight: 600, fontSize: 20 }}>Electronics</Box>
                <Box className={classes.line}>
                    <Electronics />
                </Box>
            </Box>
            <Box style={{ margin: 20, backgroundColor: '#FFFFFF' }}>
                <Box style={{ fontWeight: 600, fontSize: 20 }}>Women's clothing</Box>
                <Box className={classes.line}>
                    <WClothing />
                </Box>
            </Box>
            <Box style={{ margin: 20, backgroundColor: '#FFFFFF' }}>
                <Box style={{ fontWeight: 600, fontSize: 20 }}>Men's clothing</Box>
                <Box className={classes.line}>
                    <MClothing />
                </Box>
            </Box>


        </div>
    )
}

export default Home;