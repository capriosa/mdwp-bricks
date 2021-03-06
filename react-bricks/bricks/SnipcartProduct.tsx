import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  image: types.IImageSource
  id: string
  name: string
  price: string
  description: string
}

const SnipcartProduct: types.Brick<Props> = ({image, id, price, description, name, ...rest}) => {
  return (
    
    <div className="swiper-slide w-64 px-4 py-6 bg-white rounded-xl mt-6" {...rest}>
      <Image
        propName="image"
        alt={name}
        imageClassName="w-64 mb-4"
        />

      <p>{name}</p>
      <p className='text-lime-700'>{price} {price && <span>€</span>}</p>
      <p>{description}</p>
      
      <button className="snipcart-add-item w-full rounded  mt-12 bg-blue-500 py-2 text-white"
        data-item-id={id}
        data-item-price={price}
        data-item-url="/products"
        data-item-image={image?.src}
        data-item-description={description}
        data-item-name={name}>
          Add to cart
      </button>
    </div>
    
  )
}

SnipcartProduct.schema = {
  name: 'snipcartproduct',
  label: 'Snipcart Product',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      name: 'image',
      label: 'Image',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'id',
      label: 'Product ID',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'price',
      label: 'Price',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'name',
      label: 'Product Name',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'description',
      label: 'Description',
      type: types.SideEditPropType.Textarea,
    },
  ],
}

export default SnipcartProduct
