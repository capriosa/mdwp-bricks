import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'


interface Props {
  
}

const MdwpTinyLink: types.Brick<Props> = (props) => {
  return (
    <div></div>
  
    
  )   
}

MdwpTinyLink.schema = {
  name: 'MdwpTinyLink',
  label: 'MdwpTinyLink',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default MdwpTinyLink
