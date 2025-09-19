import "./styles/global.css";
import "./styles/theme.css";
import LinkGenerator from "./components/LinkGenerator";
import ContactList from "./components/ContactList";


export default function App (){
  return <>
    <h1>WhatsHub</h1>
    <h2>O jeito Mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos e mantenha seus contatos organizados</h2>
    <div>
      <LinkGenerator/>
      <ContactList/>
    </div>
  </>
}