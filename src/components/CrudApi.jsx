import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  // -**********************************-
  // Function
  const createData = (data) => {
    setDb([...db, data]);
  };
  const updateData = (data) => {
    const newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    //Array with all the elements, except the element to delete.
    const newData = db.filter((el) => el.id !== id);
    setDb(newData);
  };
  // -**********************************-
  return (
    <>
      <h2 className="title is-2">CrudAPI</h2>
      <div className="columns is-desktop">
        <CrudForm
          createData={createData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
          updateData={updateData}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </div>
    </>
  );
};

export default CrudApi;
