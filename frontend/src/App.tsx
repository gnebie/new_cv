import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from "react-router-dom";
import { Suspense, lazy } from 'react';
import customTheme from './themes/theme';

const Navbar = lazy(() => import('./components/layout/Navbar'));
const Footer = lazy(() => import('./components/layout/Footer'));
const AppRoutes = lazy(() => import('./services/Routes'));  // Correction du chemin

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>  {/* Le Router doit être défini ici */}
        <Suspense fallback={<p>Chargement...</p>}>
          <Navbar />
          <AppRoutes />
          <Footer />
        </Suspense>
      </Router>
    </ChakraProvider>
  );
}

export default App;