import { css } from '@emotion/core';

export const headerCls = css`
background:linear-gradient(rgb(218,165,32),rgb(240,230,140));
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  ul {
    background-color: #04070b;
    li {
      cursor: pointer;
      color: #fff;
    }
  }
  .menuBar {

    overflow: auto;
  }
  .logo {
    width: 220px;
    float: left;
    img {
      display: inline-block;
      font-size: 20px;
      height: 80px;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
  .menuCon {
    width: calc(100% - 220px);
    float: left;
  }
  .menuCon .rightMenu {
    float: right;
    padding: 20px;

  }

`;