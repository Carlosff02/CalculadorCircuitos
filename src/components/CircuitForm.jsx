import { useState, useEffect } from 'react';
import Circuit from './Circuit.jsx';
import {CircuitVoltaje} from './CircuitVoltaje.jsx'
import '../stylesheets/CircuitForm.css'

export function CircuitForm() {
  const [click, setClick] = useState(0);
  const [nuevoClick, setNuevoClick] = useState([])
  const [valorResistencia, setValorResistencia] = useState(0)
  const [components, setComponents] = useState([]);
  const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState([]);
  //console.log("opciones 1 : " + opcionesSeleccionadas)
  
  function contarRepeticiones(arreglo, palabraBuscada) {
    let contador = 0;
    arreglo.forEach(palabra => {
        if (palabra === palabraBuscada) {
            contador++;
        }
    });

    return contador;
}



useEffect(() => {
  //console.log('nuevoClick actualizado:', nuevoClick);
  
}, [nuevoClick]);


  const handleClick = () => {
    
    setNuevoClick(nuevoClick => [...nuevoClick, click]);
    //console.log('antes de resetear, nuevoClick:', [...nuevoClick, click]);
    if(contarRepeticiones(opcionesSeleccionadas, "Paralelo")==0){
      setNuevoClick([])
    }
    //console.log("opcion i : " + opcionesSeleccionadas)
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
    let arreglo = [[]];
    let excluidos = [];
    components.forEach((resistencia, index) => {
      const valor = parseInt(resistencia.value);
      const tipo = opcionesSeleccionadas[index];
      if (tipo !== 'Paralelo' && arreglo[arreglo.length - 1].length < 5) {
        arreglo[arreglo.length - 1].push(valor);
      } else if (tipo === 'Paralelo') {
        arreglo.push([valor]);
      }
    });

    let arregloSumado = arreglo.map((subArray, index) => {
      if (index < arreglo.length - 1) {
        let excluido = subArray.pop();
        excluidos.push(excluido);
      }
      let suma = subArray.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
      return [suma];
    });

    let calculo = parseInt(arregloSumado[arregloSumado.length - 1]);
    if (arreglo.length > 0) {
      for (let i = arregloSumado.length - 1; i >= 1; i--) {
        if (excluidos.length === 1) {
          calculo = (calculo * parseInt(excluidos[excluidos.length - 1])) / (calculo + parseInt(excluidos[excluidos.length - 1]));
        } else {
          calculo = 1 / ((1 / calculo) + (1 / parseInt(excluidos[excluidos.length - 1])));
        }
        excluidos.length--;
        calculo += parseInt(arregloSumado[i - 1]);
        if (excluidos.length === 0) {
          break;
        }
      }
    }
    setValorResistencia(calculo);
    document.getElementById('valorInput').value = `${calculo} Ω` ;
  };

  return (
    <>
    <CircuitVoltaje valorResistencia={valorResistencia}/>
    <div id="circuit">
    <div className="inputForm">
      <button onClick={()=>{
        
        if(click<5/*&&(contarRepeticiones(opcionesSeleccionadas, "Paralelo")===0)*/){
          handleClick()}  
        else if(contarRepeticiones(opcionesSeleccionadas, "Paralelo")!=0&&click<(4*(contarRepeticiones(opcionesSeleccionadas, "Paralelo")+1))+1){
            console.log((4*(contarRepeticiones(opcionesSeleccionadas, "Paralelo")+1))+1)
            handleClick()
          
          
        } 
        else{
          console.log("clicks : " + click) 
        } 
       
        }}>Agregar Resistencia</button>
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
      <Circuit click={click} opcion={opcionesSeleccionadas} />
      </div>
      </div>
      
    </>
  );
}
