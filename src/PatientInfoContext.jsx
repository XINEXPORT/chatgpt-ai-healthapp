import React, { createContext, useContext, useState } from 'react';

const PatientInfoContext = createContext();

export const usePatientInfoContext = () => {
  return useContext(PatientInfoContext);
};

// Function to safely parse JSON
const safeJSONParse = (value, defaultValue) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return defaultValue;
  }
};

export const PatientInfoProvider = ({ children }) => {
  const [patientInfo, setPatientInfoState] = useState(() => {
    const storedPatientInfo = localStorage.getItem('patientInfo');
    return safeJSONParse(storedPatientInfo, {});
  });

  const setPatientInfo = (info) => {
    setPatientInfoState(info);
    localStorage.setItem('patientInfo', JSON.stringify(info));
  };

  return (
    <PatientInfoContext.Provider value={{ patientInfo, setPatientInfo }}>
      {children}
    </PatientInfoContext.Provider>
  );
};
