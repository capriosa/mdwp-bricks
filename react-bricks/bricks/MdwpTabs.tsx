import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}

const MdwpTabs: types.Brick<Props> = (props) => {
  return (
    
    <Repeater 
      propName="tabs" 
    
    />
  )
}

MdwpTabs.schema = {
  name: 'mdwp-tabs',
  label: 'mdwp Tabs',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    tabs: [],
  }),
  repeaterItems: [
    {
      name: 'tabs',
      itemType: 'tab',
      itemLabel: 'Tab',
      max: 10,
      min: 2
    },
  ],

}

export default MdwpTabs
