import { QrCode } from '@mui/icons-material';
import React from 'react';
import CreateQRcode from '../CreateQRcode/CreateQRcode';
import AllProducts from '../Products/Allproducts/AllProducts';
import QRcode from '../QRcode/QRcode';
import ReadQRcode from '../ReadQRcode/ReadQRcode';

const Home = () => {
    return (
        <div>
            <h2 className='text-3xl'>Welcome to Home Page</h2>
            <AllProducts></AllProducts>
            {/* <QRcode></QRcode> */}
            <div className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5'>
                <CreateQRcode></CreateQRcode>
                <ReadQRcode></ReadQRcode>
            </div>

        </div>
    );
};

export default Home;