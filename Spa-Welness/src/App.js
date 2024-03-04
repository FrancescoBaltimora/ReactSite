import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Buy from './pages/Buy';
import Gift from './pages/Gift';
import Cart from './pages/Cart';
import Faq from './pages/Faq';
import Thanks from './pages/Thanks';
import Promo from './pages/Promo';
import About from './pages/About';
import Career from './pages/Career';
import Login from './pages/Login';
import User from './pages/User';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/#' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/gift' element={<Gift/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Faq' element={<Faq/>}/>
          <Route path='/thanks' element={<Thanks/>}/>
          <Route path='/promo' element={<Promo/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/Registration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
