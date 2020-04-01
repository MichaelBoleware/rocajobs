import React, { Component } from 'react';
import Link from 'next/link';
import RightMenu from './RightMenu';
import {headerCls} from './styles';
import {connect} from 'react-redux';

class Header extends Component {
  
  render() {
    return (
      <div css={headerCls}>
        <nav className="menuBar">
          <div className="logo">
            <Link href="/home">
              <img src="/images/logo.jpg" alt={this.props.username} />
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
function mapStateToProps(state){
  return {
      username: state.username,
      photourl: state.photourl,
      uid: state.uid,
      username: state.displayName
  }
}

export default connect(mapStateToProps)(Header);