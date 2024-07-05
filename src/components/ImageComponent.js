import React, { useState, useEffect } from 'react';
import { Buffer } from 'buffer';

const ImageComponent = ({imageStream}) => {
    const [imageSrc, setImageSrc] = useState();

    useEffect(() => {
        //const base64String = Buffer.from(imageStream, 'binary').toString('base64');
        setImageSrc(`data:image/jpeg;base64,${imageStream}`);
    }, []);

    return (
        <div>
            {imageSrc ? <img src={imageSrc} alt="Fetched from server" /> : <p>Loading...</p>}
        </div>
    );
};

export default ImageComponent;
