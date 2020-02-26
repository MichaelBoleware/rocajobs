import { css } from '@emotion/core';

export const homeCls = css`
    body { font-family: sans-serif; padding: 1em; }
    .ais-SearchBox { margin: 1em 0; }
    .ais-Pagination { margin-top: 1em; margin-left: 200px }
    .left-panel { float: left; width: 250px; }
    .right-panel { margin-left: 260px; }
    .ais-InstantSearch { max-width: 960px; overflow: hidden; margin: 0 auto }
    .ais-Hitsitem { margin-bottom: 1em; width: calc(50% - 1rem) }
    .hit-name { margin-bottom: .5em }
    .hit-description { color: #888; font-size: 14px; margin-bottom: .5em }
    	

.ais-SearchBox-submitIcon path,
.ais-SearchBox-resetIcon path {
  fill: red,
}

      `;