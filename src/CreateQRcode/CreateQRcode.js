import React, { useState } from 'react';
import QRCode from 'qrcode'
import { async } from '@firebase/util';

const CreateQRcode = () => {

    {/* Method Number (2) */}

    // const [qrValuePro, setQrValuePro] = useState("")
    // const [qrValuePrice, setQrValuePrice] = useState("")
    // const [qrValueDes, setQrValueDes] = useState("")
    // const [qrValueQua, setQrValueQua] = useState("")
  

    const [qrImageUrl, setQrImageUrl] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault()
        const productName = event.target.productName.value
        const price = event.target.price.value
        const description = event.target.description.value
        const quantity = event.target.quantity.value

        console.log(productName, price, description, quantity)


        const products = {
            productName,
            price,
            description,
            quantity,

        }
        console.log(products)
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


            {/* Method Number (2) */}
        // if (!qrValuePro || !qrValuePrice || !qrValueDes || !qrValueQua) {
        //     alert("Please enter some value")
        // }

        {/* Method Number (1) */}
        const response = await QRCode.toDataURL([productName, price, description, quantity])

        {/* Method Number (2) */}
        // const response = await QRCode.toDataURL([qrValuePro,qrValuePrice,qrValueDes,qrValueQua])


        console.log(response)
        setQrImageUrl(response)

    }
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Create QR code</h2>
                    <form onSubmit={handleSubmit}>

                        {/* Method Number (1) */}
                        <input type="text" name='productName' placeholder="Product Name" class="input input-bordered w-full max-w-xs" required/>
                        <input type="number" name='price' placeholder="Price" class="input input-bordered w-full max-w-xs my-3" />
                        <input type="text" name='description' placeholder="Description" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' placeholder="Quantity" class="input input-bordered w-full max-w-xs my-3" />


                            {/* Method Number (2) */}
                            
                        {/* <input type="text" name='productName' value={qrValuePro} onChange={(e) => setQrValuePro(e.target.value)} placeholder="Product Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='price' value={qrValuePrice} onChange={(e) => setQrValuePrice(e.target.value)} placeholder="Price" class="input input-bordered w-full max-w-xs my-3" />
                        <input type="text" name='description' value={qrValueDes} onChange={(e) => setQrValueDes(e.target.value)} placeholder="Descriptio" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='quantity' value={qrValueQua} onChange={(e) => setQrValueQua(e.target.value)} placeholder="Quantity" class="input input-bordered w-full max-w-xs my-3" /> */}



                        <div class=" my-3">
                            <button type='submit' class="btn btn-primary">Cretae QR code</button>
                        </div>
                        <button class="btn btn-success" type='submit'>
                            Add A Product
                        </button>
                    </form>
                    {
                        qrImageUrl && <div>
                            <a href={qrImageUrl} download="qr.png">
                                <img src={qrImageUrl} alt="QR Code" />
                            </a>

                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default CreateQRcode;