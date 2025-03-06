// Variável global para armazenar os nomes dos amigos
let amigos = [];

let sorteados = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    let nome = input.value.trim();
  
    if (nome === "" || !isNaN(nome)) {
      alert("Por favor, insira um nome válido.");
      return;
    }
  
    amigos.push(nome);
    atualizarlista();
  
    input.value = "";
  }

function atualizarlista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert ("Por favor, adicione pelo o menos 2 amigos");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${amigos[indiceSorteado]}`; 

    let limparLista =  document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];   
}


    
   

