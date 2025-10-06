import styles from "./Contact.module.css";
import formatPhone from "../utils/formatPhone";
import supabase from "../services/supabase";
import { LinkGeneratorContext } from "../contexts/LinkGeneratorContext";
import { ContactListContext } from "../contexts/ContactListContext";
import { useContext } from "react";

export default function Contact({ id, name, phoneNumber, fetchContacts }) {
  const { setPhoneNumber } = useContext(LinkGeneratorContext)
  const { setContactName, setContactNumber, setContactId, setContactFormState, page} = useContext(ContactListContext)
  

  async function deleteContact(id) {
    await supabase.deleteContact(id)
    await fetchContacts(page)
  }
  async function handleEditContact() {
    setContactName(name)
    setContactNumber(formatPhone(phoneNumber))
    setContactId(id)
    setContactFormState("editing")
  }

  return (
    <div className={styles.contact}>
      <div className={styles.nameAndNumberContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{formatPhone(phoneNumber)}</p>
      </div>
      <button onClick={()=>setPhoneNumber(formatPhone(phoneNumber))}>Mensagem</button>
      <button onClick={handleEditContact}>Editar</button>
      <button onClick={()=>deleteContact(id)}>
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}
