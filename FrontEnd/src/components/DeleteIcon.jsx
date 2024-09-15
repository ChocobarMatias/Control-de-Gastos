import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "../CSS/DeleteIcon.CSS"

const DeleteIcon = () => {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip id="delete-tooltip">
          <span>Delete</span>
        </Tooltip>
      }
    >
      <div className="delete-icon">
        <FaTrashAlt className="icon" />
      </div>
    </OverlayTrigger>
  );
};

export default DeleteIcon;
