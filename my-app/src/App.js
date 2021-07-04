// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Cart  from './components/cart/simplecart';
import Footer  from './components/footer/footer';
import Categories from './components/storefront/categories';
// import Product from './components/storefront/products'
function App() {
  return (
    <Router>
      <React.Fragment>
    <div className="App">
        <Header className="App-header"/>
        <Switch>
          <Route exact path = "/">
          </Route>
          <Route exact path = "/cart" component = {Cart}></Route>
        </Switch>
        <h1>Browse our Categories</h1>
        <Categories/>
        {/* <Product/> */}

      <Footer/>
    </div>
    </React.Fragment>
     </Router>
  );
}

export default App;
