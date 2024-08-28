
import { Form } from 'react-bootstrap';
import '../../CSS/Aside.css'; // Archivo CSS para estilos personalizados

const AsideComponent = () => {
  return (
    <aside className="aside-container" style={{width:"180%"}}>
      <h2 style={{backgroundColor:"aqua"}}>Información adicional</h2>
      <br />
      <h2 style={{display:"flex",justifyContent:"flex-start"}}>Mes : </h2>
      <p style={{display:"flex",justifyContent:"flex-start"}}>Aqui muestra informacion adicional sobre gastos.</p>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <br />
        <h2 style={{display:"flex",justifyContent:"flex-start", backgroundColor:"coral"}}>Gastos Mensuales en Combustibles : </h2>
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Costo de Nafta : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Monto Gastado en Nafta" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Consumo en Litros : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="Consumo en Litros" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Cantidad de Cargas : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="Cantidad de veces que se Cargo Nafta" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <h2 style={{display:"flex",justifyContent:"flex-start", backgroundColor:"coral"}}>Estado del Total de los Pagos : </h2>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Total a PAGAR : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Monto Total a pagar" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Total PAGADO : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Monto Total Pagado" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Monto que Falta PAGAR : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Monto Total que falta Pagar" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <h2 style={{display:"flex",justifyContent:"flex-start", backgroundColor:"coral"}}>Comparacion de los montos del Mes anterior con el Actual : </h2>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Total Actual : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Monto Total Actual" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Total Mes Anterior : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Monto Total del Mes Anterior" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Saldo : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}} type="number" placeholder="$ Saldo Neto" className="inputTotal" value= "" disabled/>
        </div>
        <br />
        <br />
        <div className="input"style={{display:"flex",justifyContent:"flex-start"}}>
        <Form.Label style={{display:"flex",justifyContent:"flex-start"}}>Saldo Acumulado : </Form.Label>
        <Form.Control style={{width:"40%",display:"flex",justifyContent:"flex-start", marginLeft:"2%"}}
         type="number" 
         placeholder="$ Saldo Acumulado" 
         className="inputTotal " value= "" disabled/>
        </div>
        <br />
        
        <p style={{display:"flex",justifyContent:"flex-start"}}>Para montos positivos el input Saldo Acumulado sera color Verde</p>
        <p style={{display:"flex",justifyContent:"flex-start"}}>Para montos negativos el input Saldo Acumulado sera color Rojo</p>
       
        </Form.Group>

    </aside>
  );
};

export default AsideComponent;
