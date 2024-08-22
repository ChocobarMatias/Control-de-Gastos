import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

const UpdateTarjeta = () => {

  const initialState = {
    NombreTarjeta: "",
    MontoPagar: 0,
    Estado: "",
    FechaCierre: "",
    FechaVencimiento: "",
    FechaRegistro: "",
    TotalTarjeta: ""  // Corregido
  };

  const [datos, setDatos] = useState(initialState);
  const { id } = useParams();

  const getDatos = async () => {
    let response = await axios.get("http://localhost:3000/Tarjetas");
    setDatos(response.data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.put("http://localhost:3000/Tarjetas/" + id, {
        NombreTarjeta: datos.NombreTarjeta,
        MontoPagar: datos.MontoPagar,
        Estado: datos.Estado,
        FechaCierre: datos.FechaCierre,
        FechaVencimiento: datos.FechaVencimiento,
        FechaRegistro: datos.FechaRegistro,
        TotalTarjeta: datos.TotalTarjeta  // Corregido
      });
      if (response) {
        alert("Actualización realizada correctamente");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  useEffect(() => { getDatos() }, []);

  return (
    <div>
      <Form style={{display:"flex",justifyContent:"center",alignItems:"center"}}className="modalCrear">
        <Form.Group style={{width:"40%"}} className="mb-3" controlId="exampleForm.ControlInput1">
          <Row>
            <Form.Label>NombreTarjeta:</Form.Label>
            <Form.Control  type="text" placeholder="Nombre de la Tarjeta" onChange={handleChange} name="NombreTarjeta" value={datos.NombreTarjeta} />
            <br />
            <Form.Label>Monto a Pagar:</Form.Label>
            <Form.Control type="number" placeholder="Monto a Pagar" onChange={handleChange} name="MontoPagar" value={datos.MontoPagar} />
            <br />
            <Form.Label>Estado del Pago:</Form.Label>
            <Form.Control type="text" placeholder="Estado" onChange={handleChange} name="Estado" className="Estado" value={datos.Estado} />
            <br />
            <Form.Label>Fecha de Cierre:</Form.Label>
            <Form.Control type="text" placeholder="Fecha de Cierre" onChange={handleChange} name="FechaCierre" className="FechaCierre" value={datos.FechaCierre} />
            <br />
            <Form.Label>Fecha de Vencimiento:</Form.Label>
            <Form.Control type="text" placeholder="Fecha de Vencimiento" onChange={handleChange} name="FechaVencimiento" className="FechaVencimiento" value={datos.FechaVencimiento} />
            <br />
            <Form.Label>Fecha de Registro:</Form.Label>
            <Form.Control type="text" placeholder="Fecha de Registro" onChange={handleChange} name="FechaRegistro" className="FechaRegistro" value={datos.FechaRegistro} />
          </Row>
        </Form.Group>
      </Form>
      <br />
      <Button onClick={handleSave}>GUARDAR</Button>
    </div>
  );
};

export default UpdateTarjeta;
