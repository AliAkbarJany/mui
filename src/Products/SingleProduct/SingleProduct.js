import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleProduct = ({singlePro,handleAddToCart}) => {
    // console.log(handleAddToCart)
    const {_id,productName,price}=singlePro
    

    // const navigate=useNavigate()
    // const navigateToPayment=paymentId=>{
    //     navigate(`/dashboard/payment/${paymentId}`)
    // }
   
    return (
        <div class="card w-auto bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name:{productName}</h2>
                <p>Price: {price}</p>

                <h3>ID: {_id}</h3>
                <div class="card-actions justify-end">
                    {/* <button class="btn btn-primary">Accept</button> */}
                    <Link to={`/dashboard/payment/${_id}`} ><button class="btn btn-accent">Payment</button></Link>

                    {/* Add To cart.................... */}
                    <button  onClick={ ()=> handleAddToCart(singlePro)} class="btn btn-warning">Add to Cart</button>

                    {/* <button onClick={()=>navigateToPayment(_id)} class="btn btn-accent">Payment button</button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;