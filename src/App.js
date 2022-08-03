import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ContextProvider from './contex/ContextProvider';

// import TempletProvider from './components/templets/TempletProvider';



function App() {
  return (
    // <TempletProvider>
    <ContextProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact paath='/cart' component={Cart}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
      //  </TempletProvider>
  );
}

export default App;
