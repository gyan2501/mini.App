import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* Render the Navbar component, for navigation */}
      <Navbar />
      {/* Define routing using the Routes component */}
      <Routes>
        {/* Define a route for the "ContactPage" component */}
        <Route path="/" element={<ContactPage />} />
        {/* Define a route for viewing contact details with a dynamic ":id" parameter */}
        <Route path="/contact/:id" element={<ContactDetailsPage />} />
        {/* Define a route for the "Dashboard" component */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
