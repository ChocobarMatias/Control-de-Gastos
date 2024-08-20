import { useState} from "react";
import {Form,Button,Row} from "react-bootstrap";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const CreateTarjeta = () => {
  // const navigate = useNavigate();
  
  const initialState = {
      
      NombreTarjeta: "",
      MontoPagar: 0,
      Estado:"",
      FechaCierre:"",
      FechaVencimiento:"",
      FechaRegistro:"",
      TotalTajeta:""
  }

const [datos,setDatos] = useState(initialState)

const handleChange = (e) =>{
  setDatos({...datos,[e.target.name]:e.target.value})
}

const handleSubmit = async()=>{
  // e.preventDefault()
  console.log("hola")
  try{
     let response = await axios.post("http://localhost:3000/Tarjetas",{
      
      NombreTarjeta: datos.NombreTarjeta,
      MontoPagar: datos.MontoPagar,
      Estado:datos.Estado,
      FechaCierre:datos.FechaCierre,
      FechaVencimiento:datos.FechaVencimiento,
      FechaRegistro:datos.FechaRegistro,
      TotalTajeta:datos.TotalTarjeta
  })
       if(response){
          alert("Tarjeta Agregada Correctamente")
  // navigate("http://localhost:3000")
                   }
} catch (error){
  console.log(error)
}
}


  return (
    <div>
      <Form onSubmit={handleSubmit} className="modalCrear">
        
          
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Row>
        <Form.Label> NombreTarjeta : </Form.Label>
        <Form.Control type="text" placeholder="Nombre de la Tarjeta" onChange={handleChange} name ="NombreTarjeta" className="NombreTarjeta"/>
        <br />
        <Form.Label> Monto a Pagar : </Form.Label>
        <Form.Control type="text" placeholder="Monto a Pagar" onChange={handleChange} name ="MontoPagar" className="NombreTarjeta"/>
        <br />
        <Form.Label> Estado del Pago : </Form.Label>
        <Form.Control type="text" placeholder="Estado" onChange={handleChange} name ="Estado" className="NombreTarjeta"/>
        <br />
        <Form.Label> Fecha de Cierre : </Form.Label>
        <Form.Control type="text" placeholder="Fecha de Cierre" onChange={handleChange} name ="FechaCierre" className="NombreTarjeta"/>
        <br />
        <Form.Label> Fecha de Vencimiento : </Form.Label>
        <Form.Control type="text" placeholder="Fecha de Vencimiento" onChange={handleChange} name ="FechaVencimiento" className="NombreTarjeta"/>
        <br />
        <Form.Label> Fecha de Registro : </Form.Label>
        <Form.Control type="text" placeholder="Fecha de Registro" onChange={handleChange} name ="FechaRegistro" className="NombreTarjeta"/>
        </Row>
        </Form.Group>
        
      </Form>
      <br />
      <Button type="submit">GUARDAR</Button>
    </div>
  )
}

export default CreateTarjeta
