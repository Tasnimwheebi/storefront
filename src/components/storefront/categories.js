import React from 'react';
import { connect } from 'react-redux';
// import { changeActiveCategory } from '../../store/products';
import { Button } from '@material-ui/core';
import { useEffect } from 'react';
import { getRemoteData } from '../../store/categories'; // action function from the reducer
import { getData } from '../../store/products';
import { useDispatch} from 'react-redux'; // add methods from redux
const Categories = (props) => {
  const dispatch = useDispatch(); /// use the method useDispatch
  useEffect( ()=>{
   dispatch(getRemoteData());
  },[])
  return (
    <div>
        <ul>
          {props.categories.map((category) => {
            return (
              <Button  onClick={()=>{dispatch(getData(category.name))}} color="primary" key={category.name}>
                {category.name}
              </Button>
            );
          })}
        </ul>
        
      </div>
  );
};
const mapStateToProps = (state) => {
    return {
      categories: state.categoryReducer.categories, 
    };
  };
  // const mapDispatchToProps = { changeActiveCategory };
  export default connect(mapStateToProps)(Categories);