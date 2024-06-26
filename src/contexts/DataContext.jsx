import React, { createContext, useState, useEffect } from "react";
import defaultData from "../constants/defaultData"

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData);

  const value = {
    
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
