import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/loginPage/login.tsx';
import Main from './components/MainPage/Main.tsx';
import Signup from './components/SignupPage/Signup.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login />}/>
        <Route path='/main' element = {<Main />}/>
        <Route path='/signup' element = {<Signup />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
