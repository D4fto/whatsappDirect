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
  const [contactCount, setContactCount] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  async function fetchContacts(page, search = "") {
    await getContactsCount();
    const { data, error } = await supabase.readContacts(page, search);
    if (error) {
      console.error(error);
    } else {
      setContacts(data);
    }
  }
  async function getContactsCount() {
    const { count, error } = await supabase.countContacts();
    if (error) {
      console.error(error);
    } else {
      setContactCount(count);
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
        contactCount,
        page,
        setPage,
        search,
        setSearch,
      }}
    >
      {children}
    </ContactListContext.Provider>
  );
}
