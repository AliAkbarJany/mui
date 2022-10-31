import React from 'react';
import { useState } from "react";
import { Token, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';



const Registration = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

    // sign up with (Email & Password)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // update user Name....
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // Custom Hook (useToken)....
    const [Token]=useToken(guser || user)



    // material ui.......

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleModify = e => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: [e.target.value],
        }))
    }

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    const handleRegistration = async event => {
        event.preventDefault();
        console.log('inside event', event)
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name, email, password)
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile');
        console.log('Update done')
        navigate('/home')

        console.log('Material UI Inputs', inputs)
        
    }

    const navigate = useNavigate()
    

    if (guser || user) {
        console.log(guser || user)
        navigate('/images')
    }

    if (loading || gloading) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error || gerror || updateError) {
        console.log('error message',error || gerror || updateError)
        errorMessage = <p className='text-red-500'>Error: {error?.message || gerror?.message || updateError?.message}</p>;
    }


    return (
        <div className='flex h-full justify-center mt-5' >
            <div class="card lg:card-side bg-base-100 shadow-xl ">
                <div class="card-body items-center text-center">
                    <h2 class="card-title ">Registration</h2>
                    {/* <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    > */}
                    <form className='mt-4' onSubmit={handleRegistration}>
                        <div class="form-control w-full max-w-xs">
                            <TextField name="name" type="text" value={inputs.name}
                                onChange={handleModify}
                                id="outlined-basic" label="Name" variant="outlined" />
                            <div className='mt-3'>
                                <TextField name="email" type="email" value={inputs.email}
                                    onChange={handleModify}
                                    id="filled-basic" label="Email" variant="filled" className='mt-5' />
                            </div>
                            {/* <div className='my-3'>
                                <TextField name="password" type="password" value={inputs.password}
                                    onChange={handleModify}
                                    id="filled-basic" label="Password" variant="filled" className='mt-5' />
                            </div> */}

                            <div className='my-3'>
                                <TextField
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleModify}
                                    label="Password"
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    // onChange={handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                        </div>

                        {errorMessage}

                        <div class="card-actions justify-center">
                            <button type='submit' class="btn btn-accent" >Registration</button>
                        </div>

                    </form>
                    <p>Have an Account <Link to='/login' className='text-primary'>Please Login</Link> </p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Registration</button>

                    {/* password rule (1) */}


                    {/* </Box> */}


                    {/* <form className='mt-4' onSubmit={handleRegistration}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" class="input input-bordered input-warning w-full max-w-xs " required />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" name="email" class="input input-bordered input-warning w-full max-w-xs " required />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Password" class="input input-bordered input-warning w-full max-w-xs " />
                        </div>

                        {errorMessage}

                        <div class="card-actions justify-center">
                            <button type='submit' class="btn btn-accent" >Registration</button>
                        </div>
                    </form>

                    <p>Have an Account <Link to='/login' className='text-primary'>Please Login</Link> </p>

                    <div class="divider">OR</div>

                    <button onClick={() => signInWithGoogle()} class="btn btn-accent sm:btn-sm md:btn-md lg:btn-lg">Google Registration</button> */}

                </div>
            </div>
        </div>
    );
};

export default Registration;