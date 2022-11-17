import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {
    const [allProducts, setAllproducts] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setAllproducts(data))
    }, [])

    // Cart..................
    const [cart,setCart]=useState([])

    const handleAddToCart=(singlePro)=>{
        console.log(singlePro)
        const newCart=[...cart,singlePro]
        setCart(newCart)
    }
    return (
        <div className='mt-5  justify-items-center grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            {/* <h2>All Products Page:{allProducts.length}</h2> */}
            <div style={{ "width": 1000 }} className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 mt-5'>
                {
                    allProducts.map(singlePro =>
                        <SingleProduct
                            key={singlePro._id}
                            singlePro={singlePro}
                            handleAddToCart={handleAddToCart}
                            
                            >

                        </SingleProduct>)
                }
            </div>

            <div style={{ "backgroundColor": "#F6DAAE" }}>
                <div class="card w-96  ">
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Order summary!</h2>
                        <p>Selected Items: {cart.length}</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProducts;