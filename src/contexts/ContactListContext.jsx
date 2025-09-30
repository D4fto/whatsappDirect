import { useState, createContext } from "react";
import supabase from "../services/supabase";

// Cria o contexto
export const ContactListContext = createContext();

export function ContactListProvider({ children }) {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactId, setContactId] = useState(-1);
  const [contacts, setContacts] = useState([]);
  const [contactFormState, setContactFormState] = useState("creating");

  async function fetchContacts() {
    const { data, error } = await supabase.readContacts();
    if (error) {
      console.error(error);
    } else {
      setContacts(data);
    }
  }

  return (
    <ContactListContext.Provider
      value={{
        contactName,
        setContactName,
        contactNumber,
        setContactNumber,
        contacts,
        fetchContacts,
        contactFormState,
        setContactFormState,
        contactId,
        setContactId,
      }}
    >
      {children}
    </ContactListContext.Provider>
  );
}
