import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ContextProvider from './contex/ContextProvider';
import ItemDetails from './fakeStore/ItemDetails';
import ItemDetails2 from './fakeStore/ItemDetails2';





function App() {
  return (
   
    <ContextProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/Itemdetails' component={ItemDetails}/>
            <Route exact path='/Itemdetails2' component={ItemDetails2}/>

          </Switch>
        </BrowserRouter>
      </ContextProvider>
      
  );
}

export default App;
