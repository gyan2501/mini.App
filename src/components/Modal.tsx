import React from 'react';
import ContactForm from './ContactForm';

interface ModalProps {
  isOpen: boolean;            // A prop to determine if the modal is open or closed
  onRequestClose: () => void; // A function to close the modal
}

const Modal = ({ isOpen, onRequestClose }: ModalProps) => {
  // If the modal is not open, return null to hide it
  if (!isOpen) {
    return null;
  }

  return (
    // Render the modal when it is open
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white w-full max-w-md md:max-w-lg p-4 rounded-lg relative overflow-auto">
        <button
          onClick={onRequestClose}
          className="font-bold absolute top-0 right-1 text-gray-600 hover:text-gray-800"
        >
          X
        </button>
        {/* Render the ContactForm component inside the modal */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Modal;
