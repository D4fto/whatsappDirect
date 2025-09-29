import { useState, createContext } from "react";

// Cria o contexto
export const LinkGeneratorContext = createContext()

export function LinkGeneratorProvider({ children }){
  const [phoneNumber, setPhoneNumber] = useState("");

  return(
    <LinkGeneratorContext.Provider value={{phoneNumber, setPhoneNumber}}>
      {children}
    </LinkGeneratorContext.Provider>
  )
}