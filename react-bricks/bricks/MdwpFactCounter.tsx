import { clear } from 'console';
import React, { useState } from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'
import IntersectionVisible from 'react-intersection-visible';

interface Props {
  count: string
  fact: string
  text: string
}

let id = [];


const Fact: types.Brick<Props> = ({count, fact, text, ...rest}) => {
  const [seconds, setSpeed] = useState(0);
  const onShow = (e) => {
    
   id.push(setInterval(() => tick(), 225))
   
  }
  
  const onHide = (e) => {
    
      setSpeed(0)
      id.map((item) =>
      clearInterval(item))
      
  }
  
  const tick = () => {
    
    setSpeed(prevSpeed => prevSpeed < parseInt(count) ? prevSpeed + 1 : parseInt(count))
    
  }
  


  return (
    
    <div className='w-1/3 text-center text-pink-500 text-6xl font-bold' {...rest}>
      <IntersectionVisible onHide={ e => onHide( e ) }  onShow={ e => onShow( e ) }>
      <span className='w-4 transition-all'>{seconds ? seconds : "  "}</span>
      </IntersectionVisible>
      <span>{fact}</span>
      <p className='text-base mt-4 text-black'>{text}</p>
    </div>
    
  )
}

Fact.schema = {
  name: 'fact',
  label: 'Fact',
  hideFromAddMenu: true,
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    tab: 'This is a fact',
    text: "Years",
 
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'count',
      label: 'Count',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'fact',
      label: 'Fact',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'text',
      label: 'Text',
      type: types.SideEditPropType.Text,
    }
  ],
}

export default Fact
