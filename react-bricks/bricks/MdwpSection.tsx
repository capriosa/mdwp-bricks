import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}

const MdwpSection: types.Brick<Props> = (props) => {
  return (
    <div>
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (<span>{children}</span>)}
      />
    </div>
  )
}

MdwpSection.schema = {
  name: 'MdwpSection',
  label: 'MdwpSection',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default MdwpSection
