import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      // agrega el nuevo presupuesto a la list
      setGastos([...gastos, gasto]);
      // resta al presupuesto actual al agregar
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      // resetear a false una vez que se ejecuto
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>

          <div className="contenido-principal contenido">
            {mostrarPregunta ? (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setPregunta={setPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                  gastos={gastos} />

                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
