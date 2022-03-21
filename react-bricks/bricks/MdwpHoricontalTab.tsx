import React, { useState } from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'
import Fade from 'react-reveal/Fade';
interface Props {
  horicontaltab: string
  text: string
}


const HoricontalTab: types.Brick<Props> = ({horicontaltab, text, ...rest}) => {
  const [checked, setChecked] = useState(true);
  
  return (
    <div className="tab text-red-500 w-min mr-6 float-left" {...rest}>
      <input className="hidden" type="radio" name="tab" id={horicontaltab}
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="p-18 cursor-pointer" htmlFor={horicontaltab}>{horicontaltab}</label>
      
          <div className="tab-content w-full transition-all absolute top-7  left-0 right-0 bottom-0 pt-10 hidden">
          <Fade bottom><div className='flex justify-between'>
          <div className='bg-red-500 mt-32 pt-24 pb-20 w-3/5 pr-28 px-8'>
          <Text
            propName="headline"
            placeholder="Type a text..."
            renderBlock={({ children }) => (<h1 className='text-white pt-10 text-4xl mb-4 font-bold'>{children}</h1>)}
    
          />
          <RichText
            propName="text"
            placeholder="Type a text..."
            renderBlock={({ children }) => (<p className='text-white border-b-2 border-white font-semibold text-4xl leading-normal'>{children}</p>)}
            allowedFeatures={[types.RichTextFeatures.Bold]}
          />
          </div>
          <Image
            propName="image"
            alt="altText"
            maxWidth={200}
            aspectRatio={1}
            imageClassName="shadow-2xl shadow-red-500-50 absolute left-1/2 w-1/2"
          />
          </div>
          </Fade>
      </div>
    </div>
  )
}

HoricontalTab.schema = {
  name: 'horicontaltab',
  label: 'Tab',
  hideFromAddMenu: true,
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    tab: 'This is a tab',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'horicontaltab',
      label: 'Tab',
      type: types.SideEditPropType.Text,
    }
  ],
}

export default HoricontalTab
