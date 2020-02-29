import React from 'react';
import { Layout } from 'antd';
import { css } from '@emotion/core';
const footerCls = css`
 text-align: center;
 background: #04070b;
 color: #fff;
 margin-top: 25px;
`;
const AppFooter = Layout.Footer;
const Footer = () => (
 <AppFooter css={footerCls}>
  CSC 4101 - Group H - ROCA.sa Network
 </AppFooter>
);
export default Footer;