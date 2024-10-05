import './App.css';
import Kartyak from './components/Kartyak';
import {lista} from './adatlista';
function App() {


  return (
    <div className="App">
      <header className="App-header">
      Elso App
      </header>
      <article>
      <Kartyak lista={lista} />
      </article>
      <footer>Demian Imre</footer>

    </div>
  );
}



export default App;
