// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Header from './components/header/header';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import CheckoutCart  from './components/cart/checkout';
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
          <Categories/>

        <ActiveCategory />
         <Product/>
          </Route>
          <Route exact path = "/cart" component = {CheckoutCart}>
            <CheckoutCart/>
          </Route>
         
          <Route exact path="/detail/:id" > <Details/></Route>
        </Switch>
        
        
       

      <Footer/>
    </div>
    </React.Fragment>
     </Router>
  );
}

export default App;
