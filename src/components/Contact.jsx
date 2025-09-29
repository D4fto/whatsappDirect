import styles from "./Contact.module.css";
import formatPhone from "../utils/formatPhone";

export default function Contact({ id, name, phoneNumber }) {
  return (
    <div className={styles.contact}>
      <div className={styles.nameAndNumberContainer}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{formatPhone(phoneNumber)}</p>
      </div>
      <button>Mensagem</button>
      <button>Editar</button>
      <button>
        <i className="bi bi-trash3"></i>
      </button>
    </div>
  );
}
