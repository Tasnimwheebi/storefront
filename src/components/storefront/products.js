import React from 'react';
// import {add} from '../../store/cart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getData , getDetails} from '../../store/products';
import { useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
// import Details from '../products/details';
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
    // console.log('data from api', dataApi);
 if(dataApi){ return (
    <div>      
        {
        dataApi.map((item,idx) => {
          return (
            <div>
              <ul>
                <li>  
                <strong> {item._id}  {item.name} &nbsp;  </strong>
                <span> &nbsp; Price : {item.price}  <strong>$</strong>  </span>
                <span> &nbsp;  &nbsp; Category : {item.category}  </span>
                <Button variant="contained"
        color="primary" size="large" className={classes.button} >Add To Cart</Button>
        
        <Button component={Link} to={`/detail/${item._id}`} onClick={()=> {dispatch(getDetails(item.name,item._id))}} variant="contained"
        color="primary" size="large" className={classes.button} >View Details </Button>
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