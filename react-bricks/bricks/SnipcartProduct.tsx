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
    
    <div className=" w-1/5 px-4 py-6 bg-white rounded-xl mr-6 mt-6" {...rest}>
      <Image
        propName="image"
        alt="altText"
        imageClassName="w-80 mb-4"
        
      />
      <p>{name}</p>
      <p>{price} {price && <span>€</span>}</p>
      <p className='mb-12'>{description}</p>
      <div className="max-w-1/4">
      <RichText
        propName="long-description"
        placeholder="Type a long product description..."
        renderBlock={({ children }) => (<div className='max-w-1/4'>{children}</div>)}
        allowedFeatures={[types.RichTextFeatures.Bold]}
        
      />
      </div>
      <button className="snipcart-add-item w-full rounded  mt-12 bg-blue-500 px-4 py-2 text-white"
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
      type: types.SideEditPropType.Text,
    },
  ],
}

export default SnipcartProduct
