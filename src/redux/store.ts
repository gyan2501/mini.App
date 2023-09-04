import { legacy_createStore } from "redux"; // Import from redux
import { reducer } from "./reducer";

// Create the Redux store by passing your reducer function
 export const store = legacy_createStore(reducer)