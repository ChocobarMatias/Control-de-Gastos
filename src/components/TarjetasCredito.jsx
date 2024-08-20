import { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../CSS/Tarjeta.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {Form,Row,Button} from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import CreateTarjeta from "./CRUD/Tarjetas/CreateTarjeta";

const TarjetasCredito = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [showTarjeta, setShowTarjeta] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // const [totalTarjeta,setTotalTarjeta] = useState(0)

  const getTarjeta = async () => {
    
    try {
      let response = await axios.get("http://localhost:3000/Tarjetas");
      console.log(response.data);
      setTarjetas(response.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  const showClick = () => {
    setShowTarjeta(!showTarjeta);
   
  };

  useEffect(() => { getTarjeta(); }, []);

  // Zona del modal

const handleSave =()=>{
  setShowAlert(true);
}

  // const initialState = {
  //   NombreTarjeta: "",
  //   MontoPagar: 0,
  //   Estado: "",
  //   FechaCierre: "",
  //   FechaVencimiento: "",
  //   FechaRegistro: "",
  //   TotalTarjeta: ""
  // };

  // const [datos, setDatos] = useState(initialState);
  // const [showAlert, setShowAlert] = useState(false);

  // const handleChange = (e) => {
  //   setDatos({ ...datos, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let response = await axios.post("http://localhost:3000/Tarjetas", datos);
  //     if (response) {
  //       setShowAlert(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const hideAlert = () => {
    setShowAlert(false);
  };


  return (
    <div>
      <div className="header-container">
        <h2>Tarjetas de Credito : </h2>
        {!showTarjeta && ( <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label> -- Monto Total a pagar de Tarjetas : $</Form.Label>
          <Form.Control type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        </Form.Group>
      </Form>)}

        <div className="toggle-container" onClick={showClick}>
          <b>{showTarjeta ? "   ===>  Ocultar..." : "===>  Mostrar Mas..."}</b>
          {showTarjeta ? <SlArrowDown className="iconFlecha"/> : <SlArrowUp className="iconFlecha"/>}
        </div>
        
      </div>
      {showTarjeta && (
        <div className="contenedorTarjeta">
          <Row>
          
            <MDBTable bordered borderColor="primary" >
              <MDBTableHead className="bg-success text-white">
                <tr>
                  <th scope='col'>Id</th>
                  <th scope='col'>Nombre de Tarjeta</th>
                  <th scope='col'>Monto a Pagar</th>
                  <th scope='col'>Estado del pago</th>
                  <th scope='col'>Fecha de Cierre</th>
                  <th scope='col'>Fecha de Vencimiento</th>
                  <th scope='col'>Fecha de Registro</th>
                </tr>
              </MDBTableHead>
              {tarjetas.map((tarjeta) => (
              <MDBTableBody key={tarjeta.id}>
                <tr>
                  <td>{tarjeta.id}</td>
                  <td>{tarjeta.NombreTarjeta}</td>
                  <td>{tarjeta.MontoPagar}</td>
                  <td>{tarjeta.Estado}</td>
                  <td>{tarjeta.FechaCierre}</td>
                  <td>{tarjeta.FechaVencimiento}</td>
                  <td>{tarjeta.FechaRegistro}</td>
                </tr>
              </MDBTableBody>
                ))}
            </MDBTable>
        
          </Row>
        </div>
      )}
      <br />
      {showTarjeta && (
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> -- Monto Total a pagar de Tarjetas : $</Form.Label>
        <Form.Control type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        </Form.Group>
      </Form>)}

{/* modal de create */}
<Button onClick={() => setShowAlert(true)}>Agregar Tarjeta</Button>

      <SweetAlert
        show={showAlert}
        title="Crear Tarjeta"
        onConfirm={handleSave}
        onCancel={hideAlert}
        showCancel
        confirmBtnText="Guardar"
        cancelBtnText="Cancelar"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        closeOnClickOutside={false}
        className="modal"
      >

       <CreateTarjeta/>

        {/* <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre de Tarjeta:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre de la Tarjeta"
              onChange={handleChange}
              name="NombreTarjeta"
              className="NombreTarjeta"
            />
            <Form.Label>Monto a Pagar:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Monto a Pagar"
              onChange={handleChange}
              name="MontoPagar"
              className="NombreTarjeta"
            />
            <Form.Label>Estado del Pago:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Estado"
              onChange={handleChange}
              name="Estado"
              className="NombreTarjeta"
            />
            <Form.Label>Fecha de Cierre:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fecha de Cierre"
              onChange={handleChange}
              name="FechaCierre"
              className="NombreTarjeta"
            />
            <Form.Label>Fecha de Vencimiento:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fecha de Vencimiento"
              onChange={handleChange}
              name="FechaVencimiento"
              className="NombreTarjeta"
            />
            <Form.Label>Fecha de Registro:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fecha de Registro"
              onChange={handleChange}
              name="FechaRegistro"
              className="NombreTarjeta"
            />
          </Form.Group>
        </Form> */}
      </SweetAlert>


    </div>
  );
};

export default TarjetasCredito;
