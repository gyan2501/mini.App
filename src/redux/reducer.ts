// Import action types from the actionTypes file
import { Contact } from "../utils/constant";
import { ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT } from "./actionTypes";

// Define the initial state Type
interface InitialState {
  isLoading: boolean;
  isError: boolean;
  contacts: Contact[];
}
// Define the Actions Type
export interface ContactReducerAction {
  type: string;
  payload: Contact | number;
}

// Define the initial state for the Redux store
const initialState: InitialState = {
  isLoading: false, // A flag to indicate loading state
  isError: false, // A flag to indicate error state
  contacts: [], // An array to store the list of contacts
};

// Define the Redux reducer function
export const reducer = ( state = initialState,action: ContactReducerAction): InitialState => {
  switch (action.type) {
    case ADD_CONTACT:
      // Handle the ADD_CONTACT action by updating the state with the new contact
      return {
        ...state,
        isLoading: true, // Set loading to true during the action
        isError: false, // Clear any previous error state
        contacts: [...state.contacts, action.payload as Contact], // Add the new contact to the list
      };

    case EDIT_CONTACT:
      // Handle the EDIT_CONTACT action by updating the state with the edited contact
      return {
        ...state,
        isLoading: false, // Clear loading state
        isError: false, // Clear error state
        contacts: state.contacts.map((el) =>
          el.id === (action.payload as Contact).id
            ? (action.payload as Contact)
            : el
        ), // Replace the edited contact in the list
      };

    case DELETE_CONTACT:
      // Handle the DELETE_CONTACT action by removing a contact from the list
      return {
        ...state,
        contacts: state.contacts.filter(
          (el) => el.id !== (action.payload as number)
        ),
      };

    default:
      // Return the current state if the action type is not recognized
      return state;
  }
};
