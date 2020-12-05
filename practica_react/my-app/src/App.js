import Header from './Components/header/Header'
import './App.css';
import Lista from './Components/lista/Lista'
import Canciones from './Components/canciones/Canciones'



function App() {
  return (
    <div>
      <Header></Header>
      <div className= "container">

      <Lista>
      </Lista>
      </div>


    </div>
    
    
  );
}

export default App;
