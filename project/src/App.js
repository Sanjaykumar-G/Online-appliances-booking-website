import { Route, Routes } from 'react-router-dom';
import './App.css';
// import './App2.css'
import HomePage from './pro/HomePage';
import Login2 from './pro/Login2';
import Signup2 from './pro/Signup2';
// import Login2 from './pro/Login2';
// import Signup2 from './pro/Signup2';


function App() {
  return (
    <div >
      {/* <Signup2/> */}
      {/* <Login2/> */}
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login2></Login2>}></Route>
        <Route path='/signup' element={<Signup2></Signup2>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
