import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';

import { AddToDb, getStoredCart } from '../Utilities/AddToDb';



const AllProducts = () => {
    const [allProducts, setAllproducts] = useState([])

    useEffect(() => {

        console.log('all products load before fatch')

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setAllproducts(data)
                // console.log('all products load FINISH')
            })
    }, [])


    // loacal storage thake (cart get) kora......
    useEffect(() => {

        console.log('loacal storage first line', allProducts)
        const cartStored = getStoredCart()
        console.log('cartStored', cartStored)  
        /*.
        635650ab8f76f6d4bb02d6f9:1
        635650ab8f76f6d4bb02d6fa:2
        635650ab8f76f6d4bb02d6fc:1
        */
        for (const id in cartStored) {
            console.log(id)  /* 635650ab8f76f6d4bb02d6fa */
            const addedProduct = allProducts.find(product => product._id === id)
            console.log(addedProduct)
            /*
                description:""
                price:5000
                productName:"table"
                quantity:17
                _id:"635650ab8f76f6d4bb02d6fc"

            */
            if (addedProduct) {
                const quantity = cartStored[id]
                addedProduct.quantity=quantity
            }

        }
        // console.log('loacal storage FINISH')
    }, [allProducts])

    // Cart..................
    const [cart, setCart] = useState([])

    const handleAddToCart = (singlePro) => {
        console.log(singlePro)
        const newCart = [...cart, singlePro]
        setCart(newCart)
        AddToDb(singlePro._id)
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

                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllProducts;