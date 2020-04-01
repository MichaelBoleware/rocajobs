import Link from 'next/link';
import React, { useContext } from 'react';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import Chat from '../components/Chat';
import UserContext from '../components/UserContext';



export default function Messages() {
  console.log(useContext(UserContext));
    return (
      <Container>
        <Header />
          <Chat user={useContext(UserContext)}/>
        <Footer />
      </Container>
    );
  }