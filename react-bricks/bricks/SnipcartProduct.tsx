import { imageOptimizer } from 'next/dist/server/image-optimizer'
import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  image: types.IImageSource
  id: string
  name: string
  price: string
  description: string
}

const SnipcartProduct: types.Brick<Props> = ({image, id, price, description, name}) => {
  return (
    <section className="w-full flex items-center px-6 pb-12 antialiased">
    <div className={`mx-auto max-w-7xl `}>
    <div className="container max-w-lg px-4 py-32 mx-auto md:max-w-none">
      <Image
        propName="image"
        alt="altText"
        imageClassName="w-64 h-64 lg:w-64 lg:h-64"
        
      />
      <p>{name}</p>
      <p>{price} {price && <span>€</span>}</p>
      <p className='mb-12'>{description}</p>
      <RichText
        propName="long-description"
        placeholder="Type a long product description..."
        renderBlock={({ children }) => (<span>{children}</span>)}
        allowedFeatures={[types.RichTextFeatures.Bold]}
      />
      <button className="snipcart-add-item rounded  mt-12 bg-blue-500 px-4 py-2 w-64 text-white"
        data-item-id={id}
        data-item-price={price}
        data-item-url="/products"
        data-item-image={image?.src}
        data-item-description={description}
        data-item-name={name}>
          Add to cart
      </button>
    </div>
    </div>
    </section>
  )
}

SnipcartProduct.schema = {
  name: 'SnipcartProduct',
  label: 'Snipcart Product Attributes',

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
