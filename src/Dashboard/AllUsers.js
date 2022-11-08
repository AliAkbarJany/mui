import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {
  // React Query....
  const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/allUsers', {
      method: 'GET',
      headers:{
        'content-type': 'application/json',
        
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
  })
    .then(res => res.json()))


  if (isLoading) {
    return <Loading></Loading>
  }
  // console.log('all users',users)
  return (
    <div>
      <h1 className='text-2xl'>All USERS Are Displayed Below</h1>
      <p className='text-2xl'>all users :{users.length}</p>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Create (Admin) & (Resturant Vendor)</th>
              <th>Delete</th>

            </tr>
          </thead>
          <tbody>

            {
              users.map((user, index) => <UsersRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              >

              </UsersRow>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AllUsers;