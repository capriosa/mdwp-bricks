import React from 'react'
import { Text, RichText, Image, File, Repeater, types } from 'react-bricks/frontend'

interface Props {
  
}

const Airtable: types.Brick<Props> = (props) => {
  
const [opportunities, setOpportunities] = React.useState([]);
React.useEffect(() => {
  fetch("https://api.airtable.com/v0/appmzC2p8qnCB5zCl/no-code?api_key=keyNCtBerQSTKwG1i")
    .then((res) => res.json())
    .then((data) => {
      setOpportunities(data.records);
      console.log(opportunities)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
  return (
    <section className="relative w-full bg-white">
    
    <div className="flex grid max-w-screen-xl px-24 mx-auto flex-wrap h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
      {
      
      opportunities.map((record,index) => (
        <div key={index} className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
          <img className="block object-contain w-full" src={record.fields.Image[0].url} />
          <div className="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
          <a href="#_" className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white">{record.fields.Category}</a>
          <h2 className="mb-5 text-3xl font-bold"><a href="#_">{record.fields.Name}</a></h2>
          <p className="mb-2 text-sm font-normal text-purple-100 opacity-100">{record.fields.Description}</p>
          </div>
        </div>
      ))
    }
    </div>
    </section>
  )
}

Airtable.schema = {
  name: 'Airtable',
  label: 'Airtable',
  // category: '',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Airtable
