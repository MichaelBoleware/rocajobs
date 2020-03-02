import Link from 'next/link';
import React from 'react';
import Footer from '../components/layout/Footer/Footer';
import ChatContainer from '../components/layout/ChatContainer/ChatContainer';
import Header from '../components/layout/Header';
import Chat from '../components/layout/Chat';



export default function Messages() {
    return (
      <ChatContainer>
        <Header />
          <Chat />
        <Footer />
      </ChatContainer>
    );
  }