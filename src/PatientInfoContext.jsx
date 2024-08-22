import React, { createContext, useContext, useState, useEffect } from "react";

const PatientInfoContext = createContext();

export const usePatientInfoContext = () => {
  return useContext(PatientInfoContext);
};

const safeJSONParse = (value, defaultValue) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return defaultValue;
  }
};

export const PatientInfoProvider = ({ children }) => {
  const [patientInfo, setPatientInfoState] = useState(() => {
    const storedPatientInfo = localStorage.getItem("patientInfo");
    return storedPatientInfo ? safeJSONParse(storedPatientInfo, {}) : {};
  });

  const setPatientInfo = (info) => {
    setPatientInfoState(info);
    localStorage.setItem("patientInfo", JSON.stringify(info));
  };

  useEffect(() => {
    const storedPatientInfo = localStorage.getItem("patientInfo");
    if (storedPatientInfo) {
      setPatientInfoState(safeJSONParse(storedPatientInfo, {}));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedPatientInfo = localStorage.getItem("patientInfo");
      setPatientInfoState(
        storedPatientInfo ? safeJSONParse(storedPatientInfo, {}) : {},
      );
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <PatientInfoContext.Provider value={{ patientInfo, setPatientInfo }}>
      {children}
    </PatientInfoContext.Provider>
  );
};
