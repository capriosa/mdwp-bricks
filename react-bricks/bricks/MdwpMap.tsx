import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'
import { Map, Marker, GeoJsonLoader, ZoomControl, Overlay, GeoJsonFeature } from "pigeon-maps"
import Select from 'react-select'

interface Props {
  data: string
  
  
}



const MdwpMap: types.Brick<Props> = ({data}) => {
  const [center, setCenter] = React.useState([51.879, 5.6997])
  const [zoom, setZoom] = React.useState(11)
  const [selectedOption, setSelectedOption] = React.useState(null);
  const options = [
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/gemeinden_simplify200.geojson', label: 'NRW' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/landkreise_simplify200.geojson', label: 'Baden-Württemberg' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleChange = (selectedOption) => {
    
    setSelectedOption(
      selectedOption = selectedOption.value,
    );
  };

  const handleClick = ({ event, latLng, pixel }) => {
    console.log('Map clicked!', latLng, pixel)
  }
  
  return (
    selectedOption &&
    <div>
    <Select 
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}/>
    {console.log(selectedOption)}
    <Map 
    
      height={1000} 
      center={[50.879, 7.6997]} 
      zoom={8} 
      
      onClick={handleClick}

      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    >
    <ZoomControl />
    
      <GeoJsonLoader
        link={selectedOption}
        
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
