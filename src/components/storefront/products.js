import React from 'react';
// import {add} from '../../store/cart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getData } from '../../store/products';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
const Products = (props) => { 
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(getData(''))
},[])
  const classes = useStyles();
    const state = useSelector((state) => {
      return { productReducer: state.productReducer }
    });
    let dataApi = state.productReducer.products;
 if(dataApi){ return (
    <div>      
        {
        dataApi.map((item,idx) => {
          return (
            <div>
              <ul>
                <li>  
                <strong> {item.name} &nbsp;  </strong>
                <span> &nbsp; Price : {item.price}  <strong>$</strong>  </span>
                <span> &nbsp;  &nbsp; Category : {item.category}  </span>
                </li>
              </ul>
            </div>
        );
      })
    }        
                {/* <Button variant="contained"
        color="primary"
        size="large"
        className={classes.button}
         onClick={() => props.add(product)} key={product.price} >Add To Cart</Button> */}
    </div>
  );
      }
      else {
      return  '';
      }
};

// const mapStateToProps = (state) => {
//   return {
//     // products: state.productReducer.data,
//     // displayProducts: state.productReducer,
//   };
// };
// const mapDispatchToProps = {add}


export default Products;