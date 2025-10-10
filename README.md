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

Exemplo de link gerado: https://wa.me/5599999999999?text=Olá,%20tudo%20bem%3F


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
```git
git clone https://github.com/D4fto/whatsappDirect.git
```

### 📂 Acessar o Diretório
```bash
cd whatsappDirect
```

### 🗄️ Configure o Supabase

Para armazenar e gerenciar os contatos, o projeto utiliza o **[Supabase](https://supabase.com/)** como banco de dados.

Siga os passos abaixo para configurar corretamente:

1. **Crie uma conta gratuita** no [Supabase](https://supabase.com/).  
2. Crie um **novo projeto** e copie as chaves de acesso (`Project URL` e `anon/public key`).  
3. No painel do projeto, acesse a aba **Table Editor** e crie uma nova tabela chamada:

4. Adicione as seguintes colunas:

| Coluna        | Tipo de Dado | Descrição                       |
|----------------|--------------|----------------------------------|
| `id`           | `int8` (ou `bigint`) | Identificador único do contato |
| `name`         | `text`       | Nome do contato                  |
| `phone_number` | `text`       | Número de telefone do contato    |
| `created_at` | `TIMESTAMP`       | Coluna criada automaticamente    |


5. Marque a coluna **`id`** como **Primary Key** e habilite a opção **Auto Increment**.


### ⚙️ Configurar Variáveis de Ambiente

Utilize o arquivo .env.example e o renomeie para .env adicione as variáveis necessárias.
```env
VITE_SUPABASE_KEY=<sua-chave>
VITE_SUPABASE_URL=https://<sua-url-do-projeto>.supabase.co
```

### ▶️ Executar a Aplicação
```bash
npm run dev
```
Acesse a aplicação no navegador:
👉 http://localhost:5173

---

## 🌟 Funcionalidade Extra

Implementamos duas melhorias voltadas à eficiência e à experiência do usuário:

### 🔢 Paginação de Contatos

A lista de contatos foi aprimorada com paginação, exibindo 5 contatos por página.
Essa abordagem reduz a transferência de dados e melhora o desempenho, especialmente para usuários com muitas entradas na agenda.

Objetivo:
➡️ Minimizar a carga de rede e otimizar o tempo de carregamento.

### 🔍 Sistema de Pesquisa

Também adicionamos uma barra de pesquisa que permite filtrar contatos por nome em tempo real.
Essa funcionalidade melhora a usabilidade, permitindo encontrar rapidamente um contato em listas grandes.

Objetivo:
➡️ Tornar a navegação mais fluida e intuitiva.

---

## 🧠 Tecnologias Utilizadas

- **Frontend:** React.js, JavaScript, CSS Modules  
- **Hospedagem:** [Vercel](https://vercel.com/)  
- **Gerenciamento de Estado Local:** LocalStorage  
- **Controle de Versão:** Git + GitHub

---

## 👨‍💻 Autores

Projeto desenvolvido por:  
- [@D4fto](https://github.com/D4fto)  
- [@BrunoBULLET](https://github.com/BrunoBULLET)

---
