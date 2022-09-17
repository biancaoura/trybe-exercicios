import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
      <input
        type="text"
        placeholder="Nome Completo"
        value={ name }
        onChange={ ({ target: { value } }) => setName(value) }
      />
      <input
        type="number"
        min="0"
        placeholder="Idade"
        value={ age }
        onChange={ ({ target: { value } }) => setAge(value) }
      />
      <input
        type="text"
        placeholder="Cidade"
        value={ city }
        onChange={ ({ target: { value } }) => setCity(value) }
      />

      <label htmlFor="fundaments">
        <input
          type="radio"
          name="module"
          id="fundaments"
          value="Fundamentos"
          checked={ module === 'Fundamentos' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        Fundamentos
      </label>
      <label htmlFor="frontend">
        <input
          type="radio"
          name="module"
          id="frontend"
          value="Front-end"
          checked={ module === 'Front-end' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        Front-end
      </label>
      <label htmlFor="backend">
        <input
          type="radio"
          name="module"
          id="backend"
          value="Back-end"
          checked={ module === 'Back-end' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        Back-end
      </label>
      <label htmlFor="compScience">
        <input
          type="radio"
          name="module"
          id="compScience"
          value="Ciência da Computação"
          checked={ module === 'Ciência da Computação' }
          onChange={ ({ target: { value } }) => setModule(value) }
        />
        Ciência da Computação
      </label>
      <button
        type="submit"
        onClick={ (e) => { e.preventDefault(); console.log('click'); } }
      >
        Enviar
      </button>
    </form>
  );
}
