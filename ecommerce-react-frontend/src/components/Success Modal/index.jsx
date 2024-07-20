import "./index.css";
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleGoHome = () => {
    onClose();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="title-modal-container">
            <h2>¡Producto creado correctamente!</h2>
        </div>
        <div className="container-buttons">
            <div className="container-btn container-go-home">
                <button className="btn-modal btn-go-home" onClick={handleGoHome}>Ir al inicio</button>
            </div>
            <div className="container-btn">
                 <button className="btn-modal btn-close-modal" onClick={onClose}>Cerrar</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;