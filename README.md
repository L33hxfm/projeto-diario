# projeto-diario
# Diário Online

## Descrição do Projeto
Este é um **Diário Online** simples feito em HTML, CSS e JavaScript puro, com armazenamento local (localStorage).  
Ele permite que usuários criem uma conta, façam login, adicionem notas diárias, vejam suas notas e também excluam notas individualmente ou a conta inteira.

O objetivo é praticar manipulação de **DOM**, **localStorage** e criar uma aplicação interativa leve sem backend.

---

## Funcionalidades

- **Cadastro de usuário** (usuário e senha)
- **Login/logout**
- **Adicionar notas** com data automática
- **Visualizar notas**
- **Excluir notas individuais**
- **Excluir conta inteira**
- Alertas simples para ações de sucesso ou erro
- Armazenamento local via `localStorage` (sem banco de dados externo)

---

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- LocalStorage (para persistência de dados)

---

## Estrutura de Pastas

/projeto-diario <br>
│ <br>
├─ index.html # Tela de login/cadastro <br>
├─ diario.html # Tela principal do diário <br>
├─ /css <br>
│ └─ style.css # Estilos do site <br>
└─ /js <br>
└─ script.js # Lógica de cadastro, login, notas e exclusão


---

## Como Usar Localmente

1. Clone o repositório:
git clone https://github.com/L33hxfm/projeto-diario.git

2. Abra o arquivo index.html no navegador.

3. Cadastre um novo usuário ou faça login com um usuário existente.

4. No diário, adicione notas e use os botões para excluir notas ou a conta.
   
5. Todas as informações ficam armazenadas localmente no navegador.

---

## Observações

O projeto não possui backend. Todos os dados são salvos localmente no navegador, então ao limpar o cache ou mudar de navegador, os dados serão perdidos.

Cuidado ao usar o botão Excluir Conta, pois todos os dados do usuário serão removidos permanentemente.

O estilo é minimalista, mas você pode personalizar o CSS como quiser.

---

## Contato

Se tiver dúvidas ou quiser colaborar, entre em contato pelo Instagram: @l33hxfm
