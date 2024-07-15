import React, { useState } from 'react';

export function CircuitVoltaje(props) {
  const [valorVoltaje, setValorVoltaje] = useState(0);
  const [valorIntensidad, setValorIntensidad] = useState(0);

  const handleChange = (event) => {
    setValorVoltaje(event.target.value);
  };

  const handleChangeIntensidad = (event) => {
    setValorIntensidad(event.target.value);
  };

  const calcularVoltaje = () => {
    // Cambio necesario: Parsear los valores a números antes de hacer cálculos
    const intensidad = parseFloat(valorIntensidad);
    const resistencia = parseFloat(props.valorResistencia);
    setValorVoltaje(intensidad * resistencia);
  };

  const calcularIntensidad = () => {
    // Cambio necesario: Parsear los valores a números antes de hacer cálculos
    const voltaje = parseFloat(valorVoltaje);
    const resistencia = parseFloat(props.valorResistencia);
    setValorIntensidad(voltaje / resistencia);
  };

  return (
    <>
      <input 
        type="text"
        value={valorVoltaje}
        onChange={handleChange}
      /><span> V </span>
      <button onClick={calcularVoltaje}>Calcular Voltaje</button>
      <br/>
      <input 
        type="text"
        value={valorIntensidad}
        onChange={handleChangeIntensidad}
      /><span> A </span>
      <button onClick={calcularIntensidad}>Calcular Intensidad</button>
      <br/>
    </>
  );
}
