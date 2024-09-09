import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { FaRegTimesCircle } from 'react-icons/fa';
import { FcPlus } from "react-icons/fc";
import deleteimg from "../../assets/delete.png";
import "../../CSS/Header.css";

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(""); // Estado para guardar la fecha
  const [inputs, setInputs] = useState([{ id: 1, value: "" }]); // Estado para manejar los inputs dinámicos
  const [total,setTotal] = useState(0)
  const handleClick = () => {
    setInputs([...inputs, { id: inputs.length + 1, value: 0 }]); // Agrega un nuevo input al array
  };
 

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
// con esta funcion lo que hago es agregarle nuevos objetos al array por eso en el 
// front lo muestra agregando nuevos input por el map cuando detecta nuevo index o id
  const handleInputChange = (index, e) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;//valor numerico del input
    setInputs(newInputs);
  
  };
// con esta funcion lo que hago es elimina posiciones en el array de objetos por ende
// en el front aparece como si se eliminar el input que le corresponde por el index o id
  const handleRemoveClick = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1); // Elimina el input en la posición 'index' y el 1
                                //  indica que solo eliminara es cantidad osea 1
    setInputs(newInputs);
  };

  return (
    <header className="fixed-header">
  <nav>
    <h1>Control y Seguimiento de Gastos</h1>
    <Form>
      <Form.Group controlId="formDate">
        <div className="input-container" style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
          {/* Input de fecha alineado horizontalmente */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Form.Label>Selecciona una fecha</Form.Label>
            <Form.Control style={{ width: "150px" }} type="date" value={selectedDate} onChange={handleDateChange} />
          </div>

          {/* Input de ingreso/sueldo */}
          <div style={{ display: "flex", alignItems: "center"}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",}}>
              <Form.Label>Ingreso/Sueldo 1</Form.Label>
              <Form.Control style={{ width: "150px" }} type="number" />
            </div>
            {/* Botón de agregar */}
            <FcPlus className="agregar" style={{ marginLeft: "-22px", fontSize: '34px', cursor: 'pointer' }} onClick={handleClick} />
          </div>

          {/* Inputs adicionales generados en una línea horizontal */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {inputs.map((input, index) => (
              <div key={input.id} className="delete" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <Form.Label>Ingreso/Sueldo {input.id + 1}</Form.Label>
                  <Form.Control type="number" value={input.value} onChange={(e) => handleInputChange(index, e)} style={{ width: "150px" }} />
                </div>

                {/* Icono de eliminar */}
                <img src={deleteimg} className="icon-delete" style={{ width: '40px', height: 'auto', cursor: 'pointer' }} onClick={() => handleRemoveClick(index)} />
              </div>
            ))}
          </div>
          <Button className="ok">Ok</Button>
        </div>
      </Form.Group>
      <p>*Presionar OK para Guardar los Ingresos/Sueldos*</p>
      {/* <Button>Ok</Button> */}
    </Form>
  </nav>
</header>

  );
};

export default Header;
