import HomeBody from '../HomeBody'
import React, { Component } from 'react';
import { Button, Drawer } from 'antd';
import Link from 'next/link';
import LeftMenu from '../LeftMenu';
import RightMenu from '../RightMenu';
import {headerCls} from './styles'
import { css } from '@emotion/core';

class Header extends Component {
  render() {
    return (
      <div css={headerCls}>
        <nav className="menuBar">
          <div className="logo">
            <Link href="/">
              <img src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
              <RightMenu />
            </div>
          </div>
        </nav>
      </div>
    );
    
  }
}


export default Header;