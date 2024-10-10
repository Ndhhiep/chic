import {BrowserRouter,HashRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home';
import Products from './components/product';
import Ceiling from './components/ceiling';
import Wall from './components/wall';
import Lamp from './components/lamp';
import Outdoor from './components/outdoor';
import Fan from './components/fan';
import Accent from './components/accent';
import Led from './components/led';
import About from './components/about';
import Sitemap from './components/sitemap';
import Gallery from './components/gallery';
import Contact from './components/contact';
import Faq from './components/faq';
import Smart_led from './components/smart_led';
import Spot_led from './components/spot_led';
import Decor_led from './components/decor_led';
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/ceiling' element={<Ceiling/>}/>
          <Route path='/products/wall' element={<Wall/>}/>
          <Route path='/products/lamp' element={<Lamp/>}/>
          <Route path='/products/outdoor' element={<Outdoor/>}/>
          <Route path='/products/fan' element={<Fan/>}/>
          <Route path='/products/accent' element={<Accent/>}/>
          <Route path='/products/led' element={<Led/>}/>
          <Route path='/products/led/smart' element={<Smart_led/>}/>
          <Route path='/products/led/spot' element={<Spot_led/>}/>
          <Route path='/products/led/decor' element={<Decor_led/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/sitemap' element={<Sitemap/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
