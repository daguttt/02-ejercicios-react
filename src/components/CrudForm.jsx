import React from "react";

const CrudForm = () => {
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};
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
