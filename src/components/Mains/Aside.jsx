
import { Form } from 'react-bootstrap';
import '../../CSS/Aside.css'; // Archivo CSS para estilos personalizados

const AsideComponent = () => {
  return (
    <aside className="aside-container">
      <h2>Información adicional</h2>
      <p>Este es un bloque de contenido relacionado o independiente del contenido principal.</p>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label> Nafta del Mes</Form.Label>
        <Form.Control style={{width:"120%"}} type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        <br />
        <Form.Label> Monto Pagado</Form.Label>
        <Form.Control style={{width:"120%"}} type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        <br />
        <Form.Label> Monto Pendiente</Form.Label>
        <Form.Control style={{width:"120%"}} type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        <br />
        <Form.Label> Nafta</Form.Label>
        <Form.Control style={{width:"120%"}} type="number" placeholder="$ Monto Total Tarjetas" className="inputTotal" value= "" disabled/>
        </Form.Group>

    </aside>
  );
};

export default AsideComponent;
