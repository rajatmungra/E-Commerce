import { makeStyles, InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';


const useStyle = makeStyles((theme)=> ({
  search: {
    
    borderRadius: 5,
    backgroundColor: '#fff',
    display:'flex',
    marginLeft: 10,
    width: '30%',
    
  },

  searchIcon: {
    paddingTop:5,
    height: '100%', 
    // backgroundColor: '#000000',
    pointerEvents: 'none',
    display: 'flex',
    color:'blue'
  },

  inputRoot: {
    color: 'black',
    width:'100%',
    paddingLeft:10,
    fontSize:15
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0), 

  },
  list: {
    
    color: '#000',
    background: '#FFFFFF',
    marginTop: 36
  }
}))

const SearchBar = () => {
  const classes=useStyle();
  return (
    <div className={classes.search}>
      
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />

      <div className={classes.searchIcon}>
        <Search/>
      </div>
    </div>
  )
}


export default SearchBar;



