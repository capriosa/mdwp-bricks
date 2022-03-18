// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'
import { Swiper } from 'swiper/react'
import algoliasearch from 'algoliasearch/lite';
import {
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
interface Props {
  sliderview: boolean
}

const SnipcartProductsSlider: types.Brick<Props> = ({sliderview}) => {
  const searchClient = algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5');
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

function Hit(props) {
  return (
    <>
    <div className='flex flex-auto flex-grow justify-between mt-12'>
      <img className="h-28 mr-12" src={props.hit.image}  alt={props.hit.name} />
      <div className="mr-12 w-1/4">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="mr-12 w-3/4">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="-hit-price">${props.hit.price}
      <button className="snipcart-add-item rounded  w-64 my-12 bg-blue-500 py-2 text-white"
        data-item-id={props.hit.name}
        data-item-price={props.hit.price}
        data-item-url="/products"
        data-item-image={props.hit.image}
        data-item-name={props.hit.name}>
          Add to cart
      </button></div>
    </div></>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default SnipcartProductsSlider