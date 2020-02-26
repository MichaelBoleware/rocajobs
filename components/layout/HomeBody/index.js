
import algoliasearch from 'algoliasearch/lite';
import React, { Component } from 'react';
import {homeCls} from './styles';
import Content from '../Content';

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

const searchClient = algoliasearch('B1G2GM9NG0', 'aadef574be1f9252bb48d4ea09b5cfe5');

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
          <Content>
              <div css={homeCls}>
                <div className="ais-InstantSearch">
                  <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
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
            </Content>
    );
}
}

export default HomeBody;