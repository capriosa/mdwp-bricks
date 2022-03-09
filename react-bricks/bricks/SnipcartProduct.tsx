import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}

const SnipcartProduct: types.Brick<Props> = (props) => {
  return (
    <div>
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (<span>{children}</span>)}
      />
      <button className="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-url="/products"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/assets/images/starry-night.jpg"
        data-item-name="The Starry Night">
          Add to cart
      </button>
    </div>
  )
}

SnipcartProduct.schema = {
  name: 'SnipcartProduct',
  label: 'SnipcartProduct',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default SnipcartProduct
