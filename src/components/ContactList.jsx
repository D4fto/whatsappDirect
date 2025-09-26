import styles from "./ContactList.module.css";
import Contact from "./Contact";
import formatPhone from "../utils/formatPhone";
import { useState } from "react";
import supabase from "../services/supabase";

export default function ContactList() {
  const [contactName, setContactName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  function submitContact (e){
    e.preventDefault() 
    let number = contactNumber.replace(/\D/g,'')
    if (number.length===0 || contactName.length===0){
      return
    }
    supabase.createContact(contactName, number)

  }

  return (
    <div className={`card ${styles.contactList}`}>
      <h1>
        <i className="bi bi-person"></i> Agenda de Contatos
      </h1>

      {/* Form para criação do contatp */}
      <form onSubmit={submitContact} action="">
        <div className={styles.nameAndNumberContainer}>
          <div>
            <label htmlFor="contactName">Nome</label>
            {/* Input para o nome do contato*/}
            <input
              value={contactName}  
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Nome do contato"
              onChange={(e)=>{setContactName(e.target.value)}}
              required
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Número</label>
            {/* Input para o número de telefone */}
            <input
              value={contactNumber}
              type="text"
              name="contactNumber"
              id="contactNumber"
              placeholder="Número"
              onChange={(e)=>{setContactNumber(formatPhone(e.target.value))}}
              required
            />
          </div>
        </div>
        <button type="submit" className={styles.button}>
          <i class="bi bi-person"></i> Salvar na Agenda
        </button>
      </form>
      <h2>Seus contatos (1)</h2>
      {/* Lista de contatos */}
      <div className={styles.contactsContainer}>
        <Contact id={1} name={"Joao"} phoneNumber={"(44) 9886-1234"} />
      </div>
    </div>
  );
}
