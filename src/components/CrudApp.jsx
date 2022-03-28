import React from "react";
import CrudForm from "./CrudForm";

const initalDb = [
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
    constellation: "",
  },
];

const CrudApp = () => {
  return (
    <>
      <h2 class="title is-2">CrudApp</h2>
      <div className="columns is-desktop">
        <CrudForm />
      </div>
    </>
  );
};

export default CrudApp;
