import { useState } from "react";
import styles from "./LinkGenerator.module.css";
import formatPhone from "../utils/formatPhone";

export default function LinkGenerator() {
  const [phoneNumber, setPhoneNumber] = useState("");

  // função para tratamento do input de telefone
  function handlePhoneInput(e) {
    setPhoneNumber(formatPhone(e.target.value));
  }

  return (
    <div className={`card ${styles.linkGenerator}`}>
      <h1>
        <i className="bi bi-chat"></i> Gerador de Links
      </h1>
      {/* Form para a geração do link */}
      <form action="">
        <div>
          <label htmlFor="phoneNumber">Número do WhatsApp</label>
          <br />
          <div className={styles.iconInput}>
            <i className="bi bi-telephone"></i>
            {/* Input para o número de telefone */}
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="(44) 91234-1234"
              value={phoneNumber}
              onChange={(e) => handlePhoneInput(e)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Mensagem (opcional)</label>
          {/* Input para a mensagem */}
          <textarea
            name="message"
            id="message"
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          <i className="bi bi-chat"></i> Preparar Mensagem
        </button>
      </form>
      <div className={styles.linkContainer}>
        <p>Link gerado:</p>
        <div className={styles.showLinkContainer}>
          {/* Input para visualizar o link */}
          <input
            type="text"
            id="whatsappLink"
            placeholder="https://wa.me/55449123..."
            disabled
          />
          {/* Botão para copiar o link */}
          <button id="copyLink">
            <i className="bi bi-copy"></i>
          </button>
        </div>
        {/* Botão para redirecionar para o link gerado */}
        <button className={styles.button}>
          <i className="bi bi-chat"></i> Abrir WhatsApp
        </button>
      </div>
    </div>
  );
}
