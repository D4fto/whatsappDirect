# 📱 WhatsHub

**WhatsHub** é uma ferramenta de produtividade que facilita o início de conversas no WhatsApp.  
Com ele, é possível **gerar links diretos** para conversas e **gerenciar uma agenda de contatos**, tudo de forma simples e rápida.

🔗 **Acesse o projeto online:**  
👉 [https://whatshub-eight.vercel.app](https://whatshub-eight.vercel.app)

---

## 🚀 Funcionalidades Principais

### 1. Gerador de Links
Permite criar um link `wa.me` a partir de um **número de telefone** e uma **mensagem opcional**.  
Ao clicar nesse link, o WhatsApp é aberto diretamente com a conversa e a mensagem pré-preenchida.

Exemplo de link gerado:
https://wa.me/5599999999999?text=Olá,%20tudo%20bem%3F

markdown
Copiar código

### 2. Agenda de Contatos
Uma **agenda simples e funcional**, onde é possível:
- 📋 Adicionar novos contatos  
- ✏️ Editar informações existentes  
- ❌ Excluir contatos  
- 🔍 Pesquisar contatos rapidamente  

Os contatos são exibidos em uma **lista organizada**, facilitando o acesso aos números mais utilizados e integrando-se diretamente ao gerador de links.

---

## ⚙️ Como Executar Localmente

### 🧩 Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Um editor de texto, como o [VS Code](https://code.visualstudio.com/)

### 📥 Clonar o Repositório
```bash
git clone https://github.com/D4fto/whatsappDirect.git
📂 Acessar o Diretório
bash
Copiar código
cd whatsappDirect
📦 Instalar Dependências
bash
Copiar código
npm install
⚙️ Configurar Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e adicione as variáveis necessárias (se aplicável).
Exemplo:

env
Copiar código
# Caso utilize APIs externas ou chaves privadas
# API_KEY=suachaveaqui
💡 Caso o projeto não utilize variáveis de ambiente, esta etapa pode ser ignorada.

▶️ Executar a Aplicação
bash
Copiar código
npm run dev
Acesse a aplicação no navegador:
👉 http://localhost:5173

🌟 Funcionalidade Extra
Implementamos duas melhorias voltadas à eficiência e experiência do usuário:

🔢 Paginação de Contatos
A lista de contatos foi aprimorada com paginação, exibindo 5 contatos por página.
Essa abordagem reduz a transferência de dados e melhora o desempenho, especialmente para usuários com muitas entradas na agenda.

Objetivo:
➡️ Minimizar a carga de rede e otimizar o tempo de carregamento.

🔍 Sistema de Pesquisa
Também adicionamos uma barra de pesquisa que permite filtrar contatos por nome em tempo real.
Essa funcionalidade melhora a usabilidade, permitindo encontrar rapidamente um contato em listas grandes.

Objetivo:
➡️ Tornar a navegação mais fluida e intuitiva.

🧠 Tecnologias Utilizadas
Frontend: HTML, CSS, JavaScript (Vanilla)

Hospedagem: Vercel

Gerenciamento de Estado Local: LocalStorage

Controle de Versão: Git + GitHub

👨‍💻 Autores
Projeto desenvolvido por:

@D4fto

📜 Licença
Este projeto está sob a licença MIT.
Sinta-se à vontade para utilizar e modificar o código conforme necessário.