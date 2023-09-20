import data from "./mock-data.json";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import ReadOnly from "./components/ReadOnly";
import Editable from "./components/Editable";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addContactForm, setAddContactForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const [editContactForm, setEditContactForm] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const { fullName, address, phoneNumber, email } = addContactForm;
  const handleAddContactFormChange = (event) => {
    const { name, value } = event.target;
    setAddContactForm((previousState) => ({ ...previousState, [name]: value }));
  };
  const handleAddContactFormSubmit = (event) => {
    event.preventDefault();
    const newContact = { ...addContactForm, id: nanoid() };
    const addNewContact = [...contacts, newContact];
    !fullName || !address || !phoneNumber || !email
      ? alert("Please fill all the fields")
      : setContacts(addNewContact);
    setAddContactForm({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
    });
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    const { fullName, address, phoneNumber, email } = contact;
    const contactDetails = {
      fullName,
      address,
      phoneNumber,
      email,
    };
    setEditContactForm(contactDetails);
  };
  const handleEditContactFormChange = (event) => {
    const { name, value } = event.target;
    setEditContactForm((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };
  const handleEditContactFormSubmit = (event) => {
    event.preventDefault();
    const { fullName, address, phoneNumber, email } = editContactForm;
    const updateContactDetails = {
      id: editContactId,
      fullName,
      address,
      phoneNumber,
      email,
    };
    const updateContact = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    updateContact[index] = updateContactDetails;
    setContacts(updateContact);
    setEditContactId(null);
  };
  const handleDeleteClick = (contactId) => {
    const deleteContact = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    deleteContact.splice(index, 1);
    setContacts(deleteContact);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };
  return (
    <>
      <div className="app-container">
        <form onSubmit={handleEditContactFormSubmit}>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <Editable
                      handleEditContactFormChange={handleEditContactFormChange}
                      editContactForm={editContactForm}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnly
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <h2>Add new contact</h2>
        <form className="form-container" onSubmit={handleAddContactFormSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter name"
            onChange={handleAddContactFormChange}
            value={fullName}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            onChange={handleAddContactFormChange}
            value={address}
          />
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter phone number"
            onChange={handleAddContactFormChange}
            value={phoneNumber}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleAddContactFormChange}
            value={email}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
}

export default App;
