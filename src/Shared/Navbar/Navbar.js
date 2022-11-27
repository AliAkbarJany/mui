import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

import { TfiShoppingCartFull } from "react-icons/tfi";
import SingleProduct from '../../Products/SingleProduct/SingleProduct';
import { AddToDb, getStoredCart } from '../../Products/Utilities/AddToDb';

const Navbar = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const logout = () => {
        signOut(auth);
        
    };

    // const [singlePro,setSinglePro]=useState({})

    // Cart..................
    const [cart, setCart] = useState([])

    const handleAddToCart = (singlePro) => {
        console.log(singlePro)
        const newCart = [...cart, singlePro]
        setCart(newCart)
        AddToDb(singlePro._id)
    }

    // total cart..........
    const cartResult = getStoredCart()
    console.log(cartResult)

    const values = Object.values(cartResult);

    const sum = values.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);

    console.log('sum of cart', sum)

    // .............................


    const menuItems = <>
        <li> <Link to='/home'>HOME</Link> </li>


        <li><Link to='/dashboard'>DASHBOARD</Link></li>
        <li><Link to='/images'>IMAGES</Link></li>
        <li><Link to='/styleComponents'>STYLE COMPONENT</Link></li>


        <li>
            {user ?
                <button onClick={logout} className='btn btn-warning'>SignOut</button> :
                <Link to='/login'>LOGIN</Link>}
        </li>

        <div className=''>
            <div >
                <li>
                    {sum}
                </li>
                <TfiShoppingCartFull></TfiShoppingCartFull>
            </div>
        </div>


    </>


    return (
        <div>
            <div style={{ "backgroundColor": "#2A8C82" }} class="navbar justify-around font-bold">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}


                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl font-bold">Material UI</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabindex="1" for="dashboard-sidebar" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
            {/* <div>

                <SingleProduct  handleAddToCart={handleAddToCart}></SingleProduct>

            </div> */}

        </div>
    );
};

export default Navbar;