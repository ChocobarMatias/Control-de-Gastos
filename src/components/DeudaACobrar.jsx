import { useState,useEffect } from "react"
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../CSS/Tarjeta.css"
import { SlArrowDown,SlArrowUp } from "react-icons/sl";
import Form from 'react-bootstrap/Form';

const DeudaACobrar = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [showTarjeta,setShowTarjeta] = useState(false);
  
  const getTarjeta =async()=>{
    try{
    let response = await axios.get("http://localhost:3000/Tarjetas")
    console.log(response.data)
    setTarjetas(response.data) 
  } catch (error) {
    console.error(error);
  }
  }
  
  const showClick = ()=>{
    setShowTarjeta(!showTarjeta);
    console.log("hola = "+showTarjeta)
  }
  
  useEffect(() => { getTarjeta();}, []);
  
  
    return (
      <div>
        <hr />
      <div className="header-container">
        <h3>Deudas/Prestamos/Compras con Tarjeta que preste y tengo para Cobrar  : </h3>
        {!showTarjeta && ( <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label> -- Monto Total a Cobrar : </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" className="inputTotal" />
        </Form.Group>
      </Form>)}

        <div className="toggle-container" onClick={showClick}>
          <b>{showTarjeta ? "   ===>  Ocultar..." : "===>  Mostrar Mas..."}</b>
          {showTarjeta ? <SlArrowDown className="iconFlecha"/> : <SlArrowUp className="iconFlecha"/>}
        </div>
        
      </div>
      {showTarjeta && (
        <div className="contenedorTarjeta">
          {tarjetas.map((tarjeta) => (
            <MDBTable bordered borderColor="primary" key={tarjeta.id}>
              <MDBTableHead className="bg-success text-white">
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Nombre de Tarjeta</th>
                  <th scope='col'>Monto a Pagar</th>
                  <th scope='col'>Estado del pago</th>
                  <th scope='col'>Fecha de Registro</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>{tarjeta.id}</td>
                  <td>{tarjeta.NombreTarjeta}</td>
                  <td>{tarjeta.MontoPagar}</td>
                  <td>{tarjeta.Estado}</td>
                  <td>{tarjeta.FechaRegistro}</td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          ))}
        </div>
      )}
      <br />
      {showTarjeta && (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Monto Total a Cobrar : </Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>)}
    </div>
    )
}

export default DeudaACobrar
