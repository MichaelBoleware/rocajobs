import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {homeCls} from './styles';
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

  // configure algolia
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
  );


const index = process.env.ALGOLIA_JOB_OPENINGS;

function Hit(props) {
  return (
    <div css="homeCls">
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
    </div>
  );
}


class HomeBody extends Component {
    render() {
        return (
              <div css={homeCls}>
                <div className="ais-InstantSearch">
                  <InstantSearch searchClient={searchClient} indexName={index}>
                  <div className="left-panel">
                    <ClearRefinements />
                    <h2>Brands</h2>
                    <RefinementList attribute="brand" />
                    <Configure hitsPerPage={8} />
                  </div>
                  <div className="right-panel">   
                    <SearchBox />
                    <Hits hitComponent={Hit}/>
                    <Pagination />
                  </div>
                  </InstantSearch>
                </div>   
            </div>
    );
}
}

export default HomeBody;