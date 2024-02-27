import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './components/atoms/Button/Button'
import Image from './components/atoms/Image/Image'
import Discount from './components/atoms/Discount/Discount'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <div className='section'><h1>Elige tu <span>seguro ideal</span> </h1></div>
    <div className='cardContainer'>
      <div className='card'>
        <div>
          <Image src= "https://cdn-pe.comparabien.com/styles/webp/s3/2023-10/2022_oct_seguros-salud-min.jpg.webp?VersionId=F_ZMtHppPm1mlb3ND9mbJ.GiYAn0TjFo&itok=NGZsVtjc"
          alt= "Seguro de salud"/>
          <Discount>20%</Discount>
        </div>
        <div className='container'>
          <div className='informationContainer'>
            <p className='poppins-medium1'>Seguro de salud</p>
            <p className='poppins-subtitle'>Te atendemos en más de 300 clínicas</p>
          </div>
          <Button>Conoce más</Button>
        </div>
      </div>
      <div className='card'>
        <div className='imagecontainer'>
          <Image src= "https://www.apeseg.org.pe/wp-content/uploads/2021/11/GettyImages-1246800138.jpg"
          alt= "Seguro Vehicular"/>
          <Discount>20%</Discount>
        </div>
        <div className='container'>
          <div className='informationContainer'>
            <p className='poppins-medium1'>Seguro Vehicular</p>
            <p className='poppins-subtitle'>Calificados como excelente por el 98%</p>
          </div>
          <Button>Conoce más</Button>
        </div>
      </div>
      <div className='card'>
        <div className='imagecontainer'>
          <Image src= "https://www.rimac.com/ventadigital/soat/assets/rebrand/coverage/img-coverage-mob.jpg"
          alt= "SOAT"/>
          <Discount>20%</Discount>
        </div>
        <div className='container'>
          <div className='informationContainer'>
            <p className='poppins-medium1'>SOAT</p>
            <p className='poppins-subtitle'>Maneja seguro y libre de multas</p>
          </div>
          <Button>Conoce más</Button>
        </div>
      </div>
      <div className='card'>
        <div className='imagecontainer'>
          <Image src= "https://www.mapfre.com.pe/media/Consejos-financieros-para-la-educacion-superior-de-tus-hijos-1080x550.jpg"
          alt= "Vida Ahorro con Devolución"/>
          <Discount>20%</Discount>
        </div>
        <div className='container'>
          <div className='informationContainer'>
            <p className='poppins-medium1'>Vida Ahorro con Devolución</p>
            <p className='poppins-subtitle'>Te devolvemos hasta 200% de tus aportes</p>
          </div>
          <Button>Conoce más</Button>
        </div>
      </div>
    </div>
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
