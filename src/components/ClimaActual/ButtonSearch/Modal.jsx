import React from 'react';
import './Modal.css'; 

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
      <div>
      <button className="close-button" onClick={onClose}>
          &times;
        </button>

        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;