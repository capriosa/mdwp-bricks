import React, { useState } from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  tab: string
  text: string
}


const Tab: types.Brick<Props> = ({tab, text, ...rest}) => {
  const [checked, setChecked] = useState(true);
  
  return (
    <div {...rest}>
      <input className="hidden" type="radio" name="tab" id={tab}
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="block border-b p-2 w-full text-white cursor-pointer bg-blue-500" htmlFor={tab}>
        {tab}
      </label>
      <div className="panel h-0 overflow-hidden transition-all">
        {text}
      </div>
    </div>
  )
}

Tab.schema = {
  name: 'tab',
  label: 'Tab',
  hideFromAddMenu: true,
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    tab: 'This is a tab',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
 
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'tab',
      label: 'Tab',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'text',
      label: 'Text',
      type: types.SideEditPropType.Textarea,
    },
  ],
}

export default Tab
