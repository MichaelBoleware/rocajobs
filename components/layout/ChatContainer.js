import Head from 'next/head';
import React from 'react';
import { css } from '@emotion/core';
import {
 node, string, oneOfType, object
} from 'prop-types';
import { Layout } from 'antd';


const layoutCls = css`
background:linear-gradient(transparent,rgb(218,165,32));
background-color:orange;
font-family: open-sans;
`;

const Container = ({
  children, 
  title = "ROCAjobs"
}) => (
 <Layout css={layoutCls} className="layout">
  <Head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
   <title>{title}</title>
  </Head>
  {children}
 </Layout>
);
Container.propTypes = {
 children: oneOfType([node, string]),
 title: string,
};
export default Container;