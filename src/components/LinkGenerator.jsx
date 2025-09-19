import { useState } from "react"
import formatPhone from "../utils/formatPhone";

export default function LinkGenerator(){
  const [phoneNumber, setPhoneNumber] = useState('');

  function handlePhoneInput(e){
    setPhoneNumber(formatPhone(e.target.value))
  }

  return <div className="linkGenerator">
    <h1><i className="bi bi-chat"></i> Gerador de Links</h1>
    <form action="">
      <label htmlFor="phoneNumber">Número do WhatsApp</label>
      <i className="bi bi-telephone"></i>
      <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={e => handlePhoneInput(e)}/>
      <label htmlFor="message">Mensagem (opcional)</label>
      <textarea name="message" id="message"></textarea>
      <button type="submit"><i className="bi bi-chat"></i> Preparar Mensagem</button>
    </form>
    <div>
      <p>Link gerado:</p>
      <input type="text" id="whatsappLink"/>
      <button id="copyLink"><i className="bi bi-copy"></i></button>
      <button><i className="bi bi-chat"></i> Abrir WhatsApp</button>
    </div>
  </div>
}