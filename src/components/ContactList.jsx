import styles from "./ContactList.module.css";
import Contact from "./Contact";
import formatPhone from "../utils/formatPhone";
import { useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";
import { ContactListContext } from "../contexts/ContactListContext";
import Loader from "./Loader";


export default function ContactList() {
  const { contactName, setContactName, contactNumber, setContactNumber, contacts, fetchContacts, contactFormState, setContactFormState, contactId, setContactId, contactCount } = useContext(ContactListContext)
  const [page, setPage] = useState(0)
  const contactPerPage = 5

  
  useEffect(()=>{
    fetchContacts(page)
  },[page])
  
  function handlePage(number){
    if(number<0 || number>(contactCount - 1)/contactPerPage){
      return
    }
    setPage(number)
  }
  
  //Função para enviar o contato para o supabase
  async function submitContact (e){
    e.preventDefault() 
    // Deixa apenas os números do telefone
    let number = contactNumber.replace(/\D/g,'')
    // Verifica se os campos estão válidos
    if (number.length < 10 || contactName.length===0){
      return
    }
    if(contactFormState === "creating"){
      // Cria o contato no supabase
      setContactFormState("loading")
      await supabase.createContact(contactName, number)
    } else if(contactFormState === "editing"){
      // Edita o contato no supabase
      if (contactId===-1){
        return
      }
      setContactFormState("loading")
      await supabase.updateContact(contactId, {name: contactName, phone_number: number})
    }
    setContactNumber('')
    setContactName('')
    setContactId(-1)
    setContactFormState("creating")
    await fetchContacts(page)
  }

  return (
    <div className={`card ${styles.contactList}`}>
      <h1>
        <i className="bi bi-person"></i> Agenda de Contatos
      </h1>

      {/* Form para criação do contato */}
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
          <i className="bi bi-person"></i> {contactFormState === "creating" ? "Salvar na Agenda" : contactFormState === "editing" ? "Editar Contato" : <Loader/>}
        </button>
      </form>
      <h2>Seus contatos ({contactCount})</h2>
      {/* Lista de contatos */}
      <div className={styles.contactsContainer}>
        {
          contacts.map((e)=>{
            return <Contact id={e.id} name={e.name} phoneNumber={e.phone_number} fetchContacts={fetchContacts}/>
          })
        }
        
      </div>
      <div className="container">
        {page > 0 && <i className={"bi bi-arrow-left-short " + styles.pageArrow} onClick={()=>handlePage(page - 1)}></i>}
        <input className={styles.pageNumber} type="number" value={page} onChange={(e) => handlePage(e.target.value)} disabled={contactCount <= 5}/>
        {page+1<=(contactCount - 1)/contactPerPage && <i className={"bi bi-arrow-right-short " + styles.pageArrow} onClick={()=>handlePage(page + 1)}></i>}
      </div>
    </div>
  );
}
