// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper";
// Import Swiper styles


const mdwpSlider: types.Brick = () => {
  return (
    
<div className='swiper'>
<Swiper
      
      slidesPerView={1}
      speed={400}
      grabCursor={true}
      loop={true}
      effect= "fade"
  
      
>
      <div className='swiper-wrapper'>
        <Repeater 
        propName="slides" 
        
        />
      </div>    
      
  
      
      </Swiper>
    </div>
  )
}

mdwpSlider.schema = {
  name: 'mdwpSlider',
  label: 'mdwp Slider',
  getDefaultProps: () => ({
    slides: [],
  }),
  repeaterItems: [
    {
      name: 'slides',
      itemType: 'slide',
      itemLabel: 'Slide',
      max: 10,
      min: 2
    },
  ],
}

export default mdwpSlider