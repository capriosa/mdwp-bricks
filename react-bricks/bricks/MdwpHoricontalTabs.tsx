import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}

const MdwpHoricontalTabs: types.Brick<Props> = (props) => {
  return (
    <div className="w-3/4 mx-auto py-12 mb-10">
      <Text
        propName="text"
        placeholder="Type a text..."
        renderBlock={({ children }) => (<h1 className="text-5xl text-red-500 font-bold text-center py-36">{children}</h1>)}
      />
      <div className="tabs relative h-auto">          
        <Repeater 
          propName="horicontaltabs" 
        />
      </div>
    </div>
  )
}

MdwpHoricontalTabs.schema = {
  name: 'mdwp-horicontal-tabs',
  label: 'mdwp Horicontal Tabs',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    horicontaltabs: [],
  }),
  repeaterItems: [
    {
      name: 'horicontaltabs',
      itemType: 'horicontaltab',
      itemLabel: 'Tab',
      max: 10,
      min: 2
    },
  ],

}

export default MdwpHoricontalTabs
