// import React from 'react';
// import { connect } from 'react-redux';
// import { changeCategory } from '../../store/categories';
// const Current = (props) => {
//     console.log(props);
//     // if(props.changeCategory){
//   return (
//     <div>
//         <h1>{props.categoryReducer.changeCategory ? props.categoryReducer.act : null}</h1> 
//     <h3>Category Description Goes Here</h3>
        
//       </div>
//   );
// // }
// };




// const mapStateToProps = (state) => {
//     return {
//       categoryReducer: state.categoryReducer, 
//     };
//   };
//   const mapDispatchToProps = { changeCategory };
//   export default connect(mapStateToProps, mapDispatchToProps)(Current)

import React from 'react';
import {connect} from 'react-redux';
const CurrentCat = (props) =>{
    console.log('props ***********',props);
        return (
            <>
            <h3>{props.categoryReducer.act}</h3>
            
            <p>{props.categoryReducer.description}</p>
            </>
            )
}
// console.log('state',state);
const mapStateToProps = state => ({
    
    categoryReducer: state.categoryReducer
})
export default connect (mapStateToProps)(CurrentCat);