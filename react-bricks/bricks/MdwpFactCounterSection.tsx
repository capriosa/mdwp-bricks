import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}

const MdwpTabs: types.Brick<Props> = (props) => {
  return (
    <div className="w-6xl bg-gray-100 min-h-screen flex justify-center items-center">
                 
    <Repeater 
      propName="facts" 
    />
    
    </div>
  )
}

MdwpTabs.schema = {
  name: 'mdwp-fact-counter-section',
  label: 'mdwp Fact Counter',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    facts: [],
  }),
  repeaterItems: [
    {
      name: 'facts',
      itemType: 'fact',
      itemLabel: 'Fact',
      max: 10,
      min: 1
    },
  ],

}

export default MdwpTabs
