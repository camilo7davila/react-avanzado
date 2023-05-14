import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 15
        }}
      >
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
              <button onClick={reset}>reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {/* si no se llega al isMaxCount, ocultar */}
              {
                (!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>)
              }
              <span>{count} - { maxCount }</span>
            </>
          )
        }
      </ProductCard>
    </div>
  )
}
