import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../../store/cart';
import { Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
// import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
const Cart = (props) => {
    const classes = useStyles();
    let cartProducts = props.arrayOfProducts;


    return (

        <>
            <h1>Tasnim products</h1>
            <Button variant="outlined" color="primary"><span>Cart ({props.total})</span></Button>
            <ul>
                {
                    cartProducts.length ? cartProducts.map((items) => {
                        return (
                            <li >
                                <span>{items}</span>
                                <Button onClick={() => props.remove(items)}
        variant="contained"
        color="secondary"
        className={classes.button}
        // startIcon={<DeleteIcon />}
        >
        Delete
      </Button>

                            </li>
                        );
                    }) : ''
                }
            </ul>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        total: state.reducerOfCart.totalProducts,
        arrayOfProducts: state.reducerOfCart.cartArray,
    }
}
// const mapDispatchToProps = {deleteFromCart:remove};
const mapDispatchToProps = { remove };
export default connect(mapStateToProps, mapDispatchToProps)(Cart);