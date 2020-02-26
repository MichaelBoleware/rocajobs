import React, { Component } from 'react';
import { string } from 'prop-types';
import Link from 'next/link';
import { Menu, Dropdown, Button } from 'antd';

const menu= (
  <Menu >
  <Menu.Item>
    <Link   href="/profile">
      <a target="_blank" rel="noopener noreferrer">Profile
        </a>
      </Link>
  </Menu.Item>
  <Menu.Item>
    <Link   href="/messages">
      <a target="_blank" rel="noopener noreferrer">Messages
        </a>
      </Link>
  </Menu.Item> 
  <Menu.Item>
    <Link   href="/applications"> 
    <a target="_blank" rel="noopener noreferrer">
        Pending applications 
        </a>
        </Link>
  </Menu.Item>
</Menu>
);

class RightMenu extends Component {
  state = {
    visible: false,
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
      <Dropdown overlay={menu} placement="bottomLeft">
          <Button type="primary">Options</Button>
      </Dropdown>
    </div>
    );
  }
}

export default RightMenu;
