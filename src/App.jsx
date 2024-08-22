import Home from "./Page/Home"
import {GASTOS_DIARIOS, GASTOS_MENSUALES, HOME, LISTA_COMPRAS, LISTA_TAREAS, LOGIN, VER_TARJETA} from "./Routes/router"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Page/Login"
import ListaCompras from "./Page/ListaCompras"
import ListaTarea from "./Page/ListaTarea"
import GastoDiario from "./Page/GastoDiario"
import GastoMensual from "./Page/GastoMensual"
import VerTarjeta from "./Page/VerTarjeta"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path={LOGIN} element={<Login/>}></Route>
      <Route path={LISTA_COMPRAS} element={ <ListaCompras/>}></Route>
      <Route path={LISTA_TAREAS} element={ <ListaTarea/>}></Route>
      <Route path={GASTOS_DIARIOS} element={ <GastoDiario/>}></Route>
      <Route path={GASTOS_MENSUALES} element={ <GastoMensual/>}></Route>
      <Route path={HOME} element={<Home/>}></Route>
      <Route path={VER_TARJETA} element={<VerTarjeta/>}></Route>
      {/* 
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route>
      <Route path="" element={}></Route> */}

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
