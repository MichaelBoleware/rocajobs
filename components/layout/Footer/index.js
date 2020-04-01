import React from 'react';
import { Layout } from 'antd';
import {footerCls} from './styles'

const AppFooter = Layout.Footer;
const Footer = () => (
 <AppFooter css={footerCls}>
  CSC 4101 - Group H - ROCA.sa Network
 </AppFooter>
);
export default Footer;