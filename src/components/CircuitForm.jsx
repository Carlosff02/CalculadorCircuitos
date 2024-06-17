import { useState } from 'react';
import Circuit from './Circuit.jsx';
import '../stylesheets/CircuitForm.css'
export function CircuitForm() {
  const [click, setClick] = useState(0);
  
  const [components, setComponents] = useState([]);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState(["Serie"]);
  console.log("opciones 1 : " + opcionesSeleccionadas)
  
  const handleClick = () => {
    setClick(click+1)
    setComponents([...components, { id: components.length, value: '' }]);
    setOpcionesSeleccionadas([...opcionesSeleccionadas, 'Serie']);
  };

  const handleRemove = () => {
    setClick(click-1)
    
    if (components.length > 0) {
      setComponents(components.slice(0, -1));
      setOpcionesSeleccionadas(opcionesSeleccionadas.slice(0, -1));
    }
  };

  const handleInputChange = (id, newValue) => {
    setComponents(components.map(component =>
      component.id === id ? { ...component, value: newValue } : component
    ));
  };

  const handleSelection = (index, value) => {
    
    setOpcionesSeleccionadas(opcionesSeleccionadas.map((opcion, i) =>
      i === index ? value : opcion
    ));
  };

  const handleCalcular = () => {
    let resultado = 0;
    components.forEach((resistencia, index) => {
      const valor = parseInt(resistencia.value);
      if (index === 0) {
        resultado = valor; // Para la primera resistencia, el resultado es su valor inicial
      } else {
        // Calcular el resultado según la opción seleccionada para la resistencia actual
        if (opcionesSeleccionadas[index] === 'Serie') {
          resultado += valor; // Si la resistencia está en serie, sumar su valor al resultado
        } else {
          resultado = (resultado * valor) / (resultado + valor); // Si está en paralelo, aplicar la fórmula
        }
      }
    });
    document.getElementById('valorInput').value = resultado;
  };

  return (
    <>
    <div id="circuit">
    <div className="inputForm">
      <button onClick={handleClick}>Agregar Resistencia</button>
      <button onClick={handleRemove}>Eliminar Resistencia</button>
      <br />
      {components.map((component, index) => (
        <div key={component.id}>
          <label htmlFor={`component-${component.id}`}>Resistencia {component.id + 1}</label>
          <input
            id={`component-${component.id}`}
            type="text"
            value={component.value}
            onChange={(e) => handleInputChange(component.id, e.target.value)}
          />
          {index > 0 && (
            <div>
              <label>Está en serie o en paralelo?</label>
              <select
                value={opcionesSeleccionadas[index]}
                onChange={(e) => handleSelection(index, e.target.value)}
              >
                <option value="Serie">Serie</option>
                <option value="Paralelo">Paralelo</option>
              </select>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleCalcular}>Calcular</button>
      <input id="valorInput" readOnly={true}></input>
      </div>
      <div className="circuitForm">
      <Circuit click={click} opcion={opcionesSeleccionadas}/>
      </div>
      </div>
      
    </>
  );
}
