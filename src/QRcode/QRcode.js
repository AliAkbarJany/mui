import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QRCodeCanvas } from 'qrcode.react';

const QRcode = () => {
    return (
        <div className='my-5 '>
            <h2 className=''>QR Code Is given Below</h2>
            <div className='mt-5 flex justify-center'>
                <QRCodeCanvas

                    value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                    size={126}
                    bgColor={"#2d252c"}
                    fgColor={"#de1212"}
                    level={"L"}
                    includeMargin={true}
                    imageSettings={{
                        src: "https://static.zpao.com/favicon.png",
                        x: undefined,
                        y: undefined,
                        height: 24,
                        width: 24,
                        excavate: true,
                    }}
                />
            </div>
            <div className='mt-5 flex justify-center'>
                <QRCodeSVG
                    value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
                    size={126}
                    bgColor={"#2d252c"}
                    fgColor={"#c2a40f"}
                    level={"L"}
                    includeMargin={true}
                    imageSettings={{
                        src: "https://static.zpao.com/favicon.png",
                        x: undefined,
                        y: undefined,
                        height: 24,
                        width: 24,
                        excavate: true,
                    }}
                />
            </div>
        </div>
    );
};

export default QRcode;