// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ChatSection from './components/ChatSection';
import DetailedSection from './components/DetailedSection';
import Footer from './components/Footer';
import customTheme from './theme';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Navbar />
      <HeroSection />
      <ChatSection />
      <DetailedSection />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
 