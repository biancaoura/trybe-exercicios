import React, { useContext } from 'react';
import FormContext from '../context/FormContext';

export default function StudentInfo() {
  const { info } = useContext(FormContext);
  return (
    <ul>
      { info.map(({ name, age, city, module }, index) => (
        <li key={ index }>
          <p>
            Nome:
            {name}
          </p>
          <p>
            Idade:
            {age}
          </p>
          <p>
            Cidade:
            {city}
          </p>
          <p>
            Módulo:
            {module}
          </p>
        </li>
      )) }
    </ul>
  );
}
