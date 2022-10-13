import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Menu from '../components/menu/menu';
import Shop from '../components/shopping/shopping';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
   const [loading, setLoading] = useState(false);
   
   useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    },1000);
   }, []);

  return (
      <> 
          <Navbar />
          {loading ? (
            <div className="loader-container"></div>) :
          (<div>
            <Routes>
              <Route path='/' element={<Menu />} />
              <Route path='/shopping' element={<Shop />} />
            </Routes>
          </div>)}
          <Footer />
      </>

    
    

  );
}

export default App;
