import React, { Children } from 'react'
import { Text, RichText, types } from 'react-bricks/frontend'
import { Colors, BgColors, HeadlineAlignment, ParagraphAlignment } from '../utils/colors'

//=============================
// Local Types
//=============================

interface ContentUnitProps {
  color: types.IColor
  paragraphColor: types.IColor
  bgColor: types.IColor
  headlineAlignment?:  'left' | 'center' | 'right'
  paragraphAlignment?:  'left' | 'center' | 'right'
  fullHeight: boolean
  background: types.IImageSource
  title: string
  text: string
}

//=============================
// Component to be rendered
//=============================
const MdwpContentUnit: types.Brick<ContentUnitProps> = ({ background, color, bgColor, headlineAlignment, paragraphAlignment,fullHeight }) => {
  return (
     

<section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
    <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
        <div className="flex flex-col w-full md:flex-row">

            
            <div className="flex justify-between">
                <h1 className={`relative flex flex-col text-6xl p-2 font-extrabold text-left text-black
                text-${headlineAlignment} 
                ${
                  bgColor?.className
                }
                ${color?.className}
                `}>
                    Crafting
                    <span>Powerful</span>
                    <span>Experiences</span>
                </h1>
            </div>
            
            <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
                <img src="https://cdn.devdojo.com/images/december2020/designs3d.png" className="object-cover mt-3 mr-5 h-80 lg:h-96" />
            </div>
        </div>

        
        <div className="my-16 border-b border-gray-300 lg:my-24"></div>

        
        <h2 className="text-left text-brown xl:text-xl">
            Building beautiful designs for your next project. We've unlocked the secret to converting visitors into customers. Download our re-usable and extandable components today.
        </h2>
    </div>
</section>

    
  )
}

//=============================
// Brick Schema
//=============================
MdwpContentUnit.schema = {
  name: 'mdwp-content-unit',
  label:'mdwp Content Unit',
  getDefaultProps: () => ({
    Color: { color: '#000000', className: 'text-black' },
    ParagraphColor: { color: '#ffffff', className: 'text-white' },
    Background: {className: 'br-gray'},
    BgColor: { color: '#ffffff', className: 'bg-white' },
    HeadlineAlignment: { className: 'text-center' },
    ParagraphAlignment: { className: 'text-center' },
    fullHeight: false,
    title: 'This is a custom Content Unit',
    text: "We are a hi-tech web development company committed to deliver great products on time. We love to understand our customers' needs and exceed expectations.",
  }),
  sideEditProps: [
    {
      name: 'background',
      label: 'Background Image',
      type: types.SideEditPropType.Image,
    },
    {
      name: 'color',
      label: 'Headline Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: Colors
      },
    },
    {
      name: 'bgColor',
      label: 'Headline Background Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: BgColors
      },
    },
    {
      name: 'paragraphColor',
      label: 'Paragraph Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: Colors
      },
    },
    {
      name: 'headlineAlignment',
      label: 'Headline Alignment',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: HeadlineAlignment
      },
    },
    {
      name: 'paragraphAlignment',
      label: 'Paragraph Alignment',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: ParagraphAlignment
      },
    },
    {
      name: 'fullHeight',
      label: 'Full Height',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default MdwpContentUnit
