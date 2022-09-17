import React, { useState, useContext } from 'react';
import FormContext from '../context/FormContext';

export default function Form() {
  const allInfo = {
    name: '',
    age: '',
    city: '',
    module: '',
  };

  const [info, setInfo] = useState(allInfo);

  const { addData } = useContext(FormContext);

  const studentInfo = {
    name: info.name, age: info.age, city: info.city, module: info.module,
  };

  const handleChange = ({ target: { name, value } }) => {
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addData(studentInfo);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Nome Completo"
        name="name"
        value={ info.name }
        onChange={ handleChange }
      />
      <input
        type="number"
        min="0"
        placeholder="Idade"
        name="age"
        value={ info.age }
        onChange={ handleChange }
      />
      <input
        type="text"
        placeholder="Cidade"
        name="city"
        value={ info.city }
        onChange={ handleChange }
      />

      <label htmlFor="fundaments">
        <input
          type="radio"
          name="module"
          id="fundaments"
          value="Fundamentos"
          checked={ info.module === 'Fundamentos' }
          onChange={ handleChange }
        />
        Fundamentos
      </label>
      <label htmlFor="frontend">
        <input
          type="radio"
          name="module"
          id="frontend"
          value="Front-end"
          checked={ info.module === 'Front-end' }
          onChange={ handleChange }
        />
        Front-end
      </label>
      <label htmlFor="backend">
        <input
          type="radio"
          name="module"
          id="backend"
          value="Back-end"
          checked={ info.module === 'Back-end' }
          onChange={ handleChange }
        />
        Back-end
      </label>
      <label htmlFor="compScience">
        <input
          type="radio"
          name="module"
          id="compScience"
          value="Ciência da Computação"
          checked={ info.module === 'Ciência da Computação' }
          onChange={ handleChange }
        />
        Ciência da Computação
      </label>
      <button
        type="submit"
        onClick={ handleClick }
      >
        Enviar
      </button>
    </form>
  );
}
