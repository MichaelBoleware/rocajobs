import React from 'react';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import HomeBody from '../components/layout/HomeBody';

const HomePage = () => (
  <Container>
    <Header />
     <HomeBody /> 
    <Footer />
  </Container>
);

export default HomePage;