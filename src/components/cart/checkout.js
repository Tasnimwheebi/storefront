import React from 'react';

const CheckoutCart = (props)=>{
    return(
        <form>
            <h3> Order Summary </h3> <br></br>
            <label> Total </label>
             <br></br>
             <h3> Billing Adress</h3> <br></br>
             <input type="text" placeholder= "full name"></input>
             <input type="text" placeholder= "Adress"></input> <br></br>
             <input type="text" placeholder= "City"></input>
             <input type="text" placeholder= "State"></input> <br></br>
             <input type="text" placeholder= "Zip"></input> <br></br>
             <h3> Payment Details</h3> <br></br>
             <input type="number" placeholder="Credit Card #"></input>
            
            <input type="date" placeholder="Expiration"></input><br></br>
            <input type="" placeholder="CVV"></input>
            <br></br>


             <button type="submit">PLACE YOUR ORDER</button>
        </form>
    )
}

export default CheckoutCart;