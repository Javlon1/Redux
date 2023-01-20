import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Contact from './Components/Login/Contact/Contact';
import Name from './Components/Login/Name/Name';
import Password from './Components/Login/Password/Password';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';

function App() {
  const [render, setRender] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login render={render} setRender={setRender} />}>
          <Route path='' element={<Name render={render} setRender={setRender} />} />
          <Route path='contact' element={<Contact render={render} setRender={setRender} />} />
          <Route path='password' element={<Password render={render} setRender={setRender} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
