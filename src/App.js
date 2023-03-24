import './App.css';
import Artboard from './blocks/Artboard';
import Logo from './imgs/logo5.svg';
import "./styles/Logo.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="logo" src={Logo} alt="refleckt"/>
        </header>
      <Artboard />
    </div>
  );
}

export default App;
