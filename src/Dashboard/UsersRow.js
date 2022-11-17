import React from 'react';
import { toast } from 'react-toastify';
import { useEffect, useState } from "react"

const UsersRow = ({ user, index, refetch }) => {
    const { _id, email, role,vendor } = user
    console.log('ADMIN', role)
    console.log('RESTAURAN VENDOR', vendor)

    // const [users, setUsers] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/allUsers')
    //     .then(res=>res.json())
    //     .then(data=>setUsers(data))
    // },[])


    // Male (Admin)...
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())


            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully Make an Admin')
                }
            })
    }
    
    // Make (Restauran vendor)
    const makeRestauranVendor = () => {
        fetch(`http://localhost:5000/users/makeRestauranVendor/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },

        })
            .then(res => res.json())


            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully Make  Restaurant Vendor')
                }
            })
    }

    // Delete Users.....
    const [users, setUsers] = useState([])
    console.log(users)
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure to Delete Device')
        if (proceed) {
            fetch(`http://localhost:5000/deleteUsers/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = users.filter(user => user._id !== id)
                    console.log(remaining)
                    refetch()
                    setUsers(remaining)
                })
        }
    }
    
    return (
        <tr class='hover'>
            <th>{index + 1}</th>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        {/* <div class="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div> */}
                    </div>
                    <div>
                        <div class="font-bold">{email}</div>
                    </div>
                </div>
            </td>
            <td className='font-bold'>
                <div>
                    {
                        (role !== 'admin') 
                        ?
                            <button onClick={makeAdmin} class="btn btn-xs text-warning">Make Admin</button>
                            : "ADMIN"
                    }
                </div>
                <div>
                    {
                        (vendor !== 'restaurantVendor')
                        ?
                        <button onClick={makeRestauranVendor} class="btn btn-xs text-warning">Make Restaurant vendor</button>
                        : "Rstaurant vendor"
                    }
                </div>

            </td>
            <td>
                <button onClick={() => handleDeleteUser(_id)} class="btn btn-xs text-warning">Delete user</button>
            </td>
        </tr>
    );
};

export default UsersRow;