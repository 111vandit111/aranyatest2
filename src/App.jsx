import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Villas from './pages/villas/Villas';


function App() {

  return (
<BrowserRouter >
  <Routes>
    <Route path='/aranyatest2' element={<Home />} />
    <Route path='/aranyatest2/about' element={<About />} />
    <Route path='/aranyatest2/stay' element={<Villas />} />
  </Routes>
</BrowserRouter>
  )
}

export default App
