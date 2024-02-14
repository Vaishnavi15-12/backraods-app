

import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Services from './components/Services';
import Tours from './components/Tours';
import Hero from './components/Hero';

function App() {
  return (
   <>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Services />
      <Tours />
      <Footer />

   </>
  );
}

export default App;
