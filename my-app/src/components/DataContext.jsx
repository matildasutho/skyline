import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(0); // Initialize data as 0, can be any initial value you prefer

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
