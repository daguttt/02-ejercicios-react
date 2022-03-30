import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constellation: "Pegaso",
  },
  {
    id: 2,
    name: "Shiryu",
    constellation: "Dragón",
  },
  {
    id: 3,
    name: "Hyoga",
    constellation: "Cisne",
  },
  {
    id: 4,
    name: "Shun",
    constellation: "Andrómeda",
  },
  {
    id: 5,
    name: "Ikki",
    constellation: "Fénix",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const createData = (data) => {
    setDb([...db, data]);
  };
  return (
    <>
      <h2 className="title is-2">CrudApp</h2>
      <div className="columns is-desktop">
        <CrudForm onCreateData={createData} />
        <CrudTable data={db} />
      </div>
    </>
  );
};

export default CrudApp;
