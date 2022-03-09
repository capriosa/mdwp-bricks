import React, { useState } from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}


const Tab: types.Brick<Props> = (...rest) => {
  const [tab, showTab ] = useState(false)
  
  return (
    <>
    
    <div className='p-12 flex' {...rest} >
      <div onClick={() => showTab(!tab)}>Tab</div>
      </div>
      {tab ?
      <div className="flex flex-row">
      <Text
        
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (<span>{children}</span>)}
      />
      </div>
      :
      null
}
    
    </>
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
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Tab
