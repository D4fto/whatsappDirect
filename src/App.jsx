import "./styles/global.css";
import "./styles/theme.css";
import LinkGenerator from "./components/LinkGenerator";
import ContactList from "./components/ContactList";


export default function App (){
  return <>
    <h1 className="mainTitle"><i className="bi bi-chat"></i> WhatsHub</h1>
    <h2 className="subTitle">O jeito Mais rápido de iniciar conversas no WhatsApp. Gere links instantâneos e mantenha seus contatos organizados</h2>
    <div className="container">
      <LinkGenerator/>
      <ContactList/>
    </div>
  </>
}