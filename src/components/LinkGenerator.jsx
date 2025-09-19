import { useState } from "react";
import styles from './LinkGenerator.module.css'
import formatPhone from "../utils/formatPhone";


export default function LinkGenerator() {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handlePhoneInput(e) {
    setPhoneNumber(formatPhone(e.target.value));
  }

  return (
    <div className={styles.linkGenerator}>
      <h1>
        <i className="bi bi-chat"></i> Gerador de Links
      </h1>
      <form action="">
        <div>
          <label htmlFor="phoneNumber">Número do WhatsApp</label><br />
          <i className="bi bi-telephone"></i>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="(44) 91234-1234"
            value={phoneNumber}
            onChange={(e) => handlePhoneInput(e)}
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem (opcional)</label><br />
          <textarea name="message" id="message" placeholder="Digite sua mensagem aqui..."></textarea>
        </div>
        <button type="submit" className={styles.button}>
          <i className="bi bi-chat"></i> Preparar Mensagem
        </button>
      </form>
      <div>
        <p>Link gerado:</p>
        <div>
          <input type="text" id="whatsappLink" placeholder="https://wa.me/55449123..."/>
          <button id="copyLink">
            <i className="bi bi-copy"></i>
          </button>
        </div>
        <button className={styles.button}>
          <i className="bi bi-chat"></i> Abrir WhatsApp
        </button>
      </div>
    </div>
  );
}
