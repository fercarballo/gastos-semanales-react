import React, { useState } from "react";
import Error from "./Error";


const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  
  // definimos el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // func que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  // submit para definir el presupuesto base
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // comprobar si acepto la validación
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
}


export default Pregunta;
