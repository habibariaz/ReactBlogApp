import SignUp from './Components/SignUp';
import {Routes, Route, HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route index path='/' element={<SignUp />} /> */}
          <Route index path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
