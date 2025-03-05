// Contagem do tempo de amor
function atualizarContador() {
    const inicio = new Date("2024-12-13T00:00:00");
    const agora = new Date();
    const diferenca = agora - inicio;

    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const anos = Math.floor(dias / 365);

    const diasRestantes = dias % 365;
    const horasRestantes = horas % 24;
    const minutosRestantes = minutos % 60;
    const segundosRestantes = segundos % 60;

    document.getElementById("contador").innerText = 
        `${anos} anos, ${diasRestantes} dias, ${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador();

// Troca de foto ao passar a mão
const fotos = ["imagem.jpeg", "imagem2.jpeg"];
let indexFoto = 0;

const fotoContainer = document.getElementById("foto-container");
const foto = document.getElementById("foto");

function trocarFoto() {
    indexFoto = (indexFoto + 1) % fotos.length;
    foto.src = fotos[indexFoto];
}

fotoContainer.addEventListener("mouseenter", trocarFoto);
fotoContainer.addEventListener("touchstart", trocarFoto);

// Efeito de corações caindo
function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("heart");
    coracao.innerHTML = "❤️";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 3 + 2 + "s"; 

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 5000);
}

setInterval(criarCoracao, 500);
