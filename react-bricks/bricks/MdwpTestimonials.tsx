import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
  
}

const MdwpTestimonials: types.Brick<Props> = (props) => {
  return (
    
    <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
    <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
                <p className="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase">
                  {
                    <Text
                      propName="subtitle"
                      placeholder="Type a text..."
                      renderBlock={({ children }) => (<span>{children}</span>)}
                    />
                  }
                </p>
                <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                {
                    <Text
                      propName="title"
                      placeholder="Type a text..."
                      renderBlock={({ children }) => (<span>{children}</span>)}
                    />
                  }
                </h2>
                <p className="my-6 text-lg text-gray-600">
                {
                    <Text
                      propName="leadingText"
                      placeholder="Type a text..."
                      renderBlock={({ children }) => (<span>{children}</span>)}
                    />
                  }
                </p>
                <a href="#_" className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10">
                <RichText
                  propName="buttonLabel"
                  placeholder="Type a text..."
                  renderBlock={({ children }) => (<span>{children}</span>)}
                  allowedFeatures={[types.RichTextFeatures.Link]}
                />
                </a>
            </div>
            <div className="w-full lg:w-1/2">
    <Repeater 
        propName="testimonials" 
    />
    </div>
    </div>
    </div>
    </section>
    
  )
}

MdwpTestimonials.schema = {
  name: 'mdwptestimonials',
  label: 'mdwp Testimonials',
  
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    testimonials: [],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
  repeaterItems: [
    {
      name: 'testimonials',
      itemType: 'mdwptestimonial',
      itemLabel: 'Testimonial',
      max: 3,
      min: 3
    },
  ],
}

export default MdwpTestimonials
