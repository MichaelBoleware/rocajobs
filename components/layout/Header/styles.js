import { css } from '@emotion/core';

export const headerCls = css`
  background-color: #04070b;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  ul {
    background-color: #04070b;
    li {
      cursor: pointer;
      color: #fff;
    }
  }
  .menuBar {
    padding: 0 20px;
    overflow: auto;
  }
  .logo {
    width: 220px;
    float: left;
    img {
      display: inline-block;
      font-size: 20px;
      padding: 19px 20px;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
  .menuCon {
    width: calc(100% - 220px);
    float: left;
  }
  .menuCon .ant-menu-item {
    padding: 0px 5px;
    a {
      color: #ff3957;
    }
    &:hover {
      border-bottom: 2px solid transparent;
      color: #fff;
    }
  }
  .menuCon .ant-menu-item-selected {
    border-bottom: 2px solid transparent;
    color: #ff3957;
  }
  .menuCon .ant-menu-submenu-title {
    padding: 10px 20px;
  }
  .menuCon .ant-menu-item,
  .menuCon .ant-menu-submenu-title {
    padding: 10px 15px;
  }
  .menuCon .ant-menu-horizontal {
    border-bottom: none;
  }
  .menuCon .leftMenu {
    float: left;
  }
  .menuCon .rightMenu {
    float: right;
  }
  .barsMenu {
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 15px;
    display: none;
    background: none;
    border: 1px solid #ff3957;
  }
  .barsBtn {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #ff3957;
    position: relative;
  }
  .barsBtn:after,
  .barsBtn:before {
    content: attr(x);
    width: 20px;
    position: absolute;
    top: -6px;
    left: 0;
    height: 2px;
    background: #ff3957;
  }
  .barsBtn:after {
    top: auto;
    bottom: -6px;
  }

`;