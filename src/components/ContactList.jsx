export default function ContactList(){
  return <div className="ContactList">
    <h1><i class="bi bi-person"></i> Agenda de Contatos</h1>
    <form action="">
      <div>
        <div>
          <label htmlFor="contactName">Nome</label>
          <input type="text" name="contactName" id="contactName" placeholder="Nome do contato"/>
        </div>
        <div>
          <label htmlFor="contactNumber">Número</label>
          <input type="text" name="contactNumber" id="contactNumber" placeholder="Número"/>
        </div>
      </div>
      <button type="submit"><i class="bi bi-person"></i> Salvar na Agenda</button>
    </form>
    <h2>Seus contatos (1)</h2>
    <div>
      <div>
        <div>
          <p>Joao</p>
          <p>(44) 91234-1234</p>
        </div>
        <button>Mensagem</button>
        <button>Editar</button>
        <button><i className="bi bi-trash3"></i></button>
      </div>
    </div>
  </div>
}