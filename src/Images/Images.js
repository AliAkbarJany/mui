import React from 'react';
import './Images.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import computer from '../photos/qr code/computer.png'
import mobile from '../photos/qr code/mobile.png'
import table from '../photos/qr code/table.png'
import QRimages from '../QRcode/QRimages';

const Images = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
    ];

    const qrCodes = [
        {
            img: computer,
            name: 'Computer'
        },
        {
            img: mobile,
            name: 'Mobile'
        },
        {
            img: table,
            name: 'Table'
        },
    ]
    return (
        <div >
            <h2>images page</h2>
            <div className='images-list flex justify-center'>
                <div>
                    <ImageList sx={{
                        width: {
                            xs: 300,
                            sm: 600,
                            md: 900,
                            lg: 1200,
                            xl: 1536
                        }, height: 450
                    }} variant="woven" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>

            {/* QR CODE Images................................... */}

            <div className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5'>
                {
                    qrCodes.map(qrCode =><QRimages qrCode={qrCode}></QRimages>)
                }
            </div>

        </div>
    );
};

export default Images;