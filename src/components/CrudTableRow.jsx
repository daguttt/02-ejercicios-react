import React from "react";

const CrudTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button className="button is-warning mr-3">Editar</button>
        <button className="button is-danger">Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
