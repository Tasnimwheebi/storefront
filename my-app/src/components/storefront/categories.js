import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';
const Categories = (props) => {
    console.log(props);
    let categoriesToMap = props.categories;
  return (
    <div>
        <ul>
          {categoriesToMap.map((category) => {
            return (
              <button key={category.displayName} onClick={() => props.changeCategory(category)}>
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
      categories: state.categoryReducer.categories, 
    };
  };
  const mapDispatchToProps = { changeCategory };
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);