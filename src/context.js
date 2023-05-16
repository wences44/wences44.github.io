import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import countries from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [countriess, setCountriess] = useState([]);

  const fetchPaiss = useCallback(() => {
    setLoading(true);
    try {
      const matchingCountries = countries.filter(function (el) {
        return el.name.toUpperCase().startsWith(searchTerm.toUpperCase());
      });
      if (matchingCountries) {
        const newCountries = matchingCountries.map((item) => {
          const { id, name, flag, entities } = item;

          return {
            id: id,
            name: name,
            image: flag,
            entities: entities,
          };
        });
        setCountriess(newCountries);
      } else {
        setCountriess([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchPaiss();
  }, [searchTerm, fetchPaiss]);

  return (
    <AppContext.Provider value={{ loading, countriess, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
