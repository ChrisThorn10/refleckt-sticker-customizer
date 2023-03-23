import './App.css';
import Artboard from './blocks/Artboard';
import Logo from './imgs/logo5.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={Logo} alt="refleckt" style={{"width": 255, "height": "auto"}}/>
        </header>
      <Artboard />
    </div>
  );
}

export default App;
