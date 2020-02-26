
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import React from 'react';
import Link from 'next/link';
import { Button, Drawer } from 'antd';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import HomeBody from '../components/layout/HomeBody';
import RightMenu from '../components/layout/RightMenu';

const HomePage = () => (
  <Container>
    <Header />
     <HomeBody /> 
    <Footer />
  </Container>
);

export default HomePage;