import React, { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DashboardCaficultor from './pages/DashboardCaficultor';

export default function App() {
  const [vistaActual, setVistaActual] = useState('home');

  return (
    <>
      {vistaActual === 'home' && <Home cambiarVista={setVistaActual} />}
      {vistaActual === 'login' && <Login cambiarVista={setVistaActual} />}
      {vistaActual === 'registro' && <Signup cambiarVista={setVistaActual} />}
      {vistaActual === 'dashboard' && <DashboardCaficultor cambiarVista={setVistaActual} />}
    </>
  );
}