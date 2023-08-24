import logo from './logo.svg';
import './App.css';
import logoitec from './images/image.png'; 
import Boton from './components/boton';

function App() {

  const manejarClic = () => {
    console.log('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

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
        <Boton 
        texto = "Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}/>
        
        <Boton
        texto = "Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
