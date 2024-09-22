import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa'; // O cualquier otro ícono que prefieras
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/IconoView.css'; // Archivo CSS para estilos adicionales

const IconoView = () => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="tooltip-top">
          Ver detalles
        </Tooltip>
      }
    >
      <div className="icon-container">
        <FaEye className="icon" />
      </div>
    </OverlayTrigger>
  );
};

export default IconoView;
