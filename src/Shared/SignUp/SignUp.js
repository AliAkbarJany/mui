import React from 'react';
import { useState } from "react";
import './SignUp.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

// interface State {
//     amount: string;
//     password: string;
//     weight: string;
//     weightRange: string;
//     showPassword: boolean;
//   }

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    


    const handleSignUp = e => {
        e.preventDefault();
        const name=e.target.name.value
        const email=e.target.email.value
        console.log(name,email)
        // const password=event.target.password.value
        // if (name && email) {
        //     console.log(names, emails)
        // }


    }
    return (
        <div className='card-container mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <form onSubmit={handleSignUp}>
                            <TextField name="name" onChange={(e) => setName(e.target.value)} type="text" id="outlined-basic" label="Name" variant="outlined" />
                            <TextField name="email" onChange={(e) => setEmail(e.target.value)} type="email" id="filled-basic" label="Email" variant="filled" className='mt-5' />
                            <div class="card-actions justify-center">
                                <button type='submit' class="btn btn-accent" >Sign Up</button>
                            </div>
                        </form>

                        {/* password rule (1) */}
                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            onChange={handleChange}
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

                        {/* password rule (2) */}

                        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl> */}

                    </Box>
                </div>
            </div>
        </div>
    );
};

export default SignUp;