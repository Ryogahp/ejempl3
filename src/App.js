import React, { useState } from "react";
import { merge } from "lodash";
import { Doughnut } from "react-chartjs-2";

function App() {

  const [charData, setCharData] = useState({
    labels: [
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
      "Domingo",
    ],
    datasets: [
      {
        label: "Ventas por dia",
        data: [0, 1, 0, 3, 0, 0, 5],
        backgroundColor: [
          "rgba(75,192,192,0.6)", // Este es para lunes
          "rgba(100,19,172,0.6)", // Este es para martes
          "rgba(75,192,19,0.2)", // Este es para miercoles
          "rgba(75,92,92,0.9)", // Este es para jueves
          "aliceblue", // Este es para viernes
          "yellow", // Este es para sabado
          "orange", // Este es para domingo
        ],
      },
    ],
  });
  
  // No necesitas esto. En vez, declara el estado inicial.
  // useEffect(() => {
  //  chart();
  // }, []);
  
  // Es mejor que los nombres de funciones sean verbos, no sustantivos
  const cambiarDatos = () => {
    // setCharData cambia todo el objecto, asi que tienes que clonarlo o volver a construirlo.
    // Usa merge para unir los objectos (https://lodash.com/docs/4.17.15#merge).
    const objectoNuevo = {
      ...charData, // Esto se llama operador rest (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
      datasets: merge(charData.datasets, [
        {
          data: [
            Math.random() * 1,
            Math.random() * 2,
            Math.random() * 3,
            Math.random() * 4,
            Math.random() * 5,
            Math.random() * 6,
            Math.random() * 7,
          ],
        },
      ]),
    };
  
    setCharData(objectoNuevo);
  };

  return (
    <div className= "text-center">
      <h1>Diagrama</h1>
      <Doughnut
        key={JSON.stringify(charData.datasets[0].data)}
        data={charData}
        options={{
          responsive: true,
        }}
      />
      <button onClick={cambiarDatos}> Cambiar Dato</button>
    </div>
  );
}

export default App;
