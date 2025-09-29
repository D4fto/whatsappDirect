import styles from "./ContactList.module.css";
import Contact from "./Contact";
import formatPhone from "../utils/formatPhone";
import { useState, useEffect } from "react";
import supabase from "../services/supabase";


export default function ContactList() {
  const [contactName, setContactName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [contacts, setContacts] = useState([])

  async function fetchContacts() {
    const { data, error } = await supabase.readContacts()
    if (error) {
      console.error(error)
    }else{
      setContacts(data)
    }
    
  }
  useEffect(()=>{
    fetchContacts()
  },[])

  //Função para enviar o contato para o supabase
  async function submitContact (e){
    e.preventDefault() 
    // Deixa apenas os números do telefone
    let number = contactNumber.replace(/\D/g,'')
    // Verifica se os campos estão válidos
    if (number.length < 10 || contactName.length===0){
      return
    }
    // Cria o contato no supabase
    await supabase.createContact(contactName, number)
    setContactNumber('')
    setContactName('')
    await fetchContacts()
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
        {/* Botão pra salvar o contato na agenda */}
        <button type="submit" className={styles.button} disabled={contactNumber.replace(/\D/g,'').length<10 || contactName.length===0}>
          <i class="bi bi-person"></i> Salvar na Agenda
        </button>
      </form>
      <h2>Seus contatos ({contacts.length})</h2>
      {/* Lista de contatos */}
      <div className={styles.contactsContainer}>
        {
          contacts.map((e)=>{
            return <Contact id={e.id} name={e.name} phoneNumber={e.phone_number} />
          })
        }
        
      </div>
    </div>
  );
}
