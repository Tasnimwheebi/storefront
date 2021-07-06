import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/products';
import { Button } from '@material-ui/core';
const Categories = (props) => {
    console.log(props.categories);
   
  return (
    <div>
        <ul>
          {props.categories.map((category) => {
            return (
              <Button color="primary" key={category.displayName} onClick={() => props.changeActiveCategory(category.name)}>
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
  const mapDispatchToProps = { changeActiveCategory };
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);