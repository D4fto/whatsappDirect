import { useContext, useState } from "react";
import { LinkGeneratorContext } from "../contexts/LinkGeneratorContext";
import styles from "./LinkGenerator.module.css";
import formatPhone from "../utils/formatPhone";
import CopyButton from "./CopyButton";

export default function LinkGenerator() {
  const { phoneNumber, setPhoneNumber } = useContext(LinkGeneratorContext)
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");

  // função para tratamento do input de telefone
  function handlePhoneInput(e) {
    setPhoneNumber(formatPhone(e.target.value));
  }

  // Função para gerar o link de envio ao whatsapp
  function generateLink(e){
    e.preventDefault()
    // Deixa apenas os números do telefone
    let number = phoneNumber.replace(/\D/g, '')
    // Codifica a mensagem para ser usada na url
    let encodedMessage = encodeURIComponent(message)

    //se o numero de telefone for menor que 10, para a função
    if (number.length < 10){
      return
    }
    if (encodedMessage.length === 0){
      setLink(`https://wa.me/55${number}`)
      return
    }
    setLink(`https://wa.me/55${number}?text=${encodedMessage}`)

  }

  return (
    <div className={`card ${styles.linkGenerator}`}>
      <h1>
        <i className="bi bi-chat"></i> Gerador de Links
      </h1>
      {/* Form para a geração do link */}
      <form action="" onSubmit={generateLink}>
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
              required
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
            value={message}
            onChange={e =>setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.button} disabled={phoneNumber.replace(/\D/g, '').length<10}>
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
            value={link}
            disabled
          />
          {/* Botão para copiar o link */}
          <CopyButton str={link}/>
        </div>
        {/* Botão para redirecionar para o link gerado */}
        <button onClick={()=>{window.open(link,'_blank')}} disabled ={link.length===0} className={styles.button}>
          <i className="bi bi-chat"></i> Abrir WhatsApp
        </button>
      </div>
    </div>
  );
}
