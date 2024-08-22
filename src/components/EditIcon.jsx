import { FaEdit } from 'react-icons/fa'; // Importa el ícono de edición
import { Tooltip, OverlayTrigger } from 'react-bootstrap'; // Importa componentes de React Bootstrap
import '../CSS/EditIcon.css'; // Archivo CSS para los estilos y animaciones

const EditIcon = () => {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id="edit-tooltip">Editar</Tooltip>}
    >
      <div className="edit-icon-container">
        <FaEdit className="edit-icon" />
      </div>
    </OverlayTrigger>
  );
};

export default EditIcon;
