import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const { id, name, constellation } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button
          className="button is-warning mr-3"
          onClick={() => setDataToEdit(el)}
        >
          Editar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
