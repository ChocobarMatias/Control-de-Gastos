import { useState, useEffect } from "react";
import axios from "axios";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import "../../../CSS/Tarjeta.css";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Form, Row, Button, Collapse } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import CreateTarjeta from "../Tarjetas/CreateTarjeta";
import DeleteIcon from "../../DeleteIcon";
import EditIcon from "../../EditIcon";
import IconoView from "../../IconoView";
import { Link } from "react-router-dom";
import UpdateTarjeta from "../Tarjetas/UpdateTarjeta";
import { BsXCircle } from "react-icons/bs";
import { FcOk } from "react-icons/fc";

const TarjetasCredito = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // modal create
  const [showAlert2, setShowAlert2] = useState(false); // modal update
  const [showAlert3, setShowAlert3] = useState(false); // modal delete
  const [selectedTarjetaId, setSelectedTarjetaId] = useState(null);//estado para poder pasar id al edit
  const [open, setOpen] = useState(false);//estado para el efecto de guardado lento collapse
  const [total, setTotal] = useState(0);

  // Calcular el total lo voy a usar hasta que cree la base de datos 
  const calculateTotal = (tarjetas) => {
    const newTotal = tarjetas.reduce((sum, tarjeta) => sum + tarjeta.MontoPagar, 0);
    setTotal(newTotal);
  };

  const getTarjeta = async () => {
    try {
      let response = await axios.get("http://localhost:3000/Tarjetas");
      setTarjetas(response.data);
      calculateTotal(response.data);//con esta funcion traigo los valores nuevos de monto para sumar 
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async (id) => {
    try {
      const tarjetaToDelete = tarjetas.find(tarjeta => tarjeta.id === id);//con el find busca el id que le pase
      let response = await axios.delete("http://localhost:3000/Tarjetas/" + id);
      if (response) {
        setShowAlert3(true);
        setTarjetas(tarjetas.filter(tarjeta => tarjeta.id !== id));
        setTotal(total - tarjetaToDelete.MontoPagar); // Restar el monto al total osea el tarjetaToDelete.MontoPagar acumulo el valor del id yel montoPAgar
                                                      //que anteriormente le pase y busque con el find y por ende loresta al total
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTarjeta = (newTarjeta) => {
    setTarjetas([...tarjetas, newTarjeta]);
    setTotal(total + newTarjeta.MontoPagar); // Sumar el nuevo monto al total
    setShowAlert(false);
  };

  const handleEditClick = (id) => {
    setSelectedTarjetaId(id);//este es para mandarle el id al componente id
    setShowAlert2(true);
  };

  const handleEditTarjeta = (updatedTarjeta) => {
    const oldTarjeta = tarjetas.find(tarjeta => tarjeta.id === updatedTarjeta.id);
    const updatedTarjetas = tarjetas.map(tarjeta => 
      tarjeta.id === updatedTarjeta.id ? updatedTarjeta : tarjeta);
    setTarjetas(updatedTarjetas);
    setTotal(total - oldTarjeta.MontoPagar + updatedTarjeta.MontoPagar); // Actualizar el total
    setShowAlert2(false);
  };

  const handleCollapseToggle = () => {
    setOpen(!open);//esto es para el collapse 
  };

  useEffect(() => {
    getTarjeta();
  }, []);

  const hideAlert = () => {
    setShowAlert(false);
    setShowAlert2(false);
    setShowAlert3(false);
    getTarjeta();
  };

  return (
    <div>
      <div className="header-container">
        <h2>Tarjetas de Credito : </h2>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>-- Monto Total a pagar de Tarjetas: $</Form.Label>
            <Form.Control type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value={total} disabled/>
          </Form.Group>
        </Form>
        {/* este div activa la funcion de collapse */}
        <div className="toggle-container" onClick={handleCollapseToggle}>
          <b>{open ? "Ocultar..." : "Mostrar Mas..."}</b>
          {open ? (
            <SlArrowUp className="iconFlecha" />
          ) : (
            <SlArrowDown className="iconFlecha" />
          )}
        </div>
      </div>
{/* etiqueta  del collapse */}
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="contenedorTarjeta">
            <Row>
              <Button onClick={() => setShowAlert(true)}>
                Agregar Tarjeta
              </Button>
              <br />
              <br />
              <MDBTable bordered borderColor="primary">
                <MDBTableHead className="text-white">
                  <tr>
                    <th scope="col" className="bg-warning">Id</th>
                    <th scope="col" className="bg-warning">Nombre de Tarjetas</th>
                    <th scope="col" className="bg-warning">Monto a Pagar</th>
                    <th scope="col" className="bg-warning">Estado del pago</th>
                    <th scope="col" className="bg-warning">Fecha de Cierre</th>
                    <th scope="col" className="bg-warning">Fecha de Vencimiento</th>
                    <th scope="col" className="bg-warning">Fecha de Registro</th>
                    <th scope="col" className="bg-warning">Acciones</th>
                  </tr>
                </MDBTableHead>
                {tarjetas.map((tarjeta) => (
                  <MDBTableBody key={tarjeta.id}>
                    <tr>
                      <td>{tarjeta.id}</td>
                      <td>{tarjeta.NombreTarjeta}</td>
                      <td>{tarjeta.MontoPagar}</td>
                      <td><b>{tarjeta.Estado}{tarjeta.Estado === "Pagado" ? (
                          <FcOk style={{marginLeft:"15%",width: "30%", height: "30%"}} className="iconOk" />
                        ) : (<BsXCircle className="bg-danger" style={{ marginLeft:"1%",width: "30%", height: "30%"}}/>)}</b>
                      </td>
                      <td>{tarjeta.FechaCierre}</td>
                      <td>{tarjeta.FechaVencimiento}</td>
                      <td>{tarjeta.FechaRegistro}</td>
                      <td>
                        <Button className="bg-white" onClick={() => handleClick(tarjeta.id)}>
                          <DeleteIcon />
                        </Button>
                        <Button onClick={() => handleEditClick(tarjeta.id)} className="bg-white">
                          <EditIcon />
                        </Button>
                        <Link className="bg-white" to={`/tarjetas/view/${tarjeta.id}`}>
                          <IconoView />
                        </Link>
                      </td>
                    </tr>
                  </MDBTableBody>
                ))}
              </MDBTable>
            </Row>
          </div>
        </div>
        {/* cierre de la etiqueta collapse dentro de ella tengo que poner todo lo que tendra el efecto */}
      </Collapse>

      {/* Modal de crear */}
      <SweetAlert show={showAlert} title="Crear Tarjeta" onCancel={hideAlert}
        showCancel
        cancelBtnText="Cancelar"
        cancelBtnBsStyle="danger"
        closeOnClickOutside={false}
        className="modal"
      >
        <CreateTarjeta onSave={handleAddTarjeta} />
      </SweetAlert>

      {/* Modal de editar */}
      <SweetAlert
        show={showAlert2}
        title="Editar Tarjeta"
        onCancel={hideAlert}
        showCancel
        confirmBtnText="Guardar"
        cancelBtnText="Cancelar"
        confirmBtnBsStyle="success"
        cancelBtnBsStyle="danger"
        closeOnClickOutside={false}
        className="modal"
      >
        <UpdateTarjeta id={selectedTarjetaId} onSave={handleEditTarjeta} />
      </SweetAlert>

      {showAlert3 && (
        <SweetAlert
          success
          title={<span style={{ color: "black" }}>Gracias</span>}
          onConfirm={hideAlert}
        >
          <span style={{ color: "black" }}>
            Tarjeta eliminada correctamente!
          </span>
        </SweetAlert>
      )}
    </div>
  );
};

export default TarjetasCredito;
