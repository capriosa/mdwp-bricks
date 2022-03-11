// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'
import { Swiper } from 'swiper/react'


interface Props {
  sliderview: boolean
}

const SnipcartProductsSlider: types.Brick<Props> = ({sliderview}) => {
  return (
    

sliderview ?    
<div className='swiper-container  max-w-screen-lg'>
  <div className='swiper'>
  <Swiper
      slidesPerView={4}
      speed={400}
      grabCursor={true}
      
     
  >
      <div className='swiper-wrapper mx-auto'> 
       
        <Repeater 
        propName="products" 
        />
        
  </div> 
  </Swiper>  
  </div>
 </div>
 :
 <div className='max-w-screen-lg mx-auto'>
      <div className='flex flex-wrap'>
        <Repeater 
        propName="products" 
        />
      </div>
</div>



)
}

SnipcartProductsSlider.schema = {
  name: 'products',
  label: 'Snipcart Products Slider',
  getDefaultProps: () => ({
    sliderview: false,
    products: [],
    
  }),
  sideEditProps: [
    {
      name: 'sliderview',
      label: 'Slider View',
      type: types.SideEditPropType.Boolean,
    },
  ],
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

export default SnipcartProductsSlider