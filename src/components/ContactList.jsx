import styles from "./ContactList.module.css";
import Contact from "./Contact";


export default function ContactList() {
  return (
    <div className={`card ${styles.contactList}`}>
      <h1>
        <i className="bi bi-person"></i> Agenda de Contatos
      </h1>

      {/* Form para criação do contatp */}
      <form action="">
        <div className={styles.nameAndNumberContainer}>
          <div>
            <label htmlFor="contactName">Nome</label>
            {/* Input para o nome do contato*/}
            <input
              type="text"
              name="contactName"
              id="contactName"
              placeholder="Nome do contato"
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Número</label>
            {/* Input para o número de telefone */}
            <input
              type="text"
              name="contactNumber"
              id="contactNumber"
              placeholder="Número"
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
