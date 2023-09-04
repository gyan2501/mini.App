
import { Contact } from "../utils/constant";
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./actionTypes";

export interface ContactAction {
  type: string;
  payload: Contact | number;
}

export const addContact = (contact: Contact) => {
  return {
    type: ADD_CONTACT,              // Action type indicating adding a contact
    payload: contact,               // Data payload, containing the new contact
  };
};

export const editContact = (contact: Contact) => {
  return {
    type: EDIT_CONTACT,             // Action type indicating editing a contact
    payload: contact,               // Data payload, containing the updated contact
  };
};

export const deleteContact = (id: number) => {
  return {
    type: DELETE_CONTACT,           // Action type indicating deleting a contact
    payload: id,                    // Data payload,containing the ID of the contact to be deleted
  };
};
