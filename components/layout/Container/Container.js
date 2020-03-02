import Head from 'next/head';
import React from 'react';
import {
 node, string, oneOfType, object
} from 'prop-types';
import { Layout } from 'antd';
import {layoutCls} from './styles';

const Container = ({
  children, 
  title = "ROCAjobs"
}) => (
 <Layout css={layoutCls} className="layout">
  <Head>
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