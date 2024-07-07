import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from "./pages/Start.js"
import INF02 from './pages/INF02.js';
import INF03 from './pages/INF03.js';
import Oegzaminie from './pages/Oegzaminie.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Start/>} />
          <Route path='start' element={<Start/>} />
          <Route path='inf02' element={<INF02/>} />
          <Route path='inf03' element={<INF03/>} />
          <Route path='oegzaminie' element={<Oegzaminie/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
