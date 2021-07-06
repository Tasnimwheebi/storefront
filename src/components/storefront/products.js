import React from 'react';
import { connect } from 'react-redux';
import {add} from '../../store/cart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Products = (props) => { 
  const classes = useStyles();
    console.log('productsProps',props);
    // if(changeCategory)
    console.log(props.displayProducts);
    console.log(props.products[0].name);
  return (
    <div>
      <ul>
        {props.displayProducts
        .map((product) => {
          return (
            <div >
        
                <strong> {product.name}  </strong>
                 <span >{product.price} </span>
                
                <Button variant="contained"
        color="primary"
        size="large"
        className={classes.button}
         onClick={() => props.add(product)} key={product.price} >Add To Cart</Button>
                  
            </div>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    displayProducts: state.productReducer.displayProducts,
  };
};
const mapDispatchToProps = {add}


export default connect(mapStateToProps,mapDispatchToProps)(Products);