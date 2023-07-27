import react, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Sector from './Pages/Sector';
import Services from './Pages/Services';

function App() {

  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
  };

  return (
    <BrowserRouter basename='/accountant-task/' >
      <Header />
      <ScrollToTop />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sector' element={<Sector />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App
