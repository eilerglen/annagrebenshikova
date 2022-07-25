import {useRef, useEffect} from 'react';
import overlayStyles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {
  const overlay = useRef(null)

  useEffect(() => {

    const handleOverlayClick = (e) => {
      if (e.target === overlay.current) {
        onClose();
      }
    };
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [onClose]);
  
  return (
    <div className={ `${overlayStyles.overlay}`} ref={overlay}></div>
  );
}

export default ModalOverlay;