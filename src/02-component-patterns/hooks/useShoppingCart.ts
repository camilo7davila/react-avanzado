import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

    setShoppingCart(oldState => {
      // const productInCart: ProductInCart = oldState[product.id] || { ...product, count: 0 };
      // if (Math.max(productInCart.count + count, 0) > 0) {
      //   productInCart.count += count
      //   return {
      //     ...oldState,
      //     [product.id]: productInCart
      //   }
      // }
      // //Borrar el producto
      // const { [product.id]: toDelete, ...rest } = oldState;
      // return {
      //   ...rest
      // }
      // Para eliminar un objeto se desestructura y con el ...rest se deja lo que queremos
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldState;
        return {
          ...rest
        }
      }

      return {
        ...oldState,
        [product.id]: { ...product, count }
      }
    })

  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
