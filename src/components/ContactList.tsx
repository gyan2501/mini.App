import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../redux/action";
import { Link } from "react-router-dom";
import { Contact } from "../utils/constant"; // Import the Contact interface

const ContactList = () => {
  const contacts = useSelector((store: any) => store.contacts);
  const dispatch = useDispatch();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedContact, setEditedContact] = useState<Contact>({
    id: 0,
    fullname: "",
    email: "",
    role: "",
    country: "",
    mobile: "",
  });

  const openEditModal = (contact: Contact) => {
    setEditedContact(contact);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditedContact({
      id: 0,
      fullname: "",
      email: "",
      role: "",
      country: "",
      mobile: "",
    });
  };

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    dispatch(editContact(editedContact));
    closeEditModal();
  };

  return (
    <div>
      <h1 className="text-xl font-bold subpixel-antialiased mb-8">
        Contact List
      </h1>
      {contacts.length > 0 ? (
        <ul role="list" className="divide-y divide-gray-100">
          {contacts.map((el: Contact) => (
            <li key={el.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-28 w-28 flex-none rounded-full bg-gray-50"
                  src="/adminicon.jpg"
                  alt=""
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {el.fullname}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {el.email}
                  </p>
                  <button
                    onClick={() => openEditModal(el)}
                    className="m-2 bg-sky-500 text-white px-2 py-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(el.id)}
                    className="m-2 bg-red-500 text-white px-2 py-1"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/contact/${el.id}`}
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      margin: "5px",
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{el.role}</p>
                <p>{el.country}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-xl">
          No contacts found. Add some contacts.
        </p>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white w-full max-w-md md:max-w-lg p-4 rounded-lg relative overflow-auto">
            <button
              onClick={closeEditModal}
              className="font-bold absolute top-0 right-1 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="font-semibold text-lg text-gray-900 mb-4">
              Edit Contact
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-2 border-gray-300 p-2"
                  value={editedContact.fullname}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      fullname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border-2 border-gray-300 p-2"
                  value={editedContact.email}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  Role
                </label>

                <select
                  id="role"
                  name="role"
                  value={editedContact.role}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      role: e.target.value,
                    })
                  }
                  required
                  className="block w-full rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="Full Stack">Full Stack</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="UI/UX">UI/UX</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  Country
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-2 border-gray-300 p-2"
                  value={editedContact.country}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      country: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-900">
                  Mobile
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-2 border-gray-300 p-2"
                  value={editedContact.mobile}
                  onChange={(e) =>
                    setEditedContact({
                      ...editedContact,
                      mobile: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;
