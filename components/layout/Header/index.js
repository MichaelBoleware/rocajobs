import React, { Component } from 'react';
import Link from 'next/link';
import RightMenu from '../RightMenu';
import {headerCls} from './styles'

class Header extends Component {
  
  render() {
    return (
      <div css={headerCls}>
        <nav className="menuBar">
          <div className="logo">
            <Link href="/home">
              <img src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div className="menuCon">
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