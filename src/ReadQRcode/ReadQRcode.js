import QrScanner from 'qr-scanner';
import React, { useRef, useState } from 'react';

const ReadQRcode = () => {
    const [file, setFile] = useState(null)
    const [data, setdata] = useState(null)
    const fileRef = useRef()

    const handleClick = () => {
        fileRef.current.click()
    }

    const handleChange = async(e) => {
        const file = e.target.files[0]
        setFile(file)
        const result = await QrScanner.scanImage (file)
        console.log(result)
        setdata(result)
        
    }
    console.log(data)

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mt-5">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Scan/Read QR code</h2>
                    <div >
                        {/* <input type="text" value={qrValuePro} onChange={(e) => setQrValuePro(e.target.value)} placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={qrValuePrice} onChange={(e) => setQrValuePrice(e.target.value)} placeholder="Price" class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={qrValueDes} onChange={(e) => setQrValueDes(e.target.value)} placeholder="Descriptio" class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={qrValueQua} onChange={(e) => setQrValueQua(e.target.value)} placeholder="Quantity" class="input input-bordered w-full max-w-xs" /> */}

                        {/* ...................................... */}
                        {/* <input type="text" name='productName' onChange={handleModify} placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' onChange={handleModify} placeholder="Price" class="input input-bordered w-full max-w-xs my-3" />
                        <input type="text" name='description' onChange={handleModify} placeholder="Description" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' onChange={handleModify} placeholder="Quantity" class="input input-bordered w-full max-w-xs my-3" /> */}

                        <div class=" mt-3">
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
                        <div>
                            {
                                file && <img src={URL.createObjectURL(file)} alt="QR code" />
                            }

                            {
                                data && <p>{data}</p>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadQRcode;