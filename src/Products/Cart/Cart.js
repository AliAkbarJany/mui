import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)

    let total=0
    for( const product of cart){
        total= (total+parseFloat(product.price))
    }

    // const tax= total * 10/100 
    const tax= parseFloat ((total * 0.1).toFixed(2))
    const grandTotal=total+tax
    return (
        <div>
            <h2 class="card-title">Order summary!</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Price: $ {total}</p>
            <p>Tax: $ {tax}</p>
            <p>Garnd Total: $ {grandTotal}</p>
        </div>
    );
};

export default Cart;