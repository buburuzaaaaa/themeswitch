// import logo from './logo.svg';
import chevy from './imgs/chevy.png'
import Ls9 from './imgs/ls9.jpg'
import './App.css';
import Header1 from './components/Header1'
function App() {
  return (
    <div className="App">
       <Header1 />
    <img src={chevy} alt="" className="logo"/>
    <hr />
     <div className='ls9'>
      <img src={Ls9} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi ipsa iste similique beatae aperiam. Ratione dolorem recusandae nam totam iste, voluptatibus minima eaque tenetur nulla ipsam minus, provident accusantium eveniet ea cumque voluptatum consequatur quia a quo omnis, autem iure libero asperiores! Autem, optio? Labore consequatur quos accusamus delectus!</p>
     </div>
    </div>

  );
}

export default App;
