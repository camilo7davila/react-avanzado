import { CSSProperties, FC, ReactElement, createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import { InitialValues, OnChangeArgs, Product, ProductContextProps, ProductoCardHandlers } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductoCardHandlers) => JSX.Element
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
  initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext;

export const ProductCard: FC<Props> = ({ product, children, className, style, onChange, value, initialValues }) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount: initialValues?.maxCount
    }}>
      <div className={`${styles.productCard}  ${className}`} style={style}>
        { 
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount!,
            product,
            increaseBy,
            reset
          })
        }
      </div>
    </Provider>
  )
}
