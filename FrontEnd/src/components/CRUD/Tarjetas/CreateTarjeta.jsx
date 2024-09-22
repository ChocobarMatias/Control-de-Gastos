import { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from "axios";

const CreateTarjeta = () => {

  const initialState = {
    NombreTarjeta: "",
    MontoPagar: 0,
    Estado: "",
    FechaCierre: "",
    FechaVencimiento: "",
    FechaRegistro: "",
    TotalTarjeta: 0
  };

  const [datos, setDatos] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);
  const [fechaRegistro, setFechaRegistro] = useState("");

  const getDatos = async () => {
    let response = await axios.get("http://localhost:3000/Tarjetas");
    setDatos(response.data);
  };

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  // Función para mostrar la fecha y hora actual
  useEffect(() => {
    let date = new Date();
    let año = date.getFullYear();
    let mes = date.getMonth() + 1;
    let dia = date.getDate();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    if (dia < 10) dia = "0" + dia;
    if (mes < 10) mes = "0" + mes;
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    setFechaRegistro(`${dia}/${mes}/${año} - ${horas}:${minutos}:${segundos}`);
  }, []); // Solo necesita ejecutarse una vez al montar el componente

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:3000/Tarjetas", {
        NombreTarjeta: datos.NombreTarjeta,
        MontoPagar: datos.MontoPagar,
        Estado: datos.Estado,
        FechaCierre: datos.FechaCierre,
        FechaVencimiento: datos.FechaVencimiento,
        FechaRegistro: fechaRegistro,
        TotalTarjeta: datos.TotalTarjeta
      });
    
      if (response) {
        setShowAlert(true);
        getDatos();
       
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);
  const hideAlert = () => { setShowAlert(false); };


  return (
    <div>
      <Form style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="modalCrear">
        <Form.Group style={{ width: "40%" }} className="mb-3" controlId="exampleForm.ControlInput1">
          <Row>
            <Form.Label> Nombre de la Tarjeta: </Form.Label>
            <Form.Control type="text" placeholder="Nombre de la Tarjeta" onChange={handleChange} name="NombreTarjeta" className="NombreTarjeta"/>
            <br />
            <Form.Label> Monto a Pagar: </Form.Label>
            <Form.Control type="number" placeholder="Monto a Pagar" onChange={handleChange} name="MontoPagar" className="MontoPagar"/>
            <br />
            <Form.Label> Estado del Pago: </Form.Label>
            <Form.Control as="select" onChange={handleChange} name="Estado" value={datos.Estado || ""}  className="Estado"required >
              <option value="">Seleccione un Estado</option>
              <option value="Pagado">Pagado</option>
              <option value="Pendiente">Pendiente</option>
            </Form.Control>
            <br />
            <Form.Label> Fecha de Cierre: </Form.Label>
            <Form.Control type="text" placeholder="Fecha de Cierre" onChange={handleChange} name="FechaCierre" className="FechaCierre"/>
            <br />
            <Form.Label> Fecha de Vencimiento: </Form.Label>
            <Form.Control type="text" placeholder="Fecha de Vencimiento" onChange={handleChange} name="FechaVencimiento" className="FechaVencimiento"/>
            <br />
            <Form.Label> Fecha de Registro: </Form.Label>
            <Form.Control type="text" placeholder="Fecha de Registro" value={fechaRegistro} name="FechaRegistro" className="FechaRegistro" readOnly/>
          </Row>
        </Form.Group>
      </Form>
      <br />
      <Button onClick={handleSave}>GUARDAR</Button>
      {showAlert && (<SweetAlert success title={<span style={{ color: 'black' }}>Gracias</span>} onConfirm={hideAlert}> 
                   <span style={{ color: 'black' }}>Tarjeta Agregada Correctamente!</span> 
                   </SweetAlert>)}
    </div>
  );
};

export default CreateTarjeta;
