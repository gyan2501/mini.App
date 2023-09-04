// Import necessary dependencies and components
import React, { useState } from "react";
import Modal from "../components/Modal";
import ContactList from "../components/ContactList";

const ContactPage = () => {
  // Define state to track whether the modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <div className="mx-auto w-64">
          {/* Button to open the modal */}
          <button
            onClick={openModal}
            className="rounded-md m-10 bg-sky-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-sky-500"
          >
            + Add Contact
          </button>
        </div>
        {/* Render the Modal component with isOpen and onRequestClose props */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} />
      </div>
      <div className="w-full md:w-1/2 m-auto pl-2">
        {/* Render the ContactList component */}
        <ContactList />
      </div>
    </>
  );
};

export default ContactPage;
