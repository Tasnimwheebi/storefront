// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Cart  from './components/cart/simplecart';
import Footer  from './components/footer/footer';
import Categories from './components/storefront/categories';
import Product from './components/storefront/products'
import ActiveCategory from './components/storefront/current-category';
import SimpleCart from './components/cart/simplecart'
import Details from './components/products/details';
function App() {
  return (
    <Router>
      <React.Fragment>
    <div className="App">
        <Header className="App-header"/>
        <SimpleCart />
        <Switch>
          <Route exact path = "/">
          </Route>
          <Route exact path = "/cart" component = {Cart}></Route>
          <Route exact path='/detail' component={Details}></Route>
        </Switch>
        <h1>Browse our Categories</h1>
        <Categories/>
        <ActiveCategory />
        <Product/>

      <Footer/>
    </div>
    </React.Fragment>
     </Router>
  );
}

export default App;
