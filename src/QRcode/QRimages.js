import React, { useRef, useState } from 'react';
import QRcode from '../QRcode/QRcode';
import QrScanner from 'qr-scanner';

// ai khane (qrCode) Images component thake ansi....
const QRimages = ({ qrCode }) => {
    const { name, img } = qrCode
    // const [qrImageUrl, setQrImageUrl] = useState("")

    // Scan QR code...........
    const [file, setFile] = useState(null)
    const [data, setdata] = useState(null)
    const fileRef = useRef()

    const handleClick = () => {
        fileRef.current.click()
    }

    const handleChange = async (e) => {
        const file = e.target.files[0]
        setFile(file)
        const result = await QrScanner.scanImage(file)
        console.log(result)
        setdata(result)

    }
    console.log(data)
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    {
                        img && <div>
                            <a href={img} download={name}>
                                <img src={img} alt="QR Code" />
                            </a>

                        </div>
                    }
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    {/* <div class="card-actions">
                        <button class="btn btn-primary">Scan Now</button>
                    </div> */}
                </div>

                {/* Scan QR code................................. */}
                <div class=" my-3">
                    <button
                        onClick={handleClick}
                        type='submit'
                        class="btn btn-accent">

                        Scan QR code
                    </button>
                </div>

                <input
                    type="file"
                    ref={fileRef}
                    onChange={handleChange}
                    accept='.png, .jpg, .jpeg' className='hidden'
                />
                <div className='my-3'>
                    {
                        file && <img src={URL.createObjectURL(file)} alt="QR code" />
                    }

                    {
                        data && <p>{data}</p>
                    }
                </div>
            </div>

            {/* <div>
                <QRcode></QRcode>
            </div> */}

        </div>
    );
};

export default QRimages;