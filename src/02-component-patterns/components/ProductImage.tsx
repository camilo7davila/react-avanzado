import { useContext, useMemo, useState } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductImage = ({ img = '' }) => {

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
    <img className={styles.productImg} src={imgToShow} alt='Product' />
  );
}