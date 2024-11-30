import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import LoginPage from './pages/LoginPage';
import ABM from './pages/ABM/abm';
import Menuabm from './pages/ABM/menuabm';
import BajaMenu from './pages/ABM/bajamenu';
import BajaConfirmada from './pages/ABM/bajaconfirmada';
import BajaConfirmacion from './pages/ABM/bajaconfirm';
import VehicleList from './pages/RTO/VehicleList';
import Turnos from './pages/Turnos/Turnos';
import "bootstrap/dist/css/bootstrap.min.css";
import VehiclePage from './pages/RTO/VehiclePage';
import Altamenu from './pages/ABM/altamenu';
import AltaConfirmada from './pages/ABM/altaconfirmada';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/abm" element={<ABM />} />
          <Route path="/altamenu" element={<Altamenu />} />
          <Route path="/altaconfirmada" element={<AltaConfirmada />} />
          <Route path="/bajamenu" element={<BajaMenu />} />
          <Route path="/bajaconfirmada" element={<BajaConfirmada />} />
          <Route path="/bajaconfirm" element={<BajaConfirmacion />} />
          <Route path="/menuabm" element={<Menuabm />} />
          <Route path="/Vehiculos" element={<VehicleList />} />
          <Route path="/turnos" element={<Turnos />} />
          <Route path="/Vehiculos/:patente" element={<VehiclePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App