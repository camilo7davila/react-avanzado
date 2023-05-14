import { CSSProperties, FC, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard: FC<Props> = ({ product, children, className, style, onChange, value }) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value });

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
