import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithFallbackProps extends ImageProps {
    fallback: string;
}

const ImgWithFallback = (props: ImageWithFallbackProps) => {
    const { src, fallback, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallback);
            }}
        />
    );
};

export default ImgWithFallback;
