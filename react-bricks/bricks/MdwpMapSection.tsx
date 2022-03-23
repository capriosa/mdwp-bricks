import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'
import { Map, Marker } from "pigeon-maps"

interface Props {
  
}

const MdwpMaps: types.Brick<Props> = (props) => {
  return (
    <div className="w-6xl bg-gray-100 min-h-screen flex justify-center items-center">

    <Map height={1000} defaultCenter={[50.879, 4.6997]} defaultZoom={6}>             
    <Repeater 
      propName="maps" 
    />
    </Map>
    </div>
  )
}

MdwpMaps.schema = {
  name: 'mdwp-map-section',
  label: 'mdwp Map',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    maps: [],
  }),
  repeaterItems: [
    {
      name: 'maps',
      itemType: 'mdwpmap',
      itemLabel: 'Marker',
      max: 10,
      min: 1
    },
  ],

}

export default MdwpMaps
