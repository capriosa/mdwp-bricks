import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'
import { Map, Marker, GeoJsonLoader } from "pigeon-maps"

interface Props {
  data: string
  
  
}

const MdwpMap: types.Brick<Props> = ({data}) => {

  return (
    data &&
    <div>
    
    <Map height={1000} defaultCenter={[50.879, 4.6997]} defaultZoom={6}>
      <GeoJsonLoader
        link={data}
        styleCallback={(feature, hover) =>
          hover
            ? { fill: '#93c0d099', strokeWidth: '2'}
            : { fill: '#d4e6ec99', strokeWidth: '1'}
        }
      />
    </Map>
    </div>
    ||
    <div className='text-center font-bold'>
     Enter a link to Geo Json Data on the right sidebar
    </div>
    
  )
}

MdwpMap.schema = {
  name: 'mdwpmap',
  label: 'MdwpMap',
  
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'data',
      label: 'GeoJson',
      type: types.SideEditPropType.Textarea,
    },
    
  ],
}

export default MdwpMap
