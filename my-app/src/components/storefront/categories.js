import React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/products';
const Categories = (props) => {
    let categoriesToMap = props.category.categories;
  return (
    <div>
        <h2>My Categories component.</h2>
        <ul>
          {categoriesToMap.map((category) => {
            return (
              <button key={category.displayName} onClick={() => props.changeActiveCategory(category)}>
                {category.displayName}
              </button>
            );
          })}
        </ul>
      </div>
  );
};
const mapStateToProps = (state) => {
    return {
      category: state.categories, 
    };
  };
  const mapDispatchToProps = { changeActiveCategory };
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);