import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChatSection from './components/ChatSection';
import DetailedSection from './components/DetailedSection';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <HeroSection />
      <ChatSection />
      <DetailedSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
 