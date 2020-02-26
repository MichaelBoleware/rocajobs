import React from 'react';
import Link from 'next/link';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';

const JobSearch = () => (
  <Container title="Search">
   <Header />
   <Content><div>
        <Link href="/jobsummary">
          <a>login</a>
        </Link>
        <p>Hello Jobsearch.js</p>
      </div></Content>
   <Footer />
  </Container>
 );
export default JobSearch;
  