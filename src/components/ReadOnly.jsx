import React from "react";

function ReadOnly({ contact, handleEditClick, handleDeleteClick }) {
  return (
    <>
      <tr>
        <td>{contact.fullName}</td>
        <td>{contact.address}</td>
        <td>{contact.phoneNumber}</td>
        <td>{contact.email}</td>
        <td className="buttons">
          <button onClick={(event) => handleEditClick(event, contact)}>
            Edit
          </button>
          <button onClick={() => handleDeleteClick(contact.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default ReadOnly;
