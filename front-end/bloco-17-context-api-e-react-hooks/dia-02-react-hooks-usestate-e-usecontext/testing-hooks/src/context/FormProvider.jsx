import React, { useState, useMemo, useCallback } from 'react';
import { node } from 'prop-types';
import FormContext from './FormContext';

export default function FormProvider({ children }) {
  const [info, setInfo] = useState([]);

  const addData = useCallback((personalInfo) => {
    setInfo([...info, personalInfo]);
  }, [info, setInfo]);

  const context = useMemo(() => ({ info, setInfo, addData }), [info, setInfo, addData]);

  return (
    <FormContext.Provider value={ context }>
      { children }
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: node.isRequired,
};
