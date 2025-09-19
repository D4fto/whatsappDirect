import { useState } from "react"
import formatPhone from "../utils/formatPhone";

export default function LinkGenerator(){
  const [phoneNumber, setPhoneNumber] = useState('');

  function handlePhoneInput(e){
    setPhoneNumber(formatPhone(e.target.value))
  }

  return <div className="linkGenerator">
    <h1>Gerador de Links</h1>
    <label htmlFor="phoneNumber">Número do WhatsApp</label>
    <input type="text" id="phoneNumber" value={phoneNumber} onChange={e => handlePhoneInput(e)}/>
  </div>
}