import React, { useState } from "react";

const initialForm = {
  id: null,
  name: "",
  constellation: "",
};

const CrudForm = ({ onCreateData }) => {
  const [form, setForm] = useState(initialForm);
  // -**********************************-
  // Functions
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!form.name || !form.constellation) {
      alert("Datos incompletos");
      return;
    }

    // Id to create a new item
    const id = Date.now();
    onCreateData({ ...form, id });
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
  };
  // -**********************************-
  return (
    <form className="column" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="field">
        <label htmlFor="name" className="label">
          Nombre
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* Constellation */}
      <div className="field">
        <label htmlFor="constellation" className="label">
          Constelación
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="constellation"
            id="constellation"
            value={form.constellation}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="button is-info"
            type="reset"
            value="Limpiar"
            onReset={handleReset}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="button is-danger" type="submit" value="Enviar" />
        </div>
      </div>
    </form>
  );
};

export default CrudForm;
