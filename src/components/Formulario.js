import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // agregar un gasto add
  const agregarGasto = (e) => {
    e.preventDefault();
    // validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // pasar el gasto al comp. principal
    setGasto(gasto);
    setCrearGasto(true);

    // reset del form.
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o presupuesto incorrecto" />
      ) : null}
      <div className="campo">
        <label htmlFor="">Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="">Cantidad del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};
Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
