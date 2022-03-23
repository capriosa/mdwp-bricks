import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'
import { Map, Marker, GeoJsonLoader, ZoomControl, Overlay } from "pigeon-maps"
import { features } from 'process'

interface Props {
  data: string
  
  
}



const MdwpMap: types.Brick<Props> = ({data}) => {
  const [center, setCenter] = React.useState([51.879, 5.6997])
  const [zoom, setZoom] = React.useState(11)
  
  return (
    data &&
    <div>
    
    <Map 
    
      height={1000} 
      center={[50.879, 9.6997]} 
      zoom={9} 
      
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
    <ZoomControl />
    
      <GeoJsonLoader
        link={data}
        
        styleCallback={(feature, hover) =>
          
          
          hover
          ? { fill: '#f7c4c399', strokeWidth: '2'}
          : { fill: '#c6d1fa99', strokeWidth: '1'}
          
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
