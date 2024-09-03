import { Form } from "react-bootstrap"
import "../../CSS/Header.css"
import { useState } from "react";

const Header = () => {
  
  const [selectedDate, setSelectedDate] = useState("");//estado para guardar la fecha

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);};

  return (
    <header className="fixed-header">
       <nav>
      <h1>Control y Seguimiento de Gastos</h1>
      <Form>
      <Form.Group controlId="formDate">
        <Form.Label>Selecciona una fecha</Form.Label>
        <Form.Control
        style={{width:"10%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}}
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Form.Group>
      <p>Fecha seleccionada: {selectedDate}</p>
    </Form>
      </nav>
    </header>
  )
}

export default Header
