import React, { Children, useState } from 'react'
import { Text, RichText, Image, types } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const MdwpPopup: types.Brick<HeroUnitProps> = ({ padding }) => {
  const [popup, setPopup] = useState(false);
  return (
    <div
      className={`max-w-xl mx-auto px-6 relative ${
        padding === 'big' ? 'py-20' : 'py-12'
      }`}
    >
      <div className="flex flex-col items-center">
        <Image
          propName="icon"
          alt="Icon"
          maxWidth={80}
          aspectRatio={1}
          imageClassName="w-20 mb-5"
        />
        <Text
          renderBlock={(props) => (
            <h1 className="text-3xl sm:text-4xl text-center font-black text-gray-900 dark:text-white leading-tight mb-3">
              {props.children}
            </h1>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a title..."
          propName="title"
        />
        { popup && 
        <div className='mt-6 p-6 border-2 rounded border-blue-600 bg-pink-100 bg-opacity-50'>
        <RichText
          
          renderBlock={(props) => (
            <p className= "text-xl text-center leading-relaxed text-gray-700 dark:text-gray-100">
              {props.children}
            </p>
          )}
          placeholder="Type a text..."
          propName="text"
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Link,
          ]}
          renderCode={(props) => (
            <code className="text-sm py-1 px-2 bg-gray-200 dark:bg-gray-700 rounded">
              {props.children}
            </code>
          )}
        />
        </div>
          }
      </div>
      <div onClick={() => setPopup(!popup)} className="cursor-pointer p-4 text-white text-center w-64 mt-12 mx-auto rounded bg-blue-600">
        { popup ? "Close Popup" : "Open Popup"}</div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
MdwpPopup.schema = {
  name: 'mdwp-popup',
  label: 'mdwp Popup',
  getDefaultProps: () => ({
    padding: 'big',
    title: 'This is a custom Hero Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default MdwpPopup
