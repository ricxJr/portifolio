const projetos = [
    {
        titulo: "vscode-objectscript",
        descricao: "Contribuições na extensão do VS Code para InterSystems ObjectScript mantida pela Consistem.",
        tags: ["TypeScript", "VS Code API", "ObjectScript"],
        link: "https://github.com/consistem/vscode-objectscript"
    },
    {
        titulo: "auxilioDev",
        descricao: "Gestor de auxílios com dashboard de KPIs, gráficos e persistência em CSV via File System Access API e IndexedDB.",
        tags: ["JavaScript", "IndexedDB", "FS Access API"],
        link: "https://github.com/ricxJr/auxilioDev"
    },
    {
        titulo: "Aplicação Desktop",
        descricao: "Projeto de certificação Estácio desenvolvido em equipe (Team Dev30).",
        tags: ["Python"],
        imagem: "./assets/img/ferramentas.png",
        link: "https://github.com/ricxJr/Missao_certificacao_M1_Estacio"
    },
    {
        titulo: "Biblioteca com React",
        descricao: "Aplicação de catálogo de livros construída com React e TypeScript.",
        tags: ["React", "TypeScript"],
        imagem: "./assets/img/biblioteca.png",
        link: "https://biblioteca-react-ricardojr.vercel.app/"
    },
    {
        titulo: "Empresa Belink",
        descricao: "Landing page institucional responsiva.",
        tags: ["HTML", "CSS"],
        imagem: "./assets/img/belink.png",
        link: "https://page-belink.vercel.app/"
    },
    {
        titulo: "Mochila de Viagem",
        descricao: "Lista interativa com persistência local e manipulação do DOM.",
        tags: ["JavaScript", "LocalStorage"],
        imagem: "./assets/img/mochilaViagens.png",
        link: "https://mochila-de-viagem-ricardojr.vercel.app/"
    },
    {
        titulo: "Adivinhação por Voz",
        descricao: "Jogo de número secreto controlado por reconhecimento de voz.",
        tags: ["JavaScript", "Web Speech API"],
        imagem: "./assets/img/numeroSecreto.png",
        link: "https://jogo-adivinhacao-js.vercel.app/"
    },
    {
        titulo: "Midi",
        descricao: "Teclado de sons interativo no navegador.",
        tags: ["JavaScript"],
        imagem: "./assets/img/midi.png",
        link: "https://ricardomidi-js.vercel.app/"
    },
    {
        titulo: "Loja de Skate",
        descricao: "Layout de e-commerce construído com CSS Grid.",
        tags: ["HTML", "CSS Grid"],
        imagem: "./assets/img/site-grid.png",
        link: "https://site-skate-ricardojr.vercel.app/"
    },
    {
        titulo: "Jogo Pong",
        descricao: "Clássico Pong implementado com p5.js.",
        tags: ["p5.js"],
        imagem: "./assets/img/pong.png",
        link: "https://editor.p5js.org/antunesbastiao20/sketches/bfVM5PvzG"
    },
    {
        titulo: "Jogo da Vaquinha",
        descricao: "Jogo 2D com colisões e pontuação em p5.js.",
        tags: ["p5.js"],
        imagem: "./assets/img/vaquinha.png",
        link: "https://editor.p5js.org/antunesbastiao20/sketches/zAIgMG0Iv"
    }
];

const grade = document.getElementById("gradeProjetos");
grade.innerHTML = projetos.map(p => `
    <a class="cartao revelar" href="${p.link}" target="_blank" rel="noopener">
        ${p.imagem
            ? `<div class="cartao__imagem"><img src="${p.imagem}" alt="" loading="lazy"></div>`
            : `<div class="cartao__imagem cartao__imagem--vazia"><span>${p.titulo.charAt(0).toUpperCase()}</span></div>`}
        <div class="cartao__corpo">
            <h3>${p.titulo}</h3>
            <p>${p.descricao}</p>
            <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
        </div>
    </a>
`).join("");

document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const topo = document.getElementById("topo");
const botaoMenu = document.querySelector(".topo__menu");
botaoMenu.addEventListener("click", () => {
    const aberto = topo.classList.toggle("topo--aberto");
    botaoMenu.setAttribute("aria-expanded", aberto);
});
document.querySelectorAll(".topo__nav a").forEach(a =>
    a.addEventListener("click", () => {
        topo.classList.remove("topo--aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
    })
);

// Cabeçalho compacto ao rolar
const aoRolar = () => topo.classList.toggle("topo--rolado", window.scrollY > 24);
window.addEventListener("scroll", aoRolar, { passive: true });
aoRolar();

// Revelação suave ao entrar na tela
const elementos = document.querySelectorAll(".revelar");
if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("visivel");
                observador.unobserve(e.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elementos.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 70}ms`;
        observador.observe(el);
    });
} else {
    elementos.forEach(el => el.classList.add("visivel"));
}

// Link ativo na navegação
const links = document.querySelectorAll(".topo__nav a[href^='#']");
const secoes = [...links].map(l => document.querySelector(l.getAttribute("href")));
const marcarAtivo = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
        if (e.isIntersecting) {
            links.forEach(l => l.classList.toggle("ativo", l.getAttribute("href") === `#${e.target.id}`));
        }
    });
}, { rootMargin: "-45% 0px -50% 0px" });
secoes.forEach(s => s && marcarAtivo.observe(s));
