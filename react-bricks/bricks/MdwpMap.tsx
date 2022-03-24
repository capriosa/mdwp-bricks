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
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/baden-wuerttemberg.geojson', label: 'Baden-Württemberg' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/bayern.geojson', label: 'Bayern' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/berlin-brandenburg.geojson', label: 'Berlin-Brandenburg' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/hessen.geojson', label: 'Hessen' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/rheinland-pfalz.geojson', label: 'Rheinland-Pfalz' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/mecklenburg.geojson', label: 'Mecklenburg-Vorpommern' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/niedersachsen.geojson', label: 'Niedersachsen' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/nrw.geojson', label: 'Nordrhein-Westfalen' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/saarland.geojson', label: 'Saarlang' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/sachsen.geojson', label: 'Sachsen' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/sachsen-anhalt.geojson', label: 'Sachsen-Anhalt' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/schleswig-holstein.geojson', label: 'Schleswig-Holstein' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/thueringen.geojson', label: 'Thüringen' },
    { value: 'https://raw.githubusercontent.com/capriosa/mdwp-bricks/main/maps.geojson', label: 'Marker' },
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
    
    <div>
      <div className='w-full p-2 bg-green-900'>
    <Select 
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        className="w-60"
        />
    </div>  
    <Map 
    
      height={1000} 
      center={[50.879, 7.6997]} 
      zoom={6} 
      
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
          : { fill: '#c6d1ffab', strokeWidth: '1'}
          
          
        }
      />
      
    </Map>
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
