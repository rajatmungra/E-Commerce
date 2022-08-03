import { ThemeProvider} from '@mui/material/styles';
import { createTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import { createContext } from 'react';


const TempletContex=createContext(null);
const TempletProvider= ({children})=>{

    const theme=createTheme({
        overrides:{ 
            MuiDialogContent:{
               root:{
                   '&:first-child':{
                       paddingTop:0
                   }
               }
            }
        }
    });

    return(
        <TempletContex.Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                 {children}
            </ThemeProvider>
        </TempletContex.Provider>
    )

}

export default TempletProvider;