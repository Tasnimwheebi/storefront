import React , {useEffect}from 'react';
import {  getDetails} from "../../store/products";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { render } from '@testing-library/react';
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
              <strong>  {itemDetails.name} &nbsp;  </strong>
              <span> &nbsp; Price : {itemDetails.price}  <strong>$</strong>  </span>
              <span> &nbsp;  &nbsp; Category : {itemDetails.category}  </span>
              <Button variant="contained"
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
export default Details;