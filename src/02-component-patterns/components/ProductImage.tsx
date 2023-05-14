import { CSSProperties, useContext, useMemo, useState } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {

  const { product } = useContext(ProductContext);

  const [imgToShow, setImgToShow] = useState('');

  useMemo(() => {
    if (img) {
      setImgToShow(img)
    } else if(product.img)  {
      setImgToShow(product.img)
    } else {
      setImgToShow(noImage)
    }
  }, [img, product.img])

  return (
    <img className={`${styles.productImg} ${className}`} src={imgToShow} alt='Product' style={style} />
  );
}