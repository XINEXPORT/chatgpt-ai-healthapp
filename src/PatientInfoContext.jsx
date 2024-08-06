import React, { createContext, useContext, useState } from 'react';

const PatientInfoContext = createContext();

export const usePatientInfoContext = () => {
  return useContext(PatientInfoContext);
};

export const PatientInfoProvider = ({ children }) => {
  const [patientInfo, setPatientInfo] = useState({});

  return (
    <PatientInfoContext.Provider value={{ patientInfo, setPatientInfo }}>
      {children}
    </PatientInfoContext.Provider>
  );
};