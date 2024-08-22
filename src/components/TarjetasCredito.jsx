import { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "../CSS/Tarjeta.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {Form,Row,Button} from 'react-bootstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import CreateTarjeta from "./CRUD/Tarjetas/CreateTarjeta";
// import { FaTrash } from 'react-icons/fa';
import DeleteIcon from './DeleteIcon';
import EditIcon from "./EditIcon";
import IconoView from "./IconoView";
import {useNavigate} from "react-router-dom";
import UpdateTarjeta from "./CRUD/Tarjetas/UpdateTarjeta";
import { BsXCircle } from "react-icons/bs";
import { FcOk } from "react-icons/fc";

const TarjetasCredito = () => {

  const [tarjetas, setTarjetas] = useState([]);
  const [showTarjeta, setShowTarjeta] = useState(false);
  const [showAlert, setShowAlert] = useState(false);//modal create
  const [showAlert2, setShowAlert2] = useState(false);//modal update

  // const handleChange =()=>{}

  // const [totalTarjeta,setTotalTarjeta] = useState(0)

  const getTarjeta = async () => {

    const navigate = useNavigate();
    
    try {
      let response = await axios.get("http://localhost:3000/Tarjetas");
      console.log(response.data);
      setTarjetas(response.data);
     
    } catch (error) {
      console.error(error);
    }
  };

  const view = (id)=>{

    navigate("http://localhost:3000/Tarjetas/"+id)
    alert("hola")
  }

  const handleClick = async(id) =>{
    console.log("eliminar")
  
    try {
      let response = await axios.delete("http://localhost:3000/Tarjetas/"+id)
      if (response) {
        alert("Tarjeta eliminada correctamente")
        getTarjeta()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const showClick = () => {
    setShowTarjeta(!showTarjeta);
  };

  useEffect(() => { getTarjeta(); }, []);

  // Zona del modal

const handleSave =()=>{
  setShowAlert(true);
}
const handleSave2 =()=>{
  setShowAlert(true);
}
  const hideAlert = () => {
    setShowAlert(false);
    setShowAlert2(false);
    getTarjeta();
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
          <Button onClick={() => setShowAlert(true)}>Agregar Tarjeta</Button>
          <br /><br />
            <MDBTable bordered borderColor="primary" >
              <MDBTableHead className=" text-white">
                <tr>
                  <th scope='col' className="bg-warning">Id</th>
                  <th scope='col' className="bg-warning">Nombre de Tarjeta</th>
                  <th scope='col' className="bg-warning">Monto a Pagar</th>
                  <th scope='col' className="bg-warning">Estado del pago</th>
                  <th scope='col' className="bg-warning"></th>
                  <th scope='col' className="bg-warning">Fecha de Cierre</th>
                  <th scope='col' className="bg-warning">Fecha de Vencimiento</th>
                  <th scope='col' className="bg-warning">Fecha de Registro</th>
                  <th scope='col' className="bg-warning">Acciones</th>
                </tr>
              </MDBTableHead>
              {tarjetas.map((tarjeta) => (
              <MDBTableBody key={tarjeta.id}>
                <tr>
                  <td>{tarjeta.id}</td>
                  <td>{tarjeta.NombreTarjeta}</td>
                  <td>{tarjeta.MontoPagar}</td>
                  <td ><b>{tarjeta.Estado}</b></td>
                  <td>{tarjeta.Estado === "Pagado" ? <FcOk  className="iconOk" style={{width:"130%", height:"130%"}} />:
                    <BsXCircle className="bg-danger" style={{width:"130%", height:"130%"}}/>}</td>
                  <td>{tarjeta.FechaCierre}</td>
                  <td>{tarjeta.FechaVencimiento}</td>
                  <td>{tarjeta.FechaRegistro}</td>
                  <td>
                  <Button className=" bg-white" onClick={() => handleClick(tarjeta.id)}  ><DeleteIcon/> </Button>
                  <Button onClick={() => setShowAlert2(true)} className=" bg-white"><EditIcon/></Button>
                  <Button className=" bg-white" onClick={view}><IconoView /></Button>
                  </td>
                </tr>
              </MDBTableBody>
                ))}
            </MDBTable>
          </Row>
        </div>
      )}
      
      {showTarjeta && (
       
      <Form>
         <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Monto Total a pagar de Tarjetas : $</Form.Label>
        <Form.Control style={{width:"40%"}} type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        </Form.Group>
      </Form>)}

{/* modal de create */}

  <SweetAlert show={showAlert} title="Crear Tarjeta"  onConfirm={handleSave} onCancel={hideAlert} showCancel
        confirmBtnText="Guardar" cancelBtnText="Cancelar" confirmBtnBsStyle="success" cancelBtnBsStyle="danger"
        closeOnClickOutside={false} className="modal">
       <CreateTarjeta/>
      </SweetAlert>
      {/* Modal editar Editar */}
      <SweetAlert show={showAlert2} title="Editar Tarjeta"  onConfirm={handleSave2} onCancel={hideAlert} showCancel
        confirmBtnText="Guardar" cancelBtnText="Cancelar" confirmBtnBsStyle="success" cancelBtnBsStyle="danger"
        closeOnClickOutside={false} className="modal">
       <UpdateTarjeta/>
      </SweetAlert>
     
    </div>
  );
};

export default TarjetasCredito;
