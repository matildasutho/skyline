import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [dataAv, setDataAv] = useState(0);

    return (
        <DataContext.Provider value={{ data, setData, dataAv, setDataAv }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
// export function useData() {
//     const context = useContext(DataContext);
//     if (!context) {
//         throw new Error("useData must be used within a DataProvider");
//     }
//     return context;
// }
