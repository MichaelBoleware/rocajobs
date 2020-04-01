import React from 'react';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import HomeBody from '../components/layout/HomeBody';
import { useContext } from 'react';
import UserContext from '../components/UserContext';

export default function home() {
  
  return (
  <Container>
    <Header />
     <HomeBody /> 
    <Footer />
  </Container>
  );
}