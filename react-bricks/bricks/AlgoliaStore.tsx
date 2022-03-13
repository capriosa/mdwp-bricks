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
    


 <div className='w- mx-auto'>
   <div className="ais-InstantSearch">
        
        <InstantSearch indexName="instant_search" searchClient={searchClient}>
          <div className="left-panel mt-6">
            <ClearRefinements />
            <div className='flex'>
              <h2 className='my-6 mr-32 w-32'>Brands</h2>
              <h2 className='my-6'>Categories</h2>
            </div>
            <div className='flex'>
            
            <RefinementList className="mr-32 w-32" attribute="brand" />
            
            <RefinementList attribute="categories" />
            </div>
            <Configure hitsPerPage={8} />
          </div>
          <div className="mt-12">
            <p>
            <SearchBox />
            </p>
            <div className='mt-12'>
            <Hits hitComponent={Hit} />
            </div>
            <Pagination />
           
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
      <img className="h-28 mr-12" src={props.hit.image}  alt={props.hit.name} />
      <div className="mr-12 w-1/4">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="mr-12 w-3/4">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">${props.hit.price}
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