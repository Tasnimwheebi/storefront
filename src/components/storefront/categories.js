import React from 'react';
import { connect } from 'react-redux';
// import { changeActiveCategory } from '../../store/products';
import { Button } from '@material-ui/core';
import { getRemoteData } from '../../store/categories'; // action function from the reducer
import { useDispatch} from 'react-redux'; // add methods from redux
const Categories = (props) => {
  const dispatch = useDispatch(); /// use the method useDispatch
  // const state = useSelector((state) => {
  //     return { categoryReducer: state.categoryReducer }
  // }); /// return data from the reducer
    // console.log(props.categories);
   
  return (
    <div>
        <ul>
          {props.categories.map((category) => {
            return (
              <Button color="primary" key={category.displayName} onClick={() => dispatch(getRemoteData(category.name))}>
                {category.displayName}
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