import React , {useEffect} from 'react';
import { getData , getDetails} from "../../store/products";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';




const Details = (props)=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDetails())
      },[])
    const state = useSelector((state) => {

        return { productReducer: state.productReducer }
    });
    // console.log('tasniiiiiiiiiim ', state);
    console.log('tasniiiiiiiiiim ', state)

 return (
     <div>
   <h1>tasnim</h1>
     </div>
 )
}

export default Details;