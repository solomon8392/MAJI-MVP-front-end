import React from "react";
import Image from "next/image"
import "./modal.css"

interface ModalProps {
    closeModal: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ closeModal }) => {
    const handleDelete = () => {
      console.log("Delete button clicked");
      closeModal();
    };
  
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="">
          <button onClick={closeModal}>X</button>
          </div>
          <div className="">
            <h1>Modal component with click and unclick event listener</h1>
          </div>
          <div className="">
            <p>Component using useState</p>
          </div>
          <div className="flex gap-9">
            <button onClick={closeModal}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;



