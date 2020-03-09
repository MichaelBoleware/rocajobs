import Link from 'next/link';
import React from 'react';
import Footer from '../components/layout/Footer/Footer';
import Container from '../components/layout/Container/Container';
import Header from '../components/layout/Header';
import HomeBody from '../components/layout/HomeBody';

export default function Applications() {
    return (
      <Container>
        <Header />
        <div>
          <p>applications page</p>
        </div>
        <Footer />
      </Container>
    );
  }