import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  image: types.IImageSource
  tag: string
  name: string
  price: string
  description: string
}

const TeaserCard: types.Brick<Props> = ({image, tag, price, description, name, ...rest}) => {
  return (
    
      <div {...rest} className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                <Image
                propName="image"
                alt={name}
                imageClassName="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                />
                
                <div className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white">
                <span>{tag}</span>
                </div>
                
                <h2 className="text-lg font-bold sm:text-xl md:text-2xl">{name}</h2>
                <p className="text-sm text-gray-500">{description}</p>
                <p className="pt-2 text-xs font-medium"><span className="snipcart-add-item underline"
                  data-item-id={name}
                  data-item-price={price}
                  data-item-url="/teasergrid"
                  data-item-image={image?.src}
                  data-item-description={description}
                  data-item-name={name}>
                  Add to cart
                </span>
                <span className="mx-1 text-gray-600">{price} {price ? '€' : ''}</span></p>
            </div>
    
  )
}

TeaserCard.schema = {
  name: 'teasercard',
  label: 'Teaser Card',
  hideFromAddMenu: true,
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'image',
      label: 'Image',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'tag',
      label: 'Tag',
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

export default TeaserCard
