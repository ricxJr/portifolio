const projetos = [
    {
        titulo: { en: "vscode-objectscript", pt: "vscode-objectscript" },
        descricao: {
            en: "Contributions to the VS Code extension for InterSystems ObjectScript maintained by Consistem.",
            pt: "Contribuições na extensão do VS Code para InterSystems ObjectScript mantida pela Consistem."
        },
        tags: ["TypeScript", "VS Code API", "ObjectScript"],
        link: "https://github.com/consistem/vscode-objectscript"
    },
    {
        titulo: { en: "auxilioDev", pt: "auxilioDev" },
        descricao: {
            en: "Support-time tracker with a KPI dashboard, charts and CSV persistence via the File System Access API and IndexedDB.",
            pt: "Gestor de auxílios com dashboard de KPIs, gráficos e persistência em CSV via File System Access API e IndexedDB."
        },
        tags: ["JavaScript", "IndexedDB", "FS Access API"],
        link: "https://github.com/ricxJr/auxilioDev"
    },
    {
        titulo: { en: "Desktop Application", pt: "Aplicação Desktop" },
        descricao: {
            en: "Estácio certification project developed as a team (Team Dev30).",
            pt: "Projeto de certificação Estácio desenvolvido em equipe (Team Dev30)."
        },
        tags: ["Python"],
        imagem: "./assets/img/ferramentas.png",
        link: "https://github.com/ricxJr/Missao_certificacao_M1_Estacio"
    },
    {
        titulo: { en: "React Library", pt: "Biblioteca com React" },
        descricao: {
            en: "Book catalog application built with React and TypeScript.",
            pt: "Aplicação de catálogo de livros construída com React e TypeScript."
        },
        tags: ["React", "TypeScript"],
        imagem: "./assets/img/biblioteca.png",
        link: "https://biblioteca-react-ricardojr.vercel.app/"
    },
    {
        titulo: { en: "Belink", pt: "Empresa Belink" },
        descricao: {
            en: "Responsive corporate landing page.",
            pt: "Landing page institucional responsiva."
        },
        tags: ["HTML", "CSS"],
        imagem: "./assets/img/belink.png",
        link: "https://page-belink.vercel.app/"
    },
    {
        titulo: { en: "Travel Backpack", pt: "Mochila de Viagem" },
        descricao: {
            en: "Interactive list with local persistence and DOM manipulation.",
            pt: "Lista interativa com persistência local e manipulação do DOM."
        },
        tags: ["JavaScript", "LocalStorage"],
        imagem: "./assets/img/mochilaViagens.png",
        link: "https://mochila-de-viagem-ricardojr.vercel.app/"
    },
    {
        titulo: { en: "Voice Guessing Game", pt: "Adivinhação por Voz" },
        descricao: {
            en: "Secret number game controlled by speech recognition.",
            pt: "Jogo de número secreto controlado por reconhecimento de voz."
        },
        tags: ["JavaScript", "Web Speech API"],
        imagem: "./assets/img/numeroSecreto.png",
        link: "https://jogo-adivinhacao-js.vercel.app/"
    },
    {
        titulo: { en: "Midi", pt: "Midi" },
        descricao: {
            en: "Interactive sound keyboard in the browser.",
            pt: "Teclado de sons interativo no navegador."
        },
        tags: ["JavaScript"],
        imagem: "./assets/img/midi.png",
        link: "https://ricardomidi-js.vercel.app/"
    },
    {
        titulo: { en: "Skate Shop", pt: "Loja de Skate" },
        descricao: {
            en: "E-commerce layout built with CSS Grid.",
            pt: "Layout de e-commerce construído com CSS Grid."
        },
        tags: ["HTML", "CSS Grid"],
        imagem: "./assets/img/site-grid.png",
        link: "https://site-skate-ricardojr.vercel.app/"
    },
    {
        titulo: { en: "Pong", pt: "Jogo Pong" },
        descricao: {
            en: "The classic Pong implemented with p5.js.",
            pt: "Clássico Pong implementado com p5.js."
        },
        tags: ["p5.js"],
        imagem: "./assets/img/pong.png",
        link: "https://editor.p5js.org/antunesbastiao20/sketches/bfVM5PvzG"
    },
    {
        titulo: { en: "Cow Crossing", pt: "Jogo da Vaquinha" },
        descricao: {
            en: "2D game with collisions and scoring in p5.js.",
            pt: "Jogo 2D com colisões e pontuação em p5.js."
        },
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
            : `<div class="cartao__imagem cartao__imagem--vazia"><span>${p.titulo.en.charAt(0).toUpperCase()}</span></div>`}
        <div class="cartao__corpo">
            <h3></h3>
            <p></p>
            <ul class="tags">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
        </div>
    </a>
`).join("");

// Idiomas: o HTML traz o inglês (padrão); o português fica neste dicionário
const PT = {
    "nav.about": "Sobre",
    "nav.exp": "Trajetória",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.label": "Full-Stack · Arquitetura",
    "hero.lead": "Arquitetura de software para <strong>SaaS</strong>, <strong>ERP</strong> e <strong>Inteligência Artificial</strong>, atuando em projetos reais — de sistemas escaláveis a soluções com bancos vetoriais, RAG e MCP.",
    "hero.cta": "Ver projetos",
    "hero.badge": "<span class=\"hero__ponto\"></span> SaaS · ERP · IA",
    "sec.about": "Sobre",
    "sec.exp": "Trajetória",
    "sec.projects": "Projetos",
    "about.quote": "Da precisão da usinagem CNC à engenharia de software — uma carreira construída sobre <em>lógica, rigor e atenção ao detalhe</em>.",
    "about.p1": "Sou Tecnólogo em Desenvolvimento Full-Stack, com pós-graduação em Engenharia de Software. Atuo de ponta a ponta, do front-end ao back-end, e hoje meu foco está na <strong>arquitetura de software</strong>: desenhar sistemas escaláveis, bem estruturados e preparados para evoluir.",
    "about.p2": "Hoje atuo em <strong>projetos reais</strong> envolvendo <strong>plataformas SaaS</strong>, <strong>sistemas ERP</strong> e <strong>Inteligência Artificial aplicada</strong> — LLMs, agentes, RAG com <strong>bancos vetoriais</strong> e integrações via <strong>MCP (Model Context Protocol)</strong> que conectam a IA aos dados e processos do negócio.",
    "about.p3": "Antes do software, trabalhei com automação industrial e programação CNC. Essa base me deu disciplina de processo e um olhar cuidadoso para qualidade, que levo para cada linha de código.",
    "stat.degree": "Formação",
    "stat.degreeV": "Tecnólogo Full-Stack",
    "stat.post": "Especialização",
    "stat.postV": "Eng. de Software",
    "stat.focus": "Foco atual",
    "stat.focusV": "SaaS · ERP · IA",
    "exp.now": "Atual",
    "exp.c.p": "Desenvolvimento de ERP com React, TypeScript, Java e InterSystems ObjectScript, atuando em projetos reais de arquitetura e de integração com Inteligência Artificial — bancos vetoriais, RAG e servidores MCP. Contribuições em tooling de desenvolvimento, como a extensão <a href=\"https://github.com/consistem/vscode-objectscript\" target=\"_blank\" rel=\"noopener\">vscode-objectscript</a>, e automação de workflows com Git e SVN.",
    "exp.post": "Pós-graduação",
    "exp.post.h": "Engenharia de Software",
    "exp.post.p": "Arquitetura, qualidade e processos de desenvolvimento de software.",
    "exp.grad": "Graduação",
    "exp.grad.h": "Tecnólogo em Desenvolvimento Full-Stack <span>· Estácio</span>",
    "exp.grad.p": "Projetos em Python, Java (POO, JDBC, Jakarta EE, sockets), JavaScript e bancos de dados relacionais.",
    "exp.ind": "Indústria",
    "exp.ind.h": "Usinagem CNC &amp; Automação",
    "exp.ind.p": "Execução e depuração de programas CNC em centros de usinagem, programação de CLPs e, ainda no ensino médio, um braço robótico em C++.",
    "st.arch": "Arquitetura",
    "st.arch.l": "<li>SaaS multi-tenant</li><li>ERP</li><li>Design de sistemas</li><li>APIs &amp; integrações</li><li>Escalabilidade</li>",
    "st.ai": "Inteligência Artificial",
    "st.ai.l": "<li>LLMs &amp; agentes</li><li>MCP</li><li>RAG</li><li>Bancos vetoriais</li><li>Embeddings</li>",
    "st.tool.l": "<li>VS Code Extensions</li><li>Tauri</li><li>Monaco Editor</li><li>Automação de workflows</li>",
    "st.vcs": "Versionamento",
    "feat.label": "Projeto em destaque",
    "feat.p": "Resolução visual de conflitos de merge no Git comparando cada lado com o ancestral comum. App desktop com diffs sincronizados, classificação de conflitos, aplicação automática de mudanças seguras e integração com <code>git mergetool</code>.",
    "feat.link": "Ver repositório",
    "proj.hint": "Deslize para ver mais",
    "contact.label": "Contato",
    "contact.title": "Vamos construir<br><em>algo bem feito.</em>",
    "contact.text": "Aberto a conversas sobre tecnologia, projetos e oportunidades.",
    "contact.certs": "Certificados",
    "footer.top": "Voltar ao topo ↑",
    "photo.alt": "Retrato de Ricardo Junior",
    "scroll.aria": "Rolar para Sobre",
    "feat.alt": "Interface do MergeScope com três painéis de diff",
    "meta.desc": "Ricardo Junior — Desenvolvedor Full-Stack focado em arquitetura de software para SaaS, ERP e Inteligência Artificial, com bancos vetoriais, RAG e MCP."
};

const TEXTOS_UI = {
    en: { abrir: "Open menu", fechar: "Close menu", titulo: "Ricardo Junior — Full-Stack Developer" },
    pt: { abrir: "Abrir menu", fechar: "Fechar menu", titulo: "Ricardo Junior — Desenvolvedor Full-Stack" }
};

const EN = {};
document.querySelectorAll("[data-i18n]").forEach(el => { EN[el.dataset.i18n] = el.innerHTML; });
document.querySelectorAll("[data-i18n-alt]").forEach(el => { EN[el.dataset.i18nAlt] = el.alt; });
document.querySelectorAll("[data-i18n-aria]").forEach(el => { EN[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
document.querySelectorAll("[data-i18n-content]").forEach(el => { EN[el.dataset.i18nContent] = el.content; });

let idioma = "en";
const botoesIdioma = document.querySelectorAll(".idioma button");

function aplicarIdioma(novo) {
    idioma = novo === "pt" ? "pt" : "en";
    const dic = idioma === "pt" ? PT : EN;
    document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => { el.innerHTML = dic[el.dataset.i18n] ?? EN[el.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => { el.alt = dic[el.dataset.i18nAlt]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", dic[el.dataset.i18nAria]));
    document.querySelectorAll("[data-i18n-content]").forEach(el => { el.content = dic[el.dataset.i18nContent]; });
    document.title = TEXTOS_UI[idioma].titulo;

    [...grade.children].forEach((cartao, i) => {
        cartao.querySelector("h3").textContent = projetos[i].titulo[idioma];
        cartao.querySelector("p").textContent = projetos[i].descricao[idioma];
    });
    botoesIdioma.forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === idioma));
    atualizarRotuloMenu();
}

botoesIdioma.forEach(b => b.addEventListener("click", () => {
    aplicarIdioma(b.dataset.lang);
    try { localStorage.setItem("idioma", idioma); } catch (e) { /* armazenamento indisponível */ }
}));

document.getElementById("ano").textContent = new Date().getFullYear();

// Menu mobile
const topo = document.getElementById("topo");
const botaoMenu = document.querySelector(".topo__menu");
botaoMenu.addEventListener("click", () => {
    const aberto = topo.classList.toggle("topo--aberto");
    document.body.classList.toggle("travado", aberto);
    botaoMenu.setAttribute("aria-expanded", aberto);
    atualizarRotuloMenu();
});
function atualizarRotuloMenu() {
    const aberto = topo.classList.contains("topo--aberto");
    botaoMenu.setAttribute("aria-label", TEXTOS_UI[idioma][aberto ? "fechar" : "abrir"]);
}
const fecharMenu = () => {
    topo.classList.remove("topo--aberto");
    document.body.classList.remove("travado");
    botaoMenu.setAttribute("aria-expanded", "false");
    atualizarRotuloMenu();
};
document.querySelectorAll(".topo__nav a").forEach(a => a.addEventListener("click", fecharMenu));
document.addEventListener("keydown", e => e.key === "Escape" && fecharMenu());
window.matchMedia("(min-width: 861px)").addEventListener("change", e => e.matches && fecharMenu());

// Indicadores do carrossel (mobile)
const pontos = document.getElementById("pontosProjetos");
pontos.innerHTML = projetos.map(() => "<span></span>").join("");
const marcarPonto = () => {
    const cartoes = grade.children;
    if (!cartoes.length) return;
    const passo = cartoes[0].offsetWidth + 14;
    const indice = Math.min(cartoes.length - 1, Math.round(grade.scrollLeft / passo));
    [...pontos.children].forEach((p, i) => p.classList.toggle("ativo", i === indice));
};
grade.addEventListener("scroll", marcarPonto, { passive: true });
marcarPonto();

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

// Idioma inicial: ?lang= na URL, depois a escolha salva; padrão inglês
let idiomaInicial = new URLSearchParams(location.search).get("lang");
if (!idiomaInicial) {
    try { idiomaInicial = localStorage.getItem("idioma"); } catch (e) { /* armazenamento indisponível */ }
}
aplicarIdioma(idiomaInicial || "en");
