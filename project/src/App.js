import { Route, Routes } from 'react-router-dom';
import './App.css';
// import './App2.css'
import HomePage from './pro/HomePage';
import Login2 from './pro/Login2';
import Signup2 from './pro/Signup2';
import Contacts from './pro/Contacts';
import Laptop from './pro/Laptop';
import Tv from './pro/Tv';
import Appl from './pro/Appl';
import Game from './pro/Game';
import Kich from './pro/Kich';
import Mobile from './pro/Mobile';
import ProductPage from './pro/ProductPage1';
// import Login2 from './pro/Login2';
// import Signup2 from './pro/Signup2';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login2></Login2>}></Route>
        <Route path='/signup' element={<Signup2></Signup2>}></Route>
        <Route path='/contacts' element={<Contacts></Contacts>}></Route>
        <Route path='/laptop' element={<Laptop></Laptop>}></Route>
        <Route path='/tv' element={<Tv></Tv>}></Route>
        <Route path='/appl' element={<Appl></Appl>}></Route>
        <Route path='/game' element={<Game></Game>}></Route>
        <Route path='/kich' element={<Kich></Kich>}></Route>
        <Route path='/mobile' element={<Mobile></Mobile>}></Route>
        <Route path='/laptop/product1' element={<ProductPage></ProductPage>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
