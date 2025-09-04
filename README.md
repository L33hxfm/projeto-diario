# 📖 Meu Diário

Um site simples de **diário pessoal** feito com **HTML, CSS, JavaScript e Firebase**.  
Você pode criar uma conta, fazer login e salvar suas anotações de forma segura na nuvem.

---

## ✨ Funcionalidades

- 👤 Cadastro/Login com **Firebase Authentication**  
- 📝 Criar, listar e excluir entradas do diário  
- ☁️ Persistência de dados no **Firebase Firestore**  
- 🔐 Logout seguro e opção de excluir conta  
- 📱 Design responsivo (funciona em celular e desktop)  

---

## 🚀 Como rodar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/L33hxfm/projeto-diario.git
```

2. Entre na pasta do projeto:

```bash
cd meu-diario
```

3. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).  
   - Ative **Authentication → E-mail/Senha**  
   - Ative **Cloud Firestore Database**  

4. Copie as credenciais do Firebase (`firebaseConfig`) e cole no arquivo `script.js`:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SUA_APP_ID"
};
```

5. Abra o arquivo `index.html` no navegador.  
   > 💡 Não precisa de servidor, funciona direto em qualquer navegador moderno.

---

## 🔒 Regras do Firestore

No Firebase Console, configure suas regras do Firestore para que **cada usuário só veja suas próprias notas**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notas/{document} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

---

## 📂 Estrutura do projeto

```
📁 projeto-diario
 ├── 📄 index.html        # Tela de login e cadastro
 ├─ 📁 pages
     └── 📄 diario.html       # Tela principal do diário
 ├─ 📁 CSS
     └── 📄 style.css        # Estilos globais
 ├─ 📁 JS
     └── 📄 script.js          # Lógica com Firebase (auth + firestore)
 └── 📄 README.md         # Documentação do projeto
```

---

<!--## 🖼️ Preview

### Tela de Login / Cadastro
![Login](./prints/login.png)

### Tela do Diário
![Diário](./prints/diario.png)

--->

## 🔮 Ideias para melhorias

- [ ] Exportar notas em **PDF** ou **Markdown**  
- [ ] Modo **dark/light** personalizável  
- [ ] Pesquisa e filtros nas anotações  
- [ ] Upload de imagens no diário (Firebase Storage)  
- [ ] Melhorar regras de segurança do Firestore  

---

## 📜 Licença

Este projeto é open-source e pode ser usado livremente.  
