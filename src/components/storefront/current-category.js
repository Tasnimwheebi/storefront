import React from 'react';
import {connect} from 'react-redux';
const CurrentCat = (props) =>{
    // console.log('props ***********',props);
        return (
            <>
            <h3>{props.categoryReducer.act}</h3>
            <p>{props.categoryReducer.description}</p>
            </>
            )
}
const mapStateToProps = state => ({
    
    categoryReducer: state.categoryReducer
})
export default connect (mapStateToProps)(CurrentCat);