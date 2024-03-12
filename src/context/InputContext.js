import { createContext, useContext, useState } from "react";

export const InputContext = createContext({});

export const InputDataProvider = ({children}) => {
  const [description, setDescription] = useState("");
  const [valor, setValor] =  useState(0);
  const [tipo, setTipo] =  useState("Entrada");
  const [list, setList] = useState([]);

  return(
    <InputContext.Provider value={{description, setDescription, valor, setValor, tipo, setTipo, list, setList}}>
      {children}
    </InputContext.Provider>
  )
}

export const useInputData = () => useContext(InputContext)