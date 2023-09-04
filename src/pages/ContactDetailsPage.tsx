import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ContactDetailsPage = () => {
  // Get the 'id' parameter from the URL using the useParams hook
  const { id } = useParams<{ id?: string }>();
  
  // Get the list of contacts from the Redux store
  const contacts = useSelector((store: any) => store.contacts);

  // Check if 'id' is undefined or not a valid number
  if (id === undefined || isNaN(parseInt(id))) {
    return (
      <div>
        <h2>Contact Details</h2>
        <p>Invalid contact ID.</p>
      </div>
    );
  }

  // Find the contact with the specified ID in the list of contacts
  const contact = contacts.find((el: any) => el.id === parseInt(id));

  if (!contact) {
    // Handle the case where no contact is found for the specified ID
    return (
      <div>
        <h2>Contact Details</h2>
        <p>Contact not found.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center mt-16">
      <div className="leading-8 p-6 text-xl shadow-md">
        <h2 className="font-bold mb-3 underline">Contact Details</h2>

        <img
          className="h-32 w-32 rounded-full bg-gray-50 mb-3"
          src="/adminicon.jpg"
          alt=""
        />
        <div className="font-semibold">
          <p>Full Name: {contact.fullname}</p>
          <p>Email: {contact.email}</p>
          <p>Role: {contact.role}</p>
          <p>Country: {contact.country}</p>
          <p>Mobile: {contact.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
