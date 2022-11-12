import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Menu from '../components/menu/menu';
import Shop from '../components/shopping/shopping';
import Mission from '../components/Mission/Mission';
import Belts from '../components/Products_detail/belts';
import Straps from '../components/Products_detail/straps';
import LiftStraps from '../components/Products_detail/liftStraps';
import Pagenotfound from '../components/pagenotfound/pageNotFound';
import Articles from '../components/shopping/articles';

import './App.css';
import { Route, Routes} from 'react-router-dom';
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
          (
            <Routes>
              <Route path='/' element={<Menu />} />
              <Route path='/mission' element={<Mission />} />
              <Route path='/shopping/*' element={<Shop />}>
                <Route path="article" element={<Articles />} />
                <Route path="belts" element={<Belts />}/>
                <Route path="wraps" element={<Straps />}/>
                <Route path="straps" element={<LiftStraps />}/>
              </Route>
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
          )}
          <Footer />
      </>

    
    

  );
}

export default App;
