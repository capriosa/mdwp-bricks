// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'



const SnipcartProducts: types.Brick = () => {
  return (
    
<section className="w-full flex flex-wrap justify-center bg-gray-100 px-6 pb-12 antialiased">
    
      
        <Repeater 
        propName="products" 
        
        />
    
</section>  
  )
}

SnipcartProducts.schema = {
  name: 'products',
  label: 'Snipcart Products Grid',
  getDefaultProps: () => ({
    products: [],
  }),
  repeaterItems: [
    {
      name: 'products',
      itemType: 'snipcartproduct',
      itemLabel: 'Product',
      max: 30,
      min: 4
    },
  ],
}

export default SnipcartProducts