import React from 'react';
import Link from 'next/link';
import Content from '../components/layout/Content';
import Footer from '../components/layout/Footer/Footer';
import Container from '../components/layout/Container/Container';
import Header from '../components/layout/Header';

const JobSearch = () => (
  <div>
   <Header />
        <Link href="/jobsummary">
          <a>login</a>
        </Link>
        <p>Hello Jobsearch.js</p>
   <Footer />
   </div>
 );
export default JobSearch;
  