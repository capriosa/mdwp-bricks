// Slider.tsx
import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  HierarchicalMenu,
  RefinementList,
  SortBy,
  Pagination,
  ClearRefinements,
  Highlight,
  Hits,
  HitsPerPage,
  Panel,
  Configure,
  SearchBox,
  Snippet,
  ToggleRefinement,
} from 'react-instantsearch-dom';
import {
  ClearFiltersMobile,
  NoResults,
  Ratings,
  ResultsNumberMobile,
  SaveFiltersMobile,
} from '../../widgets';
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
            <ResultsNumberMobile /><br/>
              <ClearRefinements />
              
              <Panel className="mt-6" header="Categories">
                <HierarchicalMenu
                  attributes={[
                    'hierarchicalCategories.lvl0',
                    'hierarchicalCategories.lvl1',
                  ]}
                />
              </Panel>
              <Panel className="mt-6" header="Brands">
                <RefinementList
                  attribute="brand"
                  searchable={true}
                  translations={{
                    placeholder: 'Search for brands…',
                  }}
                />
              </Panel>
              <Panel header="Free shipping">
                <ToggleRefinement
                  attribute="free_shipping"
                  label="Display only items with free shipping"
                  value={true}
                />
              </Panel>

            </div>
            
            <div className='col-start-4 col-end-12'>
            <header className="flex mb-2 container-header container-options">
            <SortBy
              className="container-option mr-2 "
              defaultRefinement="instant_search"
              items={[
                {
                  label: 'Sort by featured',
                  value: 'instant_search',
                },
                {
                  label: 'Price ascending',
                  value: 'instant_search_price_asc',
                },
                {
                  label: 'Price descending',
                  value: 'instant_search_price_desc',
                },
              ]}
            />
            <HitsPerPage
              className="container-option mr-2"
              items={[
                {
                  label: '16 hits per page',
                  value: 16,
                },
                {
                  label: '32 hits per page',
                  value: 32,
                },
                {
                  label: '64 hits per page',
                  value: 64,
                },
              ]}
              defaultRefinement={16}
            />
            <Pagination className="text-xl"/>
            </header>
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
    <div className='flex flex-auto flex-grow space-x-4'>
      <div className='w-64'>
      <img className="h-24" src={props.hit.image}  alt={props.hit.name} />
      </div>
      <div className="w-1/4">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="w-3/4">
        <Highlight attribute="description" hit={props.hit} />
        
      </div>
      <div className="hit-price text-lime-800 tex-lg">${props.hit.price}
      <button className="snipcart-add-item rounded  w-40 mt-24 bg-blue-500 py-2 text-white"
        data-item-id={props.hit.name}
        data-item-price={props.hit.price}
        data-item-url="/algolia"
        data-item-image={props.hit.image}
        data-item-name={props.hit.name}>
          Add to cart
      </button></div>
    </div>
    </>
    )
}
  


Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default AlgoliaStore