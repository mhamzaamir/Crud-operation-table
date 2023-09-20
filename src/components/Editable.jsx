import React from "react";

function Editable({
  handleEditContactFormChange,
  editContactForm,
  handleCancelClick,
}) {
  const { fullName, address, phoneNumber, email } = editContactForm;
  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a name..."
            name="fullName"
            onChange={handleEditContactFormChange}
            value={fullName}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter an address..."
            name="address"
            onChange={handleEditContactFormChange}
            value={address}
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Enter a phone number..."
            name="phoneNumber"
            onChange={handleEditContactFormChange}
            value={phoneNumber}
          ></input>
        </td>
        <td>
          <input
            type="email"
            required="required"
            placeholder="Enter an email..."
            name="email"
            onChange={handleEditContactFormChange}
            value={email}
          ></input>
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    </>
  );
}

export default Editable;
