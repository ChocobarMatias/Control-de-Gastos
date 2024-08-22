import { useEffect, useState} from "react";
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
const [tarjetas, setTarjetas] = useState([]);
const [datos,setDatos] = useState(initialState)

const getDatos =async()=>{
  let response = await axios.get("http://localhost:3000/Tarjetas")
  setTarjetas(response.data)
}

const handleChange = (e) =>{
  setDatos({...datos,[e.target.name]:e.target.value})

}

const handleSave = async(e)=>{
  e.preventDefault()
 
  try{
     let response = await axios.post("http://localhost:3000/Tarjetas",{
      
      NombreTarjeta: datos.NombreTarjeta,
      MontoPagar: datos.MontoPagar,
      Estado:datos.Estado,
      FechaCierre:datos.FechaCierre,
      FechaVencimiento:datos.FechaVencimiento,
      FechaRegistro:datos.FechaRegistro,
      TotalTajeta:datos.TotalTajeta
  })
console.log("entre")
  console.log(response.data)
       if(response){
          alert("Tarjeta Agregada Correctamente")
          getDatos()
  // navigate("http://localhost:3000")
                   }
} catch (error){
  console.log(error)
}
}

useEffect(()=>{getDatos()},[])
  return (
    <div>
      <Form style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="modalCrear">
        <Form.Group style={{width:"40%"}} className="mb-3" controlId="exampleForm.ControlInput1">
        <Row>
        <Form.Label> NombreTarjeta : </Form.Label>
        <Form.Control type="text" placeholder="Nombre de la Tarjeta" onChange={handleChange} name ="NombreTarjeta" className="NombreTarjeta"/>
        <br />
        <Form.Label> Monto a Pagar : </Form.Label>
        <Form.Control type="text" placeholder="Monto a Pagar" onChange={handleChange} name ="MontoPagar" className="MontoPagar"/>
        <br />
        <Form.Label> Estado del Pago : </Form.Label>
        <Form.Control type="text" placeholder="Estado" onChange={handleChange} name ="Estado" className="Estado"/>
        <select style={{height:"80%",width: "100%" }} className="select" onChange={handleChange} name="Estado" value={datos.Estado} required>
                  <option value="">Seleccione un Estado</option>
                  <option value="Pagado">Pagado</option>
                  <option value="Pendiente">Pendiente</option>
                  </select>
        <br />
        <Form.Label> Fecha de Cierre : </Form.Label>
        <Form.Control type="text" placeholder="Fecha de Cierre" onChange={handleChange} name ="FechaCierre" className="FechaCierre"/>
        <br />
        <Form.Label> Fecha de Vencimiento : </Form.Label>
        <Form.Control type="text" placeholder="Fecha de Vencimiento" onChange={handleChange} name ="FechaVencimiento" className="FechaVencimiento" />
        <br />
        <Form.Label> Fecha de Registro : </Form.Label>
        <Form.Control type="text" placeholder="Fecha de Registro" onChange={handleChange} name ="FechaRegistro" className="FechaRegistro"/>
        </Row>
        </Form.Group>
        
      </Form>
      <br />
      <Button onClick={handleSave}>GUARDAR</Button>
    </div>
  )
}

export default CreateTarjeta
