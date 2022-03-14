// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';


interface Props {
  
}


const AlgoliaStore: types.Brick<Props> = () => {
  const searchClient = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
  return (
    


 <div className='max-w-screen-xl mx-auto'>
   <div className="ais-InstantSearch">
    
        <InstantSearch indexName="instant_search" searchClient={searchClient}>
        <div className='py-6'>
            <SearchBox />
        </div>
        <div className=' grid grid-cols-auto'>
            
            <div className='col-start-1 col-end-3 mr-4'>
              <ClearRefinements />
              <h2 className='my-6'>Brands</h2>
              <RefinementList className="" attribute="brand" />
              <h2 className='my-6'>Categories</h2>
              <RefinementList attribute="categories" isExpandable={true}/>
              <Configure hitsPerPage={8} />
            </div>
            
            <div className='col-start-4 col-end-12'>
            <Hits hitComponent={Hit} />
            <Pagination className="mt-4 mb-32"/>
            </div>
            
          
        </div>
        
        
      </InstantSearch> 
   </div>   
</div>

)
}

AlgoliaStore.schema = {
  name: 'algoliastore',
  label: 'Algolia Store',
}

function Hit(props) {
  return (
    <>
    <div className='flex flex-auto flex-grow justify-between mt-12'>
      <div className='w-64 flex justify-between'>
      <img className="h-28 mr-24" src={props.hit.image}  alt={props.hit.name} />
      </div>
      <div className="pl-12 w-1/4">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="w-3/4">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price text-lime-800">${props.hit.price}
      <button className="snipcart-add-item rounded  w-64 my-12 bg-blue-500 py-2 text-white"
        data-item-id={props.hit.name}
        data-item-price={props.hit.price}
        data-item-url="/algolia"
        data-item-image={props.hit.image}
        data-item-name={props.hit.name}>
          Add to cart
      </button></div>
    </div></>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default AlgoliaStore