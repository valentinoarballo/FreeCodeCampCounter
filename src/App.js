import logo from './logo.svg';
import './App.css';
import logoitec from './images/image.png'; 

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='frecodecamp-logo' 
        src = {logoitec}
        alt = 'Logo del Itec'
        />
      </div>
      <div className='contenedor-contador'>
        
      </div>
    </div>
  );
}

export default App;
