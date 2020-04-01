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
        <Highlight attribute="JobOpening_ID" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="Description" hit={props.hit} />
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
                    <h2>Salary</h2>
                    <RefinementList attribute="Salary" />
                    <h2>State</h2>
                    <RefinementList attribute="State" />
                    <h2>Level of Education</h2>
                    <RefinementList attribute="LevelEducation" />
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