// --- AUTENTICAÇÃO ---
async function cadastro() {
    const email = document.getElementById("novoEmail").value;
    const senha = document.getElementById("novaSenha").value;

    try {
        await firebase.auth().createUserWithEmailAndPassword(email, senha);
        alert("Usuário cadastrado e logado!");
        window.location.href = "./pages/diario.html";
    } catch (error) {
        alert("Erro no cadastro: " + error.message);
    }
}

async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        await firebase.auth().signInWithEmailAndPassword(email, senha);
        alert("Login feito com sucesso!");
        window.location.href = "./pages/diario.html";
    } catch (error) {
        alert("Erro no login: " + error.message);
    }
}

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../index.html";
    });
}

// --- SALVAR ENTRADA ---
async function salvarEntrada() {
    const user = firebase.auth().currentUser;
    if (!user) {
        alert("Você precisa estar logado!");
        return;
    }

    const texto = document.getElementById("entrada").value;
    if (!texto.trim()) {
        alert("Digite algo para salvar!");
        return;
    }

    try {
        await firebase.firestore().collection("notas").add({
            uid: user.uid,
            texto: texto,
            data: new Date().toISOString()
        });
        document.getElementById("entrada").value = "";
        carregarEntradas();
    } catch (error) {
        alert("Erro ao salvar: " + error.message);
    }
}

async function carregarEntradas() {
    const user = firebase.auth().currentUser;
    if (!user) return;

    const lista = document.getElementById("listaNotas");
    lista.innerHTML = "";

    try {
        const snapshot = await firebase.firestore()
            .collection("notas")
            .where("uid", "==", user.uid)
            .orderBy("data", "desc")
            .get();

        if (snapshot.empty) {
            lista.innerHTML = "<li>Nenhuma nota salva ainda.</li>";
            return;
        }

        snapshot.forEach(doc => {
            const data = doc.data();
            const li = document.createElement("li");
            li.textContent = data.texto;

            const btn = document.createElement("button");
            btn.textContent = "🗑";
            btn.onclick = async () => {
                await firebase.firestore().collection("notas").doc(doc.id).delete();
                carregarEntradas();
            };

            li.appendChild(btn);
            lista.appendChild(li);
        });
    } catch (error) {
        alert("Erro ao carregar notas: " + error.message);
    }
}


// --- MONITORAR LOGIN ---
firebase.auth().onAuthStateChanged(user => {
    if (user && document.getElementById("listaNotas")) {
        carregarEntradas();
    }
});
