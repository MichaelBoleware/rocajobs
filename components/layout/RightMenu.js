import React, { Component } from 'react';
import { string } from 'prop-types';
import Link from 'next/link';
import { Menu, Dropdown, Button } from 'antd';

const menu= (
  <Menu >
  <Menu.Item>
    <Link   href="/profile">
      <a>Profile
        </a>
      </Link>
  </Menu.Item>
  <Menu.Item>
    <Link   href="/messages">
      <a>Messages
        </a>
      </Link>
  </Menu.Item> 
  <Menu.Item>
    <Link   href="/applications"> 
    <a>
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
          <Button size='large' shape= 'round'>Options</Button>
      </Dropdown>
    </div>
    );
  }
}

export default RightMenu;
