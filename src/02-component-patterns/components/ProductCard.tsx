import { CSSProperties, FC, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard: FC<Props> = ({ product, children, className, style }) => {

  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={`${styles.productCard}  ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  )
}
