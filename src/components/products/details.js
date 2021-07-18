import React, {useEffect} from 'react';
import {  getData , getDetails} from "../../store/products";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { render } from '@testing-library/react';
import { connect } from 'react-redux';
import {add} from '../../store/cart';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const Details  = (props)=>{
 console.log('props ', props.specificP.specificProduct);
 console.log('props2222222222 ', props.specificP);
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
    // const dispatch = useDispatch();

    useEffect(()=>{
        getData()
      },[])
    // const  state = useSelector((state) => {
       
    //     return { productReducer: state.productReducer }
    // });
    // console.log('tasniiiiiiiiiim ', state);
    // console.log('tasniiiiiiiiiim22222222 ', state.productReducer)
  // const itemDetails = state.productReducer

  
//   return (
   
//      <div>
//      <h1>{itemDetails.name}</h1>
//      </div>
//  );
// console.log('itemdetails **************',itemDetails);
if(props.specificP.specificProduct){ return (
  <div>  
    {/* <h1> Hello </h1> */}

    {props.specificP.specificProduct.map((item ,idx) => 

     { return(
<ul>
              <li key= {idx} >  
              <strong>  {item.name} &nbsp;  </strong>
              <span> &nbsp; Price : {item.price}  <strong>$</strong>  </span>

              <span> &nbsp;  &nbsp; Category : {item.category}  </span>
              <Button onClick={() => props.add(item)} variant="contained"
        color="primary" size="large" className={classes.button} >Add To Cart</Button>
             
              </li>
            </ul>  
    )
    
     } 
    )
  }             
  </div>
);
}
    
          
    else {
    return  (
      <h1>tasnim</h1>
    )
    }

}
const mapStateToProps = (state) => {
  return {
    // products: state.productReducer,
    specificP: state.productReducer,

  };
};
const mapDispatchToProps = {add , getDetails}
export default connect(mapStateToProps,mapDispatchToProps )(Details);