import chevy from './chevy.png'
import './App.css';
import Header1 from './components/Header1'
import Footer from './components/Footer'
import Main from './components/Main'
import { useContext } from 'react'
import {Them,ThemeContext} from './components/ThemeContext'

function App() {
  const val = useContext(Them)
  return (
    <div className="App">
        <ThemeContext></ThemeContext>
       <Header1 />
    <img src={chevy} alt="" className="logo"/>
    <hr />
   <button onClick={()=>{val.handleThemo()}} style={val.themo==="light"?{color:"white",backgroundColor:"black"}:{color:"black",backgroundColor:"white"}}>Change Theme</button>
    <Main/>
     <Footer/>
    
    </div>

  );
}

export default App;
