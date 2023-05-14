import { useEffect, useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {

  const [titleExample, setTitleExample] = useState('Titulo afuera');
  const [imageExample, setImageExample] = useState<string>('./coffee-mug.png');

  useEffect(() => {
    setTimeout(() => {
      setTitleExample('Titulo afuera cambió');
      setImageExample('')
    }, 5000);
  }, [])


  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
      }}>

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>

        <ProductCard
          product={product}
          className='bg-dark text-white'
        >
          <ProductImage img={imageExample} className='custom-image' />
          <ProductTitle title={titleExample} className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage img={imageExample} style={{}} />
          <ProductTitle title={titleExample} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }}/>
        </ProductCard>
      </div>
    </div>
  )
}
