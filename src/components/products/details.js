import React , {useEffect}from 'react';
import {  getDetails} from "../../store/products";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import {add} from '../../store/cart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Details  = (props)=>{

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetails(''))
      },[])
    const  state = useSelector((state) => {
       
        return { productReducer: state.productReducer }
    });
    // console.log('tasniiiiiiiiiim ', state);
    // console.log('tasniiiiiiiiiim22222222 ', state.productReducer)
  const itemDetails = state.productReducer

  
//   return (
   
//      <div>
//      <h1>{itemDetails.name}</h1>
//      </div>
//  );
console.log('itemdetails **************',itemDetails);
if(itemDetails){ return (
  <div> 
            <ul>
              <li>  
              <strong>  {itemDetails[0].name} &nbsp;  </strong>
              <span> &nbsp; Price : {itemDetails[0].price}  <strong>$</strong>  </span>
              <span> &nbsp;  &nbsp; Category : {itemDetails[0].category}  </span>
              <Button onClick={() => {dispatch(add(itemDetails))}} variant="contained"
        color="primary" size="large" className={classes.button} >Add To Cart</Button>
             
              </li>
            </ul>       
  </div>
);
    }
    // else {
    // return  '';
    // }

}
const mapStateToProps = (state) => {
  return {
    products: state.productReducer.data,
    displayProducts: state.productReducer,
  };
};
const mapDispatchToProps = {add}
export default connect(mapStateToProps)(Details);