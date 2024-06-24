import {useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import "./App.scss";
const App=()=>{
  const [route, setRoute]=useState('Login');
  return (
    <div className="app">
      <div className="buttons">
        <button onClick={()=>{setRoute('Home')}}>Home</button>
        <button onClick={()=>{setRoute('About')}}>About</button>
        <button onClick={()=>{setRoute('Contact')}}>Contact</button>
        <button onClick={()=>{setRoute('Login')}}>Login</button>
        <button onClick={()=>{setRoute('Register')}}>Register</button>
      </div>
      {route === 'Home'? <h1>Application HomePage</h1>: ''}
      {route === 'About' ? <About />: ''}
      {route === 'Contact'?<Contact />: ''}
      {route === 'Login'?<Login />: ''}
      {route === 'Register'?<Register />: ''}
    </div>
  )
}

export default App;