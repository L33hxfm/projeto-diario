// Cadastro fake
function cadastro() {
    let email = document.getElementById("novoEmail").value;
    let senha = document.getElementById("novaSenha").value;

    if (email && senha) {
        localStorage.setItem(email, senha);
        alert("Usuário cadastrado!");
    } else {
        alert("Preencha todos os campos!");
    }
}

// Login fake
function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (localStorage.getItem(email) === senha) {
        localStorage.setItem("logado", email);
        window.location.href = "pages/diario.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// Logout
function logout() {
    localStorage.removeItem("logado");
    window.location.href = "Index.html";
}

// Salvar entrada do diário
function salvarEntrada() {
    let texto = document.getElementById("entrada").value;
    let usuario = localStorage.getItem("logado");

    if (!usuario) return;

    let entradas = JSON.parse(localStorage.getItem("entradas_" + usuario)) || [];
    let data = new Date().toLocaleString();
    entradas.push({ data, texto });
    localStorage.setItem("entradas_" + usuario, JSON.stringify(entradas));

    document.getElementById("entrada").value = ""; // 🔹 limpa o campo depois de salvar
    mostrarEntradas(); // 🔹 atualiza a lista
}

// Mostrar entradas
function mostrarEntradas() {
  let usuario = localStorage.getItem("logado");
  if (!usuario) return;

  let lista = document.getElementById("listaEntradas");
  if (!lista) return;

  lista.innerHTML = ""; // limpa a lista antes de recriar

  let entradas = JSON.parse(localStorage.getItem("entradas_" + usuario)) || [];

  entradas.forEach((e, index) => {
    let li = document.createElement("li");
    li.textContent = `[${e.data}] ${e.texto} `;

    // criar botão excluir
    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.style.marginLeft = "10px";
    btnExcluir.onclick = () => {
      entradas.splice(index, 1); // remove a entrada do array
      localStorage.setItem("entradas_" + usuario, JSON.stringify(entradas)); // salva novamente
      mostrarEntradas(); // atualiza a lista
    };

    li.appendChild(btnExcluir);
    lista.appendChild(li);
  });
}

function excluirConta() {
  let usuario = localStorage.getItem("logado");
  if (!usuario) return;

  // remove usuário e todas as entradas
  localStorage.removeItem(usuario); // senha
  localStorage.removeItem("entradas_" + usuario);
  localStorage.removeItem("logado");

  alert("Conta excluída com sucesso!");
  window.location.href = "Index.html";
}


// Carregar automaticamente quando abre o diário
document.addEventListener("DOMContentLoaded", mostrarEntradas);


