import GastosVehiculos from "../CRUD/Vehiculo/GastosVehiculos"
import ImpuestosDomiciliario from "../CRUD/Impuestos/ImpuestosDomiciliario"
import TarjetasCredito from "../CRUD/Tarjetas/TarjetasCredito"
import Conectividad from "../CRUD/Conectividad/Conectividad"
import Educacion from "../CRUD/Educacion/Educacion"
import DeudaAPagar from "../CRUD/GastoPagar/DeudaAPagar"
import DeudaACobrar from "../CRUD/DeudaCobrar/DeudaACobrar"
import { useState } from "react"
import Aside from "./Aside"
import { Button, Col, Collapse, Row } from "react-bootstrap"


const Main = () => {

  // const [open, setOpen] = useState(false);

  return (
    <>
    <Row>
      <Col md={10}>
      <br /><br /><br />
      <TarjetasCredito/>
      <ImpuestosDomiciliario/>
      <Conectividad/>
      <Educacion/>
      <GastosVehiculos/>
      <DeudaAPagar/>
      <DeudaACobrar/>
      </Col>
      <Col md={2}>
      {/* <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
        Informacion Adicional
      </Button> */}
      {/* <Collapse in={open}> */}
        <div id="example-collapse-text">
          Mostar informacion Adicional.
          <Aside/>
        </div>
      {/* </Collapse> */}
      </Col>
    </Row>
    </>
  )
}

export default Main
